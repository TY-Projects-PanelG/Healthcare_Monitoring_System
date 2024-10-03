import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { generateDate, months } from "../components/Calender";
import cn from "../components/Cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Schedule } from "../components/Schedule";

export default function Calendar() {
	const [data, setData] = useState(null);
	const [meets, setMeets] = useState([]);
	const [patientId, setPatientId] = useState('66e2ddb6a26bbb545a17ae40');
	const [display, setDisplay] = useState(false);
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

	const api = `http://localhost:8000/api/patients/`;
	const api2 = `http://localhost:8000/api/patients/${patientId}`;
	useEffect(() => {
		(async function () {
			const data = await fetch(api).then((res) => res.json());
			const data2 = await fetch(api2).then((res) => res.json());
			setData(data);
			setMeets(data2.appointments);
		})();
	}, []);
	console.log(meets);
	const date = selectDate.toDate().toDateString();

	// Destructure the meets object to access the required fields
	const { dayDate } = meets;

	return (
		<>
			<div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto h-screen items-center sm:flex-row flex-col">
				<div className="w-96 h-96">
					<div className="flex justify-between items-center">
						<h1 className="select-none font-semibold">
							{months[today.month()]}, {today.year()}
						</h1>
						<div className="flex gap-10 items-center">
							<GrFormPrevious
								className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
								onClick={() => {
									setToday(today.month(today.month() - 1));
								}}
							/>
							<h1
								className=" cursor-pointer hover:scale-105 transition-all"
								onClick={() => {
									setToday(currentDate);
								}}
							>
								Today
							</h1>
							<GrFormNext
								className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
								onClick={() => {
									setToday(today.month(today.month() + 1));
								}}
							/>
						</div>
					</div>
					<div className="grid grid-cols-7">
						{days.map((day, index) => (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						))}
					</div>

					<div className="grid grid-cols-7">
						{generateDate(today.month(), today.year()).map(
							({ date, currentMonth, today }, index) => (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? "bg-red-600 text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
											setDisplay(true);
										}}
									>
										{date.date()}
									</h1>
								</div>
							)
						)}
					</div>
				</div>
				<div className="h-96 w-96 sm:px-5">
					<h1 className="font-semibold">
						Schedule for {selectDate.toDate().toDateString()}
					</h1>
					{/* Conditionally render based on matching date */}
					{date === dayDate &&
						meets.map((item, key) => (
							<div key={key}>
								<p>Diagnose: {item.diagnose}</p>
							</div>
						))}
				</div>
			</div>
			{display && (
				<div className="">
					<Schedule selectDate={selectDate} setDisplay={setDisplay} />
				</div>
			)}
		</>
	);
}

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
    //   user: "rohanpaltewar@gmail.com",
      user:process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

export const sendMail = async(request,response)=>{
    try {
        const {email,subject,message} = request.body;
        console.log(email, subject, message);
        let mailOptions = {
            from:"asha123sharma4@gmail.com",
            to:email,
            subject:subject,
            text:message,
        };
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }else{
                console.log("Email Sent Successfully!!")
            }
        })
    } catch (error) {
        console.log(error);
    }
};
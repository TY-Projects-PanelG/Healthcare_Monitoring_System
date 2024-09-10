import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    //   user: "rohanpaltewar@gmail.com",
      user:"asha123sharma4@gmail.com",
      pass: "likeaboss",
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
            message:message
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
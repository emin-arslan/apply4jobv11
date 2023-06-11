const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'helpapply4job@gmail.com',
        pass:'tdmixpmaoygkxijc'
    }
})

const mailSender = (from,to,subject,text) =>
{
    let result = true;
    let mailOptions = {
        to,
        subject,
        text,
        from
    }
    transporter.sendMail(mailOptions,(err,data)=>{
        if(err){
            result = false;
        }
        
    })
    return result
}

module.exports = mailSender
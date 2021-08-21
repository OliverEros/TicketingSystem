
class NodeMailer{
    constructor(nodemailer){
        let transporterObject = {
            host : 'localhost',
            port : 25,
            secure : false,
           ignoreTLS : true
        }
        this.transporter = nodemailer.createTransport(transporterObject);
    }

    verifyTransporter(){
        this.transporter.verify((err, success) => {
            if(err){
                console.log(err)
                return false;
            } else {
                console.log('Nodemailer is running!')
                return true;
            }
        })
    }

    sendEmail(message){
        this.transporter.sendMail(message,(err, info) => {
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
    }
}

module.exports = NodeMailer;
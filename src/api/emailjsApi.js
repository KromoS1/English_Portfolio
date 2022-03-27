import emailjs from "@emailjs/browser";

export const sendForm = async (form) => {

    try{
        const response = await emailjs.send('service_jtfodsh','template_e8xk519',{...form},'QQ48SW3C2ps98CdoQ');

        console.log(response);
    }catch (e){
        console.log(e.message);
    }
}


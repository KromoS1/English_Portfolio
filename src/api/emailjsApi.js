import emailjs from "@emailjs/browser";
import {SERVICE_KEY, TEMPL_KEY, USER_ID} from "./keysEmailJS";

export const sendForm = (form) => {
    try{
        emailjs.sendForm(SERVICE_KEY,TEMPL_KEY,form,USER_ID)
            .then(res => {
                if (res.status === 200){
                    alert('Ваша заявка отправлена. Наши менеджеры с вами свяжуться.');
                }
            });
    }catch (e){
        console.log(e.message);
    }
}


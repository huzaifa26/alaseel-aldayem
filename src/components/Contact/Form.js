import styles from "./Form.module.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Form() {
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();

            
    
        emailjs.sendForm('service_293o5gm', 'template_hlh17gl', form.current, 'PCrkZDdTgRVPTxMHf')
        .then((result) => {
            console.log(result);
            form.current.firstname.value=""
            form.current.lastname.value=""
            form.current.email.value=""
            form.current.message.value=""
        }, (error) => {
            console.log(error);
        });
    };

    return ( 
        <div className={styles.Form}>
            <div>
                <h2>ALASEEL AL DAYEM GOODS WHOLESALERS L.L.C</h2>
                <p>For any kind of enquiries and business, contact us</p>
                <p><img src="./location-arrow-solid.svg" alt=""/>Office#310, Wasl R260 Block-B, Dubai UAE</p>
                <p><img src="./phone-solid.svg" alt=""/>Office : +971 4 287 9500</p>
                <p><img src="./phone-solid.svg" alt=""/>Mobile : +971 527114003 / +971 52 711 4003</p>
                <p><img src="./whatsapp-brands.svg" alt=""/>+971 58 861 4009</p>
                <p><img src="./envelope-solid.svg" alt=""/>alaseelaldyem2021@gmail.com</p>
                <p><img src="./internet-explorer-brands.svg" alt=""/>alaseelaldayem.com</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>First Name
                        <input required type={'text'} name="firstname"></input>
                    </label>

                    <label>Last Name
                        <input required type={'text'} name="lastname"></input>
                    </label>
                </div>
                <label>Email
                    <input required type={'email'} name="email"></input>
                </label>

                <label>Comment or Message<textarea required type={'text'} name="message"></textarea></label>

                <button type="submit">Submit</button>
            </form>
        </div>
     );
}

export default Form;
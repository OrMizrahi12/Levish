import '../../css/Forms/Form.css'
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [msg,setMsg] = useState()
    const submitSend = name.trim().length > 1 && phone.trim().length >= 8;

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('levish_serv_123', 'template_d7ysblw', e.target, 'culR41Zl-6zqTpLls')
            .then(() => setMsg("🖤 תודה! הפרטים שלך נשלחו בהצלחה ונחזור אלייך בהקדם"), (error) => setMsg("סליחה, אנחנו חושבים שמשהו לא בסדר אצלנו. נסי ליצור קשר בדרכים אחרות"));
    }

    return (
        <form className="MainCard" onSubmit={sendEmail}>
            <div className='elementCenter'>
            <input onChange={e => setName(e.target.value)} placeholder="שם מלא" type="text" className="textInput" name="name" />
            <input onChange={e => setPhone(e.target.value)} placeholder="טלפון" type="number" className="textInput" name="phone" />
            <input className='BtnForm' type="submit" value="שלחי ואחזור אלייך" disabled={!submitSend} />
            <p>{msg}</p>
            </div>
        </form>
    )
}

export default Form
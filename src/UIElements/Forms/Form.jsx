import '../../css/Forms/Form.css'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState()
    const submitSend = name.trim().length > 1 && phone.trim().length >= 8;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('levish_serv_123', 'template_d7ysblw', e.target, 'culR41Zl-6zqTpLls')
            .then(() => {
                setMsg("馃枻 转讜讚讛! 讛驻专讟讬诐 砖诇讱 谞砖诇讞讜 讘讛爪诇讞讛 讜谞讞讝讜专 讗诇讬讬讱 讘讛拽讚诐")
                navigate("/TanksPage");
            },
            (error) => setMsg("住诇讬讞讛, 讗谞讞谞讜 讞讜砖讘讬诐 砖诪砖讛讜 诇讗 讘住讚专 讗爪诇谞讜. 谞住讬 诇讬爪讜专 拽砖专 讘讚专讻讬诐 讗讞专讜转"));

    }

    return (
        <form className="MainCard" onSubmit={sendEmail}>
            <div className='elementCenter'>
                <p className='formTitle' >讛砖讗讬专讬 驻专讟讬诐 讜讗讞讝讜专 讗诇讬讬讱</p>
                <input onChange={e => setName(e.target.value)} placeholder="砖诐 诪诇讗" type="text" className="textInput" name="name" />
                <input onChange={e => setPhone(e.target.value)} placeholder="讟诇驻讜谉" type="number" className="textInput" name="phone" />
                <input className='BtnForm' type="submit" value="砖诇讞讬" disabled={!submitSend} />
                <p>{msg}</p>
            </div>
        </form>
    )
}

export default Form
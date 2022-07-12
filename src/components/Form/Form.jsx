
import '../Form/form.css'
import {useState} from 'react';

export const Form = (createOrder) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    return (
        <>
            <form className="formulario">
                <input type="text" name="name" placeholder="Nombre" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="Email" name="Email" placeholder="Email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" name="tel" placeholder="Telefono" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button onClick={() => createOrder(name,email,phone)}>Finalizar Compra</button>
            </form>
        </>
    )

}
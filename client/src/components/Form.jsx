import { useState } from "react"
import axios from "axios"

export default function Form() {
    //Formulario Controlado!!
    const [input, setInput] = useState({
        username: '',
        name: '',
        email: '',
        phone: '',
        company: ''
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    function handleSubmit() {
        axios.post('http://localhost:3001/create', input)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <label>Username:</label>
            <input name="username" value={input.username} onChange={handleInputChange}/><br/>
            <label>Name:</label>
            <input name='name' value={input.name} onChange={handleInputChange}/><br/>
            <label>Email:</label>
            <input name="email" value={input.email} onChange={handleInputChange}/><br/>
            <label>Phone:</label>
            <input name="phone" onChange={handleInputChange}/><br/>
            <label>Company:</label>
            <input name="company" onChange={handleInputChange}/><br/>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}
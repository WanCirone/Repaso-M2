import { useState } from "react"

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
        //input
    }

    return (
        <div>
            <label>Username:</label>
            <input name="username" value={input.username} onChange={handleInputChange}/><br/>
            <label>Name:</label>
            <input name='name' value={input.name} onChange={handleInputChange}/><br/>
            <label>Email:</label>
            <input value={input.email} onChange={handleInputChange}/><br/>
            <label>Phone:</label>
            <input onChange={handleInputChange}/><br/>
            <label>Company:</label>
            <input onChange={handleInputChange}/><br/>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}
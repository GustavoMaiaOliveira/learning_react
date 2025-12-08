import { useState } from "react"

export function Calculadora() {
    const [number, setNumber] = useState("")

    const handleChange = (event) => {
        setNumber(event.target.value)
    }

    return (
        <div className="Calculadora">
            <p >Digite o primeiro número</p>
            <input type="text" onChange={handleChange}/>
            <p>{number}</p>
            <button>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <p>Digite o segundo número</p>
            <input type="text" onChange={handleChange}/>
        </div>
        
    )
}
// Contador
import { useState } from 'react';

export function Contador() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Você clicou no botão {count} vezes</p>
            {/* {count > 0 && ( */}
            <button disabled={count > 0 ?  false : true} onClick={() => setCount(count - 1)}>Diminuir</button>
        {/* )} */}
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
        </div>
    );
};
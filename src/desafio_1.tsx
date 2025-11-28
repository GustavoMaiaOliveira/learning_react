// Boas-vindas

interface Props {
    name: string
    idade: number
}

// export default function DarNome(){
//     return(
//         <div>
//             <BoasVindas name="Joao"></BoasVindas>
//         </div>
//     )
// }

export function BoasVindas(props: Props) {
    return (
        <div>
            <p>Olá, {props.name} seja bem-vindo!</p>
            <p>eu tenho {props.idade} anos</p>
        </div>
    )
}
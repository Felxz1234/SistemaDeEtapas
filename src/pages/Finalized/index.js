import './finalized.css'
import { useSelector } from 'react-redux'

export default function Finalized(){

    const dados = useSelector((dados)=>{return dados})

    return(
        <div className="finalized">
            <div className='areaa'>
               <h1 className='h1'>PRONTO!</h1>
               <h2 className='h2'>✔️</h2>
               <p className='p'>Clique no botão abaixo para iniciar o download. Bons estudos!</p>
               <a href='https://mcusercontent.com/4b8b5272eb488a81bc5616d4d/files/44d68256-6b41-476f-b46e-beea688040d2/Ebook_pensamento_cr%C3%ADtico.pdf'><button className='button'>BAIXE SEU EBOOK AQUI!</button></a>
            </div>
        </div>
    )
}
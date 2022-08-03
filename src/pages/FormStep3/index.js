
import './style.css'
import Theme from "../../components/theme"
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function FormStep3(){

    const dados =  useSelector((dados)=>{return dados})
    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(()=>{
        if(dados.name == ''){
            history('/')
        }else{
            dispatch({
                type:'currentStep',
                payload:3
            })
        }
    },[])

    function handleEmailChange(e){
        let email = e.target.value
        dispatch({
            type:'email',
            payload:email
        })
    }

    function handleNumberChange(e){
        let number = e.target.value
        dispatch({
            type:'number',
            payload:number
        })
    }

    function handleNextStep(){
        if(dados.email == '' & dados.number =='' ){
            alert('coloque os dados correspondentes')
        }else{
            history('/finalized')
        }
    }

    return(
        <div className="formstep2">
            <Theme>
                <div className='container'>
                   <p>Passo 3/3</p>
                   <h1>Legal {dados.name}, onde te achamos?</h1>
                   <p>preencha com seus contatos para conseguirmos entrar em contato</p>
                   <hr></hr>
                   <label>qual é seu email?</label>
                   <input name='email' onChange={handleEmailChange} type={'text'}></input>
                   <label>qual é seu numero?</label>
                   <input onChange={handleNumberChange} type={'number'}></input>

                    <div className="fg">
                        <Link to={'/step2'}><button className="an">Voltar</button></Link>
                        <button  onClick={handleNextStep}>finalizar cadastro</button>
                    </div>

                </div>
            </Theme>
        </div>
    )
}
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { innitialState } from '../../reducers/StepReucer'
import './style.css'
import Theme from '../../components/theme'
import { useNavigate } from 'react-router-dom'

export default function FormStep1(){

    const history = useNavigate();

    const dados = useSelector((state)=>{return state})
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type:'currentStep',
            payload:1
        })
    },[])

    function handleNextStep(){
        if(dados.name == ''){
            alert('digite seu nome')
        }else{
            history('/step2')
        }
        
    }

    function handleChangeName(e){
        let event = e.target.value
        dispatch({
            type:'name',
            payload:event
        })
    }

    return(
        <div className="formstep1">
            <Theme>
                <div className='container'>
                   <p>Passo 1/3</p>
                   <h1>Vamo começar com seu nome</h1>
                   <p>Preencha o campo abaixo com seu nome completo.</p>
                   <hr></hr>
                   <label>Seu nome completo</label>
                    <input 
                         value={dados.name}
                         onChange={handleChangeName}
                         autoFocus type={'text'}>
                    </input>
                    <button onClick={handleNextStep}>Próximo</button>
                </div>
            </Theme>
        </div>
    )
}
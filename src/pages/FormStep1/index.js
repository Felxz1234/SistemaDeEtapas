import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { innitialState } from '../../reducers/StepReucer'
import Header from '../../components/header/Header'
import './style.css'
import Theme from '../../components/theme'

export default function FormStep1(){

    const dados = useSelector((state)=>{return state})
    const dispatch = useDispatch()

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
                         autoFocus type={'text'}>
                    </input>
                    <button>Próximo</button>
                </div>
            </Theme>
        </div>
    )
}
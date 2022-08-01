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
                
            </Theme>
        </div>
    )
}
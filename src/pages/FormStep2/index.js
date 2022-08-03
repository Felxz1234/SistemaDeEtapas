import './style.css'
import Theme from "../../components/theme"
import {useDispatch, useSelector} from 'react-redux'
import SideBar from '../../components/sidebarItem'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FormStep2(){

        const dados  = useSelector((dados)=>{return dados})
        const dispatch = useDispatch()

        const history = useNavigate();


        useEffect(()=>{
            if(dados.name === ''){
                history('/')
            }else{
                dispatch({
                    type:'currentStep',
                    payload:2
                })
            }
            
        },[])


        function NextLevel(number){
            dispatch({
                type:'level',
                payload:number
            })
        }


        return(
            <div className="formstep2">
                <Theme>
                    <div className='container'>
                       <p>Passo 2/3</p>
                       <h1>{dados.name}, qual é seu grau de escolaridade</h1>
                       <p>escolha a opção que melhor condiz com seu estado atual atualmente</p>
                       <hr></hr>
                       <SideBar
                            onClick={()=>NextLevel(0)}
                            title='ensino medio/fundamental'
                            description='sou aluno do ensino fundamental/medio'
                            icon='https://cdn-icons-png.flaticon.com/512/948/948264.png'
                            onclick
                 />
                        <SideBar
                            onClick = {()=>NextLevel(1)}
                            title='ensino superior'
                            description='faço curso superior em alguma faculdade'
                            icon = 'https://cdn-icons-png.flaticon.com/512/3079/3079302.png'
                 />
                         
                
                       <div className='h'> 
                         <Link to={'/'}><button className='an'>Voltar</button></Link>
                         <Link to={'/step3'}><button>proximo</button></Link>
                       </div> 
                         
                        
                    </div>
                </Theme>
            </div>
        )
    
}
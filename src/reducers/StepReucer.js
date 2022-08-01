
export const innitialState = {
    currentStep:0,
    name:'',
    level:0,
    email:'',
    github:'',
}



export function StepReducer(state=innitialState, action){
    switch (action.type) {
        case 'currentStep':
            return {...state,currentStep:action.payload};
        case 'name':
            return{...state,name:action.payload};
        
        case 'level':
            return {...state,level:action.payload};

        case 'email':
            return {...state,email:action.payload};  

        case 'github':
            return {...state,github:action.payload};  
            
        default:
            return state 
    }
}


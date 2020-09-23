const initialState = {
    contractors:[]
}

const contractors = (state=initialState, action) =>{
    if(action.type==='CONTRACTORS_SET_CONTRACTORS'){
        return{
            ...state,
            contractors: action.payload
        }
    }
    return state
}

export  default contractors
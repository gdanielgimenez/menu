const counterReducer = (state= 0 ,action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state=action.value
        case 'decrement':
            return state+11;
        default:
            return state;
    }
}
export default counterReducer;
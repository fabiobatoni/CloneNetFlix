const INITIAL_STATE = {
    userEmail: '',
    userLogado: 0,
};

function usuarioReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOG_IN':
            return {...state, userLogado: 1, userEmail: action.userEmail}
        case 'LOG_OUT':
            return {...state, userLogado: 0, userEmail: ''}
        default:
            return state;
    }
}

export default usuarioReducer;
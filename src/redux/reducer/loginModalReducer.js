// =====================================================
// [R] huiwon 2022-10-17 login modal reducer
// =====================================================

const initial_state = {
    modal_state : false
};

const loginModalReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'SET_LOGIN_MODAL':
            return {
                ...state, modal_state:action.payload
            };
        default: return state;
    }
}

export default loginModalReducer;
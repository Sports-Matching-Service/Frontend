// =====================================================
// [R] 모달 리듀서 huiwon 2022-10-17 
// =====================================================

const initial_state = {
    modal_state : false,
    address_state : false
};

const ModalReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'SET_LOGIN_MODAL':
            return {
                ...state, modal_state:action.payload
            };
        case 'SET_ADDRESS_MODAL':
            return {
                ...state, address_state:action.payload
            };
        default: return state;
    }
}

export default ModalReducer;
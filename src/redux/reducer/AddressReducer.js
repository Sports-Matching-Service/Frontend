// =====================================================
// [R] 주소 데이터 리듀서 by 2022-10-25 huiwon
// =====================================================

const initial_state = {
    address_data : ""
};

const AddressReducer = (state = initial_state, action) => {
    switch(action.type){
        case 'SET_ADDRESS_DATA':
            return {
                ...state, address_data:action.payload
            };
        default: return state;
    }
}

export default AddressReducer;
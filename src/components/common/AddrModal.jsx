import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useClickEvent } from "../../customHooks/useClickHooks";
import DaumPostcode from 'react-daum-postcode';
import { set_address_data } from "../../redux/actions/dataAction";

// =====================================================
// [C] 주소검색 모달 by 2022-10-25 huiwon
// =====================================================

const AddrModal = () => {

    const dispatch = useDispatch();
    const { address_state } = useSelector(state => state.ModalReducer);
    const { close_address } = useClickEvent();

    /** 다음 주소검색 패키지 */
    const select_address = (data) => {
        console.log(data);
        let fullAddress = data.address;
        let extraAddress = "";
        
        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }

            if (data.buildingName !== "") {
                extraAddress +=
                extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        
        dispatch(set_address_data(fullAddress));
        close_address();
    };

    return(
        <>
            <Modal show={address_state} onHide={close_address}>
                <Modal.Header closeButton>
                    <Modal.Title>주소검색</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DaumPostcode onComplete={select_address}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddrModal;
import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useClickEvent } from "../../customHooks/useClickHooks";
import DaumPostcode from 'react-daum-postcode';

// =====================================================
// [C] 주소검색 모달 by 2022-10-25 huiwon
// =====================================================

const AddrModal = () => {

    const { address_state } = useSelector(state => state.ModalReducer);
    const { close_address, select_address } = useClickEvent();

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
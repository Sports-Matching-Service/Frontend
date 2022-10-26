import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { swal_class } from "../js/sweetAlert";
import { set_login_modal, set_adress_modal } from "../redux/actions/modalAction";
import { set_address_data } from "../redux/actions/dataAction";


// =====================================================
// [R] huiwon 2022-10-17 click event collection
// =====================================================

export const useClickEvent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let swal_run;

    const open_modal = () => {
        dispatch(set_login_modal(true));
    }

    const close_modal = () => {
        dispatch(set_login_modal(false));
    }

    const open_address = () => {
        dispatch(set_adress_modal(true));
    }

    const close_address = () => {
        dispatch(set_adress_modal(false));
    }

    const move_page = (param) => {
        navigate(`/${param}`);
    }

    const back_page = () => {
        navigate(-1);
    }

    const regis_click = async() => {
        swal_run = new swal_class('info', '등록하시겠습니까?', '경기를 등록하시겠습니까?');
        const swal_result = await swal_run.confirm_alert();

        if(swal_result){
            console.log('경기 등록 api...');
        }
    }

    /** 다음 주소검색 패키지 */
    const select_address = (data) => {
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

    

    return { open_modal, close_modal, move_page, close_address, open_address, regis_click, back_page, select_address }
}
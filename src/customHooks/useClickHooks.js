import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { set_login_modal, set_adress_modal } from "../redux/actions/modalAction";


// =====================================================
// [R] huiwon 2022-10-17 click event collection
// =====================================================

export const useClickEvent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const on_post = (data) => {
        console.log('진입');
    }

    return { open_modal, close_modal, move_page, close_address, open_address }
}
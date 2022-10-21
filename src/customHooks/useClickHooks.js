import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { set_login_modal } from "../redux/actions/modalAction";


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

    const move_page = (param) => {
        navigate(`/${param}`);
    }

    return { open_modal, close_modal, move_page }
}
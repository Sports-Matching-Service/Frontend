import React from "react";
import { useDispatch } from "react-redux";
import { set_login_modal } from "../redux/actions/modalAction";


// =====================================================
// [R] huiwon 2022-10-17 click event collection
// =====================================================

/** modal */
export const useClickEvent = () => {
    const dispatch = useDispatch();

    const open_modal = () => {
        dispatch(set_login_modal(true));
    }

    const close_modal = () => {
        dispatch(set_login_modal(false));
    }

    return { open_modal, close_modal }
}
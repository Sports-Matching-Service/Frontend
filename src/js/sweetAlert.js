import Swal from "sweetalert2";

// =====================================================
// [F] sweetAlert by 2022-10-25 huiwon
// =====================================================

/** sweetAlert class (아이콘, 제목, 텍스트) */
export class swal_class {
    constructor(icon, title, text) {
        this.icon = icon;
        this.title = title;
        this.text = text;
    }

    normal_alert(){
        const state_alert = Swal.fire({
            icon: `${this.icon}`,
            title: `${this.title}`,
            text: `${this.text}`
        });

        return state_alert;
    }

    confirm_alert(){
        const state_alert = Swal.fire({
            icon: `${this.icon}`,
            title: `${this.title}`,
            text: `${this.text}`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '확인',
            cancelButtonText: '취소'
        }).then(result => {
            if(result.isConfirmed){
                return true;
            }
        });

        return state_alert;
    }
}
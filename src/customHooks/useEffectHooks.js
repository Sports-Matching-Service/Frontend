import React, { useEffect, useState } from "react";

const { kakao } = window;

// =====================================================
// [E] huiwon 2022-11-03 kakao map hooks collection
// =====================================================

export const useMaps = (prev_addr) => {

    /** 주소 -> 위도 경도 변환 hook */
    useEffect(()=>{

        const get_code = new kakao.maps.services.Geocoder();

        let callback_func = async (result, status) => {
            if(status === kakao.maps.services.Status.OK){
                const {x,y} = result[0];

                kakao_map_func(x, y);
            }
        };

        get_code.addressSearch(prev_addr, callback_func);

    }, []);


    /** kakao map 생성 함수 */
    const kakao_map_func = (x, y) => {

        const container = document.getElementById("my_map");

        const options = {
            center : new kakao.maps.LatLng(y, x),
            level : 3,
            isPanto : true
        };

        const marker = new kakao.maps.Marker({
            position : new kakao.maps.LatLng(y, x)
        });

        const map = new kakao.maps.Map(container, options);
        marker.setMap(map);
    }
}


// =====================================================
// [E] huiwon 2022-11-07 user device check hook
// =====================================================
export const DeviceWidth = () => {

    const [mobile_devide, set_mobile_device] = useState(false);

    useEffect(()=>{
        const user_device = window.innerWidth;
        if(user_device < 767){
            set_mobile_device(true);
        } else {
            set_mobile_device(false);
        }
    }, []);

    return mobile_devide;
}
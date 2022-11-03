import React, { useEffect } from "react";
import { useMaps } from "../../customHooks/useEffectHooks";

const { kakao } = window;

const Map = () => {

    const temp_addr = `서울시 은평구 진관동 79-15 롯데몰 은평점 9층 옥상`;

    const change_addr = useMaps(temp_addr);

    return(
        <div className="map_article">
            <div className="map_wrap" id="my_map" style={{width:"100%", height:"600px"}}></div>
        </div>
    )
}

export default Map;
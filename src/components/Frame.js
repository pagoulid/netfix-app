import { useState } from 'react';

export default function Frame({frame}){
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
    function dimensionHandler(e){
        let {renderHeight, renderWidth} = e.target
        setDimensions({ height: renderHeight, width: renderWidth })
    }
    //onLoad={dimensionHandler} width={dimensions.width} height={dimensions.width}
    //width="640" height="384"
    return(
        <div className="frame">
            <img src={frame.image}  alt=""  />
            <video>
                <source src={frame.videosrc} type={frame.videoformat} />
            </video>

        </div>
    )
}
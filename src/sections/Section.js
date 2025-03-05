import Frame from '../components/Frame'
export default function Section({id,background,header,text,isReverse,hasFrame,visual}){
    let order = isReverse?'reverse':''
    const block="section-block "+order
    const name ="section "+background
    const section = "section-"+id
   return(
    <div className={name}>
        <div className="content">
            <h2>{header}</h2>
            <div className="container">
                <div id={section} className={block}>
                    <p>{text}</p>
                    {hasFrame?<Frame frame={visual} />:<img src={visual.image} alt=""/>}
                </div>

            </div>
        </div>
    </div>
   ) 
}
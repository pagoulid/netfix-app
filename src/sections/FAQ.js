
import FAQItem from '../components/FAQItem';

export default function FAQ({background,list}){
    const name ="section "+background
    
    return(
    <div className={'FAQ '+name}>
        <div className="content">
            <h6>Frequently Asked Questions</h6>
            <div className="container">
                
                <ul className="list">
                    {list.map((element,index)=>{
                        return(<FAQItem FAQId={element.id} title={element.title} text={element.text} />)
                    })}
                </ul>

            </div>
        </div>
    </div>
   ) 
}
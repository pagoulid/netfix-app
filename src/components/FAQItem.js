import { useState } from 'react';
export default function FAQItem({FAQId,title,text}){
    const [visibility,setVisibility]=useState('hidden')
    function clickHandler(){
        setVisibility((state)=>{
            return (state==='visible')?'hidden':'visible'
        })
    }
    return(
        <li id={'FAQ-'+FAQId} key={FAQId} onClick={()=>{clickHandler()}}>
                            <div className='question'><h2>{title}</h2></div>
                            <div className={'answer '+visibility}><h4>{text}</h4></div>
                            
                            </li>)
    
}
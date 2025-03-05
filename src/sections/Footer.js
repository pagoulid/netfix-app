export default function Footer({header,text,lists}){
    
   return(
    <footer>
        <div className="content">
            <h4>{header}</h4>
            <h5>{text}</h5>
            <div className="container">
                <div className="lists">{lists.map(list=><ul>{list.map(element=><li key={element} >{element}</li>)}</ul>)}</div>
                
                    
                
            </div>
        </div>
    </footer>
   ) 
}
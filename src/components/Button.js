export default function Button({ text, type, size }){
    
    return <button className={type} width={size.width} height={size.height}>{text}</button>
}
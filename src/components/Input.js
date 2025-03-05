export default function Input({ text, itype, size }){
    
    return <input type={itype} height={size.height} placeholder={text} />
}
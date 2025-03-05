import Button from './components/Button'
import Input from './components/Input'
export default function Form({input_props,button_props}){
    let btn_size = {width:button_props.size.width, height:button_props.size.height}
    console.log(input_props,button_props)
    return(
        <div className="form">
            <Input text={input_props.text} itype={input_props.type} size={{height:input_props.size.height}} />
            <Button text={button_props.text} type={button_props.type} size={btn_size}/>

        </div>
    )
}
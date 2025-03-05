import Button from '../components/Button'
import Form from '../Form'
export default function Top(){
    const background = require('../resources/netflix-background.jpg')
    const logo = require('../resources/netflix-logo.png')
    let sizes = {
        button:{
            top:{
                width:100,
                height:80
            }
        },
        form:{
            input:{
                height:75
            },
            button:{
                width:150,
                height:95
            }
            
        }

    }
    let top_btn_size = {width:sizes.button.top.width,height:sizes.button.top.height}
    let form_props = {
        input:{
            text:'Email Address', 
            type:'mail',
            size:sizes.form.input
        },
        button:{
            text:'Get Started', 
            type:'sign',
            size:sizes.form.button
        }
    }
    return (
        <div className="section top">
            <img className="bckrnd" src={background} alt="" />
        <div className="content">
    

    <div className="container">
            <div>
            <img className="logo" src={logo} alt=""/>
            <div className="top-buttons" alt="">
                <Button text={'English'} type={'lang'} size={top_btn_size}/>
                <Button text={'Sign in'} type={'sign'} size={top_btn_size}/>
            </div>
            </div>
            <h2>Unimited Movies, TV Shows and more.</h2>
            <h5>Watch anywhere, cancel anytime.</h5>
            
            <Form input_props={form_props.input} button_props={form_props.button} />
    </div>
    </div>
    </div>)
}
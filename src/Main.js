import Top from './sections/Top'
import Section from './sections/Section'
import Footer from './sections/Footer'
export default function Main(){
    let scontent={
        id:1,
        header:"Enjoy on your TV",
        text:"Watch on Smart Tv's, Playstation, Xbox, Chromecast, Blu-ray players, AppleTV and more",
        frame:{
            
            image:require('./resources/tv.png'),
            videosrc:require('./resources/video-tv.mp4'),
            videoformat:'video/mp4',


        }
    }


    let scontent1={
        id:2,
        header:"Download your shows to watch offline",
        text:"Save your favorites easily and always have something to watch and more",
        frame:{
            image:require('./resources/Section2-img.jpg'),

        }
    }
    let flist=['Help Center','Jobs','Terms of Use','Contact Us']
    let slist=['FAQ','Investor Relations','Ways To Watch','Corporate Information']
    let tlist=['Account','Redeem Gift Cards','Privacy','Speed Test']
    let folist =['Media Center','Buy Gift Cards','Cookie Preferences','Legal Notices']
    const Tlist = [flist,slist,tlist,folist]
    return (
        <>
            <Top />
            <Section id={scontent.id} background={'black'} header={scontent.header} text={scontent.text} isReverse={false} hasFrame={true} visual={scontent.frame} />
            <Section id={scontent1.id} background={'black'} header={scontent1.header} text={scontent1.text} isReverse={true} hasFrame={false} visual={scontent1.frame} />
            <Footer  header={'Netflix'} text={'Questions? Contact us.'} lists={Tlist} />
        </>
    )
}
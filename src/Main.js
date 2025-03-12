import Top from './sections/Top'
import Section from './sections/Section'
import FAQ from './sections/FAQ'
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

    let scontent2={
        id:3,
        header:"Watch Everywhere",
        text:"Stream Unlimited movies and Tv shows on your phone, tablet, laptop without paying more.",
        frame:{
            
            image:require('./resources/Section3-tv.png'),
            videosrc:require('./resources/Section3-video-tv.webm'),
            videoformat:'video/webm',


        }
    }
    let FAQcontent={
        list:[
            {id:1,title:'What is Netflix',text:'Netflix is a subscription-based streaming service that offers a wide range of TV shows, movies, documentaries, and original content. It allows users to watch on-demand content through internet-connected devices like smartphones, tablets, smart TVs, and computers.'},
            {id:2,title:'How much does Netflix cost',text:'Netflix offers several subscription plans with varying prices. Basic Plan(7.99/month), Standard Plan(15.99/month) and Premium Plan(19.99/month). Prices may vary based on your region, and Netflix occasionally updates pricing.'},
            {id:3,title:'Where can i watch',text:'You can watch Netflix on a wide variety of devices, including: Smartphones and tablets (iOS and Android), Smart TVs (Samsung, LG, Vizio, etc.), Streaming devices (Apple TV, Google Chromecast, etc.), Game consoles (PlayStation, Xbox) and Computers'},
            {id:4,title:'How do i cancel',text:'To cancel your Netflix subscription, navigate to Account settings and under Membership & Billing, click Cancel Membership.'},
            {id:5,title:'What can i watch on Netflix',text:"Netflix offers a wide array of content, including TV shows, Movies, Documentaries and Children's content. Furthermore Netflix Oringinals provides exclusive content produced by Netflix, such as The Queen's Gambit, Bridgerton, and Money Heist."}
        ]
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
            <Section id={scontent2.id} background={'black'} header={scontent2.header} text={scontent2.text} isReverse={false} hasFrame={true} visual={scontent2.frame} />
            <FAQ background={'black'} list={FAQcontent.list} />
            <Footer  header={'Netflix'} text={'Questions? Contact us.'} lists={Tlist} />
        </>
    )
}
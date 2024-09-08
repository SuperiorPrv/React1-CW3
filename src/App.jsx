import FirstBlock from "./components/firstBlock/FirstBlock";
import FourthBlock from "./components/fourthBlock/FourthBlock";
import Header from "./components/header/Header";
import SecondBlock from "./components/secondBlock/SecondBlock";
import ThirdBlock from "./components/thirdBlock/ThirdBlock";
import image1 from "./assets/images/6.png";
import image2 from "./assets/images/7.png";
import img1 from './assets/images/Frame.png';
import img2 from './assets/images/Frame1.png';
import img3 from './assets/images/Frame2.png';
import img4 from './assets/images/Frame3.png';
import img5 from './assets/images/Frame4.png';
import img6 from './assets/images/Frame5.png';
import FifthBlock from "./components/fifthBlock/FifthBlock";
import SixthBlock from "./components/sixthBlock/SixthBlock";
import SeventhBlock from "./components/seventhBlock/SeventhBlock";
import EightBlock from "./components/eightBlock/EightBlock";

const Data = [
    {
        id:1,
        name:"Decor Plate",
        price:65.00,
        image:img1
    },
    {
        id:2,
        name:"Mini Pottery",
        price:75.00,
        image:img2
    },
    {
        id:3,
        name:"Set of Potterys",
        price:125.00,
        image:img3
    },
    {
        id:4,
        name:"Orange Ceramic",
        price:55.00,
        image:img4
    },
    {
        id:5,
        name:"Dark Bowl",
        price:115.00,
        image:img5
    },
    {
        id:6,
        name:"Square Pottery",
        price:75.00,
        image:img6
    },
]

export default function App() {
    return <>
        <Header/>
        <FirstBlock/>
        <SecondBlock/>
        <ThirdBlock/>
        <FourthBlock image={image1} title={"Gold & Black Pottery"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."} direction={"left"}/>
        <FourthBlock image={image2} title={"Orange Ceramic"} desc={"Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt."} direction={"right"}/>    
        <FifthBlock data={Data}/>
        <SixthBlock/>
        <SeventhBlock/>
        <EightBlock/>
    </>
}
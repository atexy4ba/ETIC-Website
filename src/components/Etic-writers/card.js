import YellowButton from "./yellow-button"
import GreenButton from "./green-button" 
import img from "../../../public/Frame37.png"

export default function Card() { 
    return ( 
        <div className="flex flex-row w-5/6 h-96 justify-evenly">

        <div className="Card flex flex-col items-center">
            <div className ='h-[281px] w-[370px] rounded-xl bg-yellow mb-5 ' >
                <img src= "../../../Frame37.png"/>
            </div> 
                <div className="w-[370px] flex flex-row justify-start" > 
                    <YellowButton text ="Technologie"/>
                    <GreenButton text ="Communication"/>
                </div> 
        </div>
   
        
    </div>
    )

    
}
/* eslint-disable @next/next/no-img-element */
import Greenbtn from "./Greenbtn";
import Yellowbtn from "./Yellowbtn";

export default function Card() {
  return (
    <div className="flex flex-row w-5/6 h-96 justify-evenly">
      <div className="Card flex flex-col items-center">
        <div className="h-[281px] w-[370px] rounded-xl bg-yellow mb-5 ">
          <img src="/writers/Frame37.png" alt="article" />
        </div>
        <div className="w-[370px] flex flex-row justify-start">
          <Greenbtn text="Technologie" />
          <Yellowbtn text="Communication" />
        </div>
      </div>
    </div>
  );
}

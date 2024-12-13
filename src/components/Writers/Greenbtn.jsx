export default function Greenbtn(props) {
  return (
    <button className="h-[26px] w-[107px] bg-green rounded-full text-xs font-satoshi font-bold mx-2">
      {props.text}
    </button>
  );
}

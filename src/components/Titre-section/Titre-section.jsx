function TitreSection(props) {
  return (
    <div className="flex md:flex-row flex-col  gap-4  items-center bg-white bg-opacity-100">
      <h1 className="text-4xl md:w-[30%] md:text-3xl lg:text-6xl font-bold font-satoshi">
        {props.h1}<span style={{ color: `${props.color}` }}> {props.span}</span>
      </h1>
      <p className="font-satoshi md:w-[70%] font-normal text-sm md:text-xl md:leading-relaxed text-pretty">
        {props.p}
      </p>
    </div>
  );
}

export default TitreSection;

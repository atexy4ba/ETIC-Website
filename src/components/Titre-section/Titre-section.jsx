function TitreSection(props) {
  return (
    <div className="flex flex-row justify-between items-center bg-white bg-opacity-100">
      <h1 className="sm:text-2xl md:text-3xl lg:text-5xl font-bold font-satoshi">
        {props.h1}
        <span style={{ color: `${props.color}` }}> {props.span}</span>
      </h1>
      <p className="font-satoshi font-normal text-lg md:text-base leading-relaxed text-wrap">
        {props.p}
      </p>
    </div>
  );
}

export default TitreSection;

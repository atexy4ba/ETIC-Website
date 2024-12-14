import Animation from "./Animation";

export default function HeroSection() {
  return (
    <section className="flex flex-col px-5 md:px-16 gap-10">
      <div className="hero-container bg-white bg-opacity-100 flex flex-col gap-10">
        <h1 className="font-satoshi text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl text-black font-bold">
          {" "}
          WE ACT <br /> FOR <span className="text-blue">IMPACT</span>
          <span className="font-serif">.</span>
        </h1>
        <div className="flex flex-row justify-between">
          <p className="font-satoshi  text-black font-normal text-lg block">
            ETIC Club est le premier club étudiant dédié à l’entrepreneuriat,
            <br /> l’innovation et aux nouvelles technologies.
          </p>
          <h2 className="font-satoshi text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold">
            SINCE 2009
          </h2>
        </div>
      </div>
      <Animation />
    </section>
  );
}

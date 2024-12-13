import Card from "./Card";

export default function Writers() {
  return (
    <section className="h-screen flex justify-center mt-10 ">
      <div className="flex flex-row w-5/6 h-96 ">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

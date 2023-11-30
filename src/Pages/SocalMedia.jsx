import { NextBtn, GoBack} from "./multiUse";
function SocalMedia() {
  return (
    <div>
      <section className="socalMediaLinks">
        <GoBack link="/tags"/>
        <NextBtn link="/donateMe" />
      </section>
    </div>
  );
}

export default SocalMedia;

import image from "../../../assets/my_image.jpeg";
import transparentImage from "../../../assets/image-trasparent.png";
import "./Section1.scss";

export function Section1() {
  function onAnimationEnd(e: React.AnimationEvent<HTMLImageElement>) {
    e.currentTarget.id = "img-on-hover";
  }

  return (
    <section className="section1">
      <img src={image} alt="image" className="actual-image" />
      <h1 className="name">
        Sidharth
        <span className="name-suffix">
          <h1 className="name-suffix">.r</h1>
        </span>
      </h1>
      <h3 className="h3-sub">Flutter developer</h3>
      <img
        src={transparentImage}
        alt="transparent image"
        className="croped-image"
        onAnimationEnd={onAnimationEnd}
      />
    </section>
  );
}



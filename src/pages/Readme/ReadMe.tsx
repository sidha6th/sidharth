import "./ReadMe.scss";
import { useEffect, useRef } from "react";
import { Section1 } from "./components/Section1.tsx";


const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-section");
    } else {
      entry.target.classList.remove("animate-section");
    }
  });
});


export function ReadMe() {
  const container = useRef(null);
  useEffect(() => {
    const sections = document.querySelectorAll(".hidden");
    sections.forEach((e) => {
      intersectionObserver.observe(e);
    });
    return;
  },);


  return (
    <div ref={container} id="page">
      <Section1 />
      <div className="section-3"></div>
      <div className="section-2">
        <div className="box"></div>
      </div>
      <div className="section-3"></div>
    </div>
  );
}

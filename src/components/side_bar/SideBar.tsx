import SvgExplore from "../../assets/svg/Explore";
import "./SideBar.scss";

export function SideBar() {

  return (
    <div id={"side-bar"}>
      <div className="side-bar-button">
        <SvgExplore />
      </div>
      <div className="side-bar-button">
        <SvgExplore />
      </div>
      <div className="side-bar-button">
        <SvgExplore />
      </div>
      <div className="side-bar-button">
        <SvgExplore />
      </div>
    </div>
  );
}

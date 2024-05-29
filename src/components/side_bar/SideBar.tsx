import SvgExplore from "../../assets/svg/Explore";
import { Constants } from "../../common/constant";
import "./SideBar.scss";

export function SideBar() {
  const width = Constants.dimensions.sideBarWidth;

  return (
    <div id={"side-bar"} style={{ width: `${width}px` }}>
      <div className="side-bar-button"><SvgExplore /></div>
      <div className="side-bar-button"><SvgExplore /></div>
      <div className="side-bar-button"><SvgExplore /></div>
      <div className="side-bar-button"><SvgExplore /></div>
    </div>
  );
}

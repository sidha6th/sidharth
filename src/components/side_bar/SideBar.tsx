import SvgExplore from "../../assets/svg/Explore";
import { Constants } from "../../common/constant";
import { Button } from "../core/button/Button";
import "./SideBar.scss";

export function SideBar() {
  const width = Constants.dimensions.sideBarWidth;

  return (
    <div id={"side-bar"} style={{ width: `${width}px` }}>
      <Button child={<SvgExplore />} onClick={() => {}} />
    </div>
  );
}

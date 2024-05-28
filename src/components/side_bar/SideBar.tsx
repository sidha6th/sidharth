import { Constants } from '../../common/constant';
import './SideBar.scss'

export function SideBar() {
    return <div id={"side-bar"} style={{width:`${Constants.dimensions.sideBarWidth}px`}}></div>;
}
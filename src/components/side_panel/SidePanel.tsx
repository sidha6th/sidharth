import "./SidePanel.scss";
import { ArrowIcon } from "../icons/arrow_icon/ArrowIcon";
import { ExpansionTileListHolder } from "./folder_or_file_list_holder/ExpansionTileListView";
import { folders } from "../../redux/app_state/folders";
import { ResizableComponent } from "../core/resizable_element/ResizableComponent";
import { Constants } from "../../common/constant";

export function SidePanel() {
  return (
    <ResizableComponent initialWidth={Constants.dimensions.sidePanelDefaultWidth}
      child={
        <div id="side-panel">
          <div className="title-box">
            <p className="title1">Explore</p>
          </div>
          <div className="title-box2">
            <ArrowIcon opened />
            <p className="proj-name">Sidharth</p>
          </div>
          {<ExpansionTileListHolder folders={folders} />}
        </div>
      }
    />
  );
}

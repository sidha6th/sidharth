import "./SidePanel.scss";
import { ArrowIcon } from "../icons/arrow_icon/ArrowIcon";
import { ExpansionTileListHolder } from "./folder_or_file_list_holder/ExpansionTileListView";
import { ResizableComponent } from "../core/resizable_element/ResizableComponent";
import { Constants } from "../../common/constant";
import { rootDir } from "../../core/app_state/app_dir";

export function SidePanel() {
  return (
    <ResizableComponent
      initialWidth={Constants.dimensions.sidePanelDefaultWidth}
      child={
        <div id="side-panel">
          <div className="title-box">
            <p className="title1">Explore</p>
          </div>
          <div className="title-box2">
            <ArrowIcon opened />
            <p className="proj-name">Sidharth</p>
          </div>
          {
            <ExpansionTileListHolder
              parentPath="/"
              folders={Array.from(rootDir.children?.values() ?? [])}
            />
          }
        </div>
      }
    />
  );
}

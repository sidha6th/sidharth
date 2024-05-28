import { useEffect, useState } from "react";
import "./EditorsViewHolder.css";
import { Constants } from "../../../../common/constant";
import { EditorViewComponent } from "../editor_page/EditorPage";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { PagesTitleCardHoldingComponent } from "../editor_title_card_holding_component/EditorTitleCardHoldigComponent";

export function EditorsViewHolder() {
  const [viewSize, setSize] = useState(window.outerWidth);

  useEffect(() => {
    const dimensions = Constants.dimensions;
    const sideComponentsWidth =
      dimensions.sideBarWidth + dimensions.sidePanelDefaultWidth;

    const handleResize = () => {
      const newSize = window.innerWidth - sideComponentsWidth;
      if (newSize !== viewSize) {
        setSize(newSize);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const state = useSelector((state: RootState) => state.editorReducer);

  return (
    <div id="pages-wrapper">
      <PagesTitleCardHoldingComponent/>
      <div className="opened-page-holder">
        {state.openedEditors.map((_) => EditorViewComponent())}
      </div>
    </div>
  );
}

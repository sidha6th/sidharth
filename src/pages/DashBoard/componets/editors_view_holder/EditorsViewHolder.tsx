import { useEffect, useState } from "react";
import "./EditorsViewHolder.css";
import { Constants } from "../../../../common/constant";
import { PagesTitleCardHoldingComponent } from "../../../../components/pages_title_card_holding_component/PagesTitleCardHoldigComponent";
import { EditorViewComponent } from "../editor_page/EditorPage";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

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
    <div id="pages-wrapper" style={{ width: `${viewSize}px` }}>
      <PagesTitleCardHoldingComponent title="Welcome" />
      <div className="opened-page-holder">
        {state.openedEditors.map((_) => EditorViewComponent())}
      </div>
    </div>
  );
}

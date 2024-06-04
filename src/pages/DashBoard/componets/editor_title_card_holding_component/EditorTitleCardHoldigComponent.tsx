import "./EditorTitleCardHoldingComponent.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { TitleCard } from "./editor_title_card/TitleCard";
export function PagesTitleCardHoldingComponent() {
  const state = useSelector((state: RootState) => state.editorReducer);
  return (
    <div id="opened-pages-title-card-holder">
      {state.openedEditorsPath.map((value, index) => (
        <TitleCard index={index} key={value} fullPath={value} />
      ))}
    </div>
  );
}

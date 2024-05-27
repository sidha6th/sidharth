import "./EditorTitleCardHoldingComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { onTapClose } from "../../../../redux/slice/editor_slice";
import { TitleCard } from "./editor_title_card/TitleCard";



export function PagesTitleCardHoldingComponent() {
  const state = useSelector((state: RootState) => state.editorReducer);
const dispatch = useDispatch();
  return (
    <div id="opened-pages-title-card-holder">
      {state.openedEditors.map((value,index) => (
        <TitleCard title={value.name} onTap={()=>dispatch(onTapClose(index))} />
      ))}
    </div>
  );
}



import style from'./EditorsViewHolder.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { PagesTitleCardHoldingComponent } from "../editor_title_card_holding_component/EditorTitleCardHoldigComponent";
import { searchForFile as searchForPage } from "../../../../core/app_state/app_dir";

export function EditorsViewHolder() {
  const path = useSelector(
    ({ editorReducer }: RootState) =>
      editorReducer.openedEditorsPath[editorReducer.activeEditorIndex]
  );

  return (
    <div className={style.viewHolder}>
      <PagesTitleCardHoldingComponent />
      {searchForPage(path)?.page??<></>}
    </div>
  );
}

import "./TitleCard.scss";
import { Button } from "../../../../../components/core/button/Button";
import SvgClose from "../../../../../assets/svg/Close";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  onTapClose,
  onTapEditorTitleCard,
} from "../../../../../redux/slice/editor_slice";


export type PageTitleCardArgs = {
  fullPath: string;
  index: number;
};

export function TitleCard(arg: PageTitleCardArgs) {
  const dispatch = useDispatch();

  const title = useRef(() => {
    const splitedPath = arg.fullPath.split("/");
    return splitedPath[splitedPath.length - 1];
  });

  function onClick() {
    dispatch(onTapClose(arg.index));
  }

  function onClickCard() {
    dispatch(onTapEditorTitleCard(arg.index));
  }

  return (
    <div className="title-card selectable" title={arg.fullPath} >
      <p className="title" onClick={onClickCard}>{title.current()}</p>
      <Button child={<SvgClose />} onClick={onClick} />
    </div>
  );
}

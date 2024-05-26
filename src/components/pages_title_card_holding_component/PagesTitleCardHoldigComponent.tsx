import "./PagesTitleCardHoldingComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "../../common/constant";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export type PageTitleCardArgs = {
  title: string;
  onTap?: (index: number) => void;
};

export function PagesTitleCardHoldingComponent(arg: PageTitleCardArgs) {
  const state = useSelector((state: RootState) => state.editorReducer);

  return (
    <div id="opened-pages-title-card-holder">
      {state.openedEditors.map((value) => (
        <TitleCard title={arg.title} onTap={arg.onTap} />
      ))}
    </div>
  );
}

function TitleCard(arg: PageTitleCardArgs) {
  return (
    <div id="opened-page-title-card">
      <p>{arg.title}</p>
      <FontAwesomeIcon
        icon={faTimes}
        style={{
          color: Constants.styles.color.white,
          width: "9px",
          marginLeft: Constants.styles.margin.word,
          marginRight: Constants.styles.margin.word,
        }}
        onClick={() => arg.onTap?.call(arg.onTap, 1)}
      />
    </div>
  );
}

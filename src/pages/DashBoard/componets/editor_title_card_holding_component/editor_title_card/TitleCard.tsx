import "./TitleCard.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Constants } from "../../../../../common/constant";

export type PageTitleCardArgs = {
  title: string;
  onTap?: () => void;
};
export function TitleCard(arg: PageTitleCardArgs) {
  return (
    <div id="opened-page-title-card">
      <p>{arg.title}</p>
      <div className="buttonBG">
      <FontAwesomeIcon
        className="close-button"
        icon={faTimes}
        style={{
          marginLeft: Constants.styles.margin.word,
          marginRight: Constants.styles.margin.word,
        }}
        onClick={() => arg.onTap?.call(arg.onTap)}
        />
        </div>
    </div>
  );
}

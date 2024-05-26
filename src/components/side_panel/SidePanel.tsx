import { useDispatch } from "react-redux";
import "./SidePanel.css";
import { onTapEditorTitleCard } from "../../redux/slice/editor_slice";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SidePanel() {
  const dispatch = useDispatch();

  return (
    <div id="side-panel">
      <div className="title-box">
        <p  className="title1">Explore</p>
        <FontAwesomeIcon
          className="arrow-down"
          icon={faChevronDown}
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className="title-box2">
        <FontAwesomeIcon
          className="arrow-down"
          icon={faChevronDown}
          style={{ color: "#ffffff" }}
        />
        <p className="proj-name">Sidharth</p>
      </div>
      <li onClick={() => dispatch(onTapEditorTitleCard(1))}>1</li>
    </div>
  );
}

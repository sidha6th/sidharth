import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import "./ArrowIcon.css";

type ArrowIconArg = {
  opened?: boolean;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

export function ArrowIcon(arg: ArrowIconArg) {
  return (
    <FontAwesomeIcon
      className="arrow-down"
      icon={faChevronDown}
      style={{
        color: "#ffffff",
        transform: arg.opened ? "rotate(0deg)" : "rotate(-90deg)",
        marginLeft: arg.marginLeft,
        marginRight: arg.marginRight,
        marginTop: arg.marginTop,
        marginBottom: arg.marginBottom,
      }}
    />
  );
}

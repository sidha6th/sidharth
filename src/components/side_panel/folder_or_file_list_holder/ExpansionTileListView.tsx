import "./ExpansionTileListView.scss";
import { ExpandableTile } from "../../expantion_tile/ExpantionTile";
import { FileOrDir } from "../../../core/app_state/types";

type ExpansionTileListHolderArg = {
  paddingLeft?: string | number;
  leftBorder?: boolean;
  parentPath: string;
  folders?: FileOrDir[];
};

export function ExpansionTileListHolder(arg: ExpansionTileListHolderArg) {
  return (
    <div
      className="expansion-tile-list"
      style={{ paddingLeft: `${arg.paddingLeft}px` }}
    >
      {arg.folders?.map((value) => (
        <ExpandableTile
          parentPath={arg.parentPath}
          key={`${value.name}`}
          fileOrDir={value}
          leftBorder={arg.leftBorder}
        />
      ))}
    </div>
  );
}

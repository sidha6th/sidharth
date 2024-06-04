import "./ExpandsionTile.scss";
import { useState } from "react";
import { ArrowIcon } from "../icons/arrow_icon/ArrowIcon";
import { onClickFile } from "../../redux/slice/editor_slice";
import { ExpansionTileListHolder } from "../side_panel/folder_or_file_list_holder/ExpansionTileListView";
import { AppColors } from "../../common/Colors";
import { Constants } from "../../common/constant";
import { FileOrDir } from "../../core/app_state/types";
import { useDispatch } from "react-redux";

type FileOrFolderItemArg = {
  leftBorder?: boolean;
  parentPath: string;
  fileOrDir?: FileOrDir;
};

export function ExpandableTile(arg: FileOrFolderItemArg) {
  const dispatch = useDispatch();
  const filePath = arg.parentPath + arg.fileOrDir?.name;
  const [isOpen, toggleFolder] = useState(false);

  function onClickFolder() {
    toggleFolder(!isOpen);
  }

  function onClick() {
    dispatch(onClickFile(filePath));
  }

  // --------------------  ui -------------------- //
  if (arg.fileOrDir?.type == "file") {
    return (
      <div
        className="expandable-tile selectable"
        style={{
          borderLeft: arg.leftBorder
            ? `solid 0.1px ${AppColors.lineGray}`
            : "none",
        }}
        onClick={onClick}
      >
        <p>{arg.fileOrDir?.name}</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="expandable-tile"
        style={{
          borderLeft: arg.leftBorder
            ? `solid 0.1px ${AppColors.lineGray}`
            : "none",
        }}
        onClick={onClickFolder}
      >
        <ArrowIcon opened={isOpen} marginRight={10} />
        <p>{arg.fileOrDir?.name}</p>
      </div>
      {isOpen ? (
        <ExpansionTileListHolder
          parentPath={arg.parentPath + arg.fileOrDir?.path}
          folders={Array.from(arg.fileOrDir?.children.values() ?? [])}
          paddingLeft={Constants.styles.margin.word}
          leftBorder
        />
      ) : (
        <></>
      )}
    </>
  );
  // --------------------  ui -------------------- //
}

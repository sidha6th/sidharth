import { useState } from "react";
import { ArrowIcon } from "../icons/arrow_icon/ArrowIcon";
import "./ExpandsionTile.scss";
import { ExpansionTileListHolder } from "../side_panel/folder_or_file_list_holder/ExpansionTileListView";
import { AppColors } from "../../common/Colors";
import { FolderOrFile } from "../../common/types/file_or_folders";
import { Constants } from "../../common/constant";

type FileOrFolderItemArg = {
  onClick: () => void;
  leftBorder?: boolean;
  fileOrFolder: FolderOrFile;
};

export function ExpandableTile(arg: FileOrFolderItemArg) {
  const [isOpen, toggleFolder] = useState(false);

  const onClick = () => {
    toggleFolder(!isOpen);
    if (arg.fileOrFolder.isFile) {
      arg.onClick();
    }
  };

  return (
    <>
      <div
        className="expandable-tile"
        style={{
          borderLeft: arg.leftBorder
            ? `solid 0.1px ${AppColors.lineGray}`
            : "none",
        }}
        onClick={onClick}
      >
        {arg.fileOrFolder.isFile ? <></> : <ArrowIcon opened={isOpen} marginRight={10} />}
        <p>{arg.fileOrFolder.name}</p>
      </div>
      {isOpen ? (
        <ExpansionTileListHolder
          folders={arg.fileOrFolder.children}
          paddingLeft={Constants.styles.margin.word}
          leftBorder
        />
      ) : (
        <></>
      )}
    </>
  );
}

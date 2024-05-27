import './ExpansionTileListView.scss'
import { useDispatch } from "react-redux";
import { onTapEditorTitleCard } from "../../../redux/slice/editor_slice"
import { ExpandableTile } from "../../expantion_tile/ExpantionTile";
import { FolderOrFile } from '../../../common/types/file_or_folders';


type ExpansionTileListHolderArg={
  paddingLeft?:string|number,
  leftBorder?: boolean;
  folders?: FolderOrFile[]
}

export function ExpansionTileListHolder(arg:ExpansionTileListHolderArg) {
  const dispatch = useDispatch();

  function onclick(file: FolderOrFile) {
    dispatch(onTapEditorTitleCard(file));
  }

  return (
    <div className="expansion-tile-list" style={{paddingLeft:`${arg.paddingLeft}px`}}>
      {arg.folders?.map((value) => (
        <ExpandableTile
        key={`${value.id}`}
        onClick={() => onclick(value)}
        fileOrFolder={value}
        leftBorder={arg.leftBorder}
        />
      ))}
    </div>
  );
}


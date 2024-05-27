import { FolderOrFile } from "../../common/types/file_or_folders";

export const folders: FolderOrFile[] = [
  { id: 1, name: "README.md", children: [], icon: "", isFile: true },
  { id: 2, name: "skills", children: [{ id: 1, name: "README.md", children: [], icon: "", isFile: true },
  { id: 2, name: "skills", children: [], icon: "", isFile: false },
  { id: 3, name: "projects", children: [], icon: "", isFile: false },
  { id: 4, name: "experiance", children: [], icon: "", isFile: false },], icon: "", isFile: false },
  { id: 3, name: "projects", children: [], icon: "", isFile: false },
  { id: 4, name: "experiance", children: [], icon: "", isFile: false },
];

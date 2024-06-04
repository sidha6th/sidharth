import { ReadMe } from "../../pages/Readme/ReadMe.tsx";
import { FileOrDir } from "./types";

export const readme: FileOrDir = {
  name: "README.md",
  type:'file',
  path:"",
  page: <ReadMe/>,
};

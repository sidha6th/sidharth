import { Skills } from "../../pages/Skils/Skills.tsx";
import { FileOrDir as FileOrDir } from "./types";

const skillsjson: FileOrDir = {
  name: "skills.json",
  type: "file",
  path: "",
  page: <Skills/>,
};

export const skills: FileOrDir = {
  name: "skills",
  children: new Map([[skillsjson.name, skillsjson]]),
  type: "dir",
  path: "skills/",
};

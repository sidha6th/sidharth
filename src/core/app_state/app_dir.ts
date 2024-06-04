import { readme } from "./readme";
import { skills } from "./skills";
import { FileOrDir } from "./types";

export const rootDir: FileOrDir = {
  name: "root",
  path: "/",
  type: "dir",
  children: new Map([
    [readme.name, readme],
    [skills.path, skills],
  ]),
};

export function searchForFile(
  fullPath?: string,
  splittedPath?: string[],
  fileName?: string,
  dir?: FileOrDir
): FileOrDir | undefined {
  let file: FileOrDir | undefined;
  const _dir = dir?.children ?? rootDir.children;
  const _splittedPath = splittedPath ?? fullPath?.split("/")??[];
  const _filePath = fileName ?? _splittedPath.pop();
  file = _dir!.get(_filePath ?? "");
  if (file) {
    return file;
  }

  if (splittedPath == undefined) {
    _splittedPath.shift();
  }
  for (const path of _splittedPath) {
    const item = _dir!.get(`${path}/`);
    if (item == undefined) break;
    file = searchForFile(
      "",
      splittedPath?.splice(splittedPath.length - 1, 1),
      _filePath,
      item
    );
    if (file) break;
  }
  return file;
}

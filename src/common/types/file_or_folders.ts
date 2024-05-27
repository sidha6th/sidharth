export type FolderOrFile = {
  id: string|number;
  name: string;
  isFile: boolean;
  icon: string;
  children: FolderOrFile[];
};

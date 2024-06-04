type InstanceType='dir'|'file';

export type FileOrDir = {
  name: string;
  page?: JSX.Element;
  path: string;
  type:InstanceType,
} & (
  | {
      type: "file";
      page: JSX.Element;
      path?: string;
      children?: Map<string,FileOrDir>;
    }
  | {
      type: "dir";
      page?: JSX.Element;
      path: string;
      children: Map<string,FileOrDir>;
    }
);

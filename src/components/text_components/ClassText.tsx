import { Constants } from "../../common/constant";
import BaseText from "./BaseText";

export function ClassStyledText(arg: ClassStyleTextArgs) {
  return (
    <BaseText
      value={arg?.value ?? arg?.reservedClassType ?? ""}
      color={Constants.styles.color.classText}
      margin={{
        left: arg.marginLeft ?? false ? Constants.styles.margin.word : 0,
        right: arg.maginRight ?? false ? Constants.styles.margin.word : 0,
      }}
    />
  );
}

export type ClassStyleTextArgs = {
  value?: string;
  reservedClassType?: ClassNameType;
  marginLeft?: boolean;
  maginRight?: boolean;
};

export type ClassNameType =
  | "StatelessWidget"
  | "MaterialApp"
  | "BuildContext"
  | "Development";

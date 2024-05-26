import { Constants } from "../../common/constant";
import BaseText from "./BaseText";

export function PropertiesStyledText(arg: ClassStyleTextArgs) {
  return (
    <BaseText
      value={arg.value}
      color={Constants.styles.color.propertiesText}
      margin={{
        left: arg.marginLeft ?? false ? Constants.styles.margin.word : 0,
        right: arg.maginRight ?? false ? Constants.styles.margin.word : 0,
      }}
    />
  );
}

export type ClassStyleTextArgs = {
  value: ClassNameType;
  marginLeft?: boolean;
  maginRight?: boolean;
};

export type ClassNameType = "key" | "context" | "build" | "skills";

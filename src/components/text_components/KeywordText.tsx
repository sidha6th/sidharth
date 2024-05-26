import { Constants } from "../../common/constant";
import BaseText from "./BaseText";

export function KeywordStyledText(arg: ClassStyleTextArgs) {
  return (
    <BaseText
      value={arg.value}
      color={Constants.styles.color.keywordText}
      margin={{
        left: arg.marginLeft ?? false ? Constants.styles.margin.word : 0,
        right: arg.maginRight ?? false ? Constants.styles.margin.word : 0,
      }}
    />
  );
}

export type ClassStyleTextArgs = {
  value: ReservedKeywords;
  marginLeft?: boolean;
  maginRight?: boolean;
};

export type ReservedKeywords =
  | "class"
  | "extends"
  | "super"
  | "const"
  | "return";

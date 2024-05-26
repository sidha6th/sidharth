import { Constants } from "../../common/constant";
import BaseText from "./BaseText";

export function SpecialCharStyledText(arg: ClassStyleTextArgs) {
  return (
    <BaseText
      value={arg.value}
      color={Constants.styles.color.operatorOrSpecialCharText}
      margin={{
        left:
          arg.marginLeft ?? false
            ? arg.margin ?? Constants.styles.margin.word
            : 0,
        right:
          arg.maginRight ?? false
            ? arg.margin ?? Constants.styles.margin.word
            : 0,
      }}
    />
  );
}

export type ClassStyleTextArgs = {
  value: ReservedSpeccialChars;
  margin?: number;
  marginLeft?: boolean;
  maginRight?: boolean;
};

export type ReservedSpeccialChars =
  | "{"
  | "}"
  | "("
  | ")"
  | "["
  | "]"
  | ";"
  | ":"
  | "=>"
  | "."
  | ",";

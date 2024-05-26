import { Constants } from "../../common/constant";
import { Margin } from "../../common/types/style_args";

type BaseTextArg = {
  value: string;
  color: string;
  fontSize?: string | number;
  margin: Margin;
};

function BaseText(arg: BaseTextArg) {
  return (
    <>
      <p
        style={{
          color: arg.color,
          fontSize: `${arg.fontSize??Constants.styles.textSize.codingLanguage}px`,
          marginLeft: `${arg.margin.left}px`,
          marginRight: `${arg.margin.right}px`,
          marginBottom:0,
          marginTop:0,
        }}
      >
        {arg.value}
      </p>
    </>
  );
}

export default BaseText;

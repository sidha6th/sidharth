import { Constants } from "../../../common/constant";
import { MarginColumnCount } from "../../../common/types/style_args";
import "./Row.css"

export type RowArgs = {
  marginColumnCount?: MarginColumnCount;
  children: JSX.Element[];
};

export function Row(arg: RowArgs) {
  return (
    <div
      className="row"
      style={{
        marginTop: margin( arg.marginColumnCount?.top),
        marginBottom: margin( arg.marginColumnCount?.bottom),
        marginLeft: margin( arg.marginColumnCount?.left),
        marginRight: margin( arg.marginColumnCount?.right),
      }}
    >
      {arg.children}
    </div>
  );

  function margin(columnCount?: number): number {
      return Constants.styles.margin.word * (columnCount ?? 0);
  }
}

import "./TitleCard.scss";
import { Button } from "../../../../../components/core/button/Button";
import SvgClose from "../../../../../assets/svg/Close";

export type PageTitleCardArgs = {
  title: string;
  onTap?: () => void;
};
export function TitleCard(arg: PageTitleCardArgs) {
  return (
    <div id="opened-page-title-card">
      <p>{arg.title}</p>
      <Button
        child={
          <SvgClose/>
          }
        onClick={() => arg.onTap?.call(arg.onTap)}
      />
    </div>
  );
}

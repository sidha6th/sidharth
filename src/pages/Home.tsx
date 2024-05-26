import "./Home.css";

import image from "../assets/my_image.jpeg";
import { FlutterProgramStyledText } from "../components/flutter_programe/FlutterPrograme";
import { TopTabBar } from "../components/top_bar/TopBar";
import { BottomBar } from "../components/bottom_bar/BottomBar";
import { SideBar } from "../components/side_bar/SideBar";
import { SidePanel } from "../components/side_panel/SidePanel";
import { EditorsViewHolder } from "./DashBoard/componets/editors_view_holder/EditorsViewHolder";

function Home() {
  return (
    <>
      <div id="dashboard">
        <TopTabBar />
        <div id="view-holder">
          <SideBar />
          <SidePanel />
          <EditorsViewHolder/>
        </div>
        <BottomBar />
      </div>
    </>
  );
}

export default Home;

{
  /* <FlutterProgramStyledText
              className="Sidharth_R"
              skills={["Flutter", "React", "Dart", "TypeScript"]}
            /> */
}

import "./Dashboard.css";
import { TopBar } from "../components/top_bar/TopBar";
import { BottomBar } from "../components/bottom_bar/BottomBar";
import { SideBar } from "../components/side_bar/SideBar";
import { SidePanel } from "../components/side_panel/SidePanel";
import { EditorsViewHolder } from "./DashBoard/componets/editors_view_holder/EditorsViewHolder";

type HomeArg = {
  theme: AppTheme;
};

function Home(arg: HomeArg) {
  return (
    <>
      <div id="dashboard">
        {/* // ----------------- Top Bar ----------------- // */}
        <TopBar />
        {/* // ----------------- Top Bar ----------------- // */}
        <div id="view-holder">
          {/* // ----------------- Side Elements ----------------- // */}
          <SideBar />
          <SidePanel />
          {/* // ----------------- Side Elements ----------------- // */}

          {/* // ----------------- Center Editor view ----------------- // */}
          <EditorsViewHolder />
          {/* // -----------------  Center Editor view ----------------- // */}
        </div>
        {/* // ----------------- Bottom Bar ----------------- // */}
        <BottomBar />
        {/* // ----------------- Bottom Bar ----------------- // */}
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

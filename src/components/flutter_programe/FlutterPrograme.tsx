import "./FlutterPrograme.css";
import { ClassStyledText } from "../text_components/ClassText";
import { KeywordStyledText } from "../text_components/KeywordText";
import { SpecialCharStyledText } from "../text_components/SpecialCharStyledText";
import { PropertiesStyledText } from "../text_components/PropertiesStyledText copy";
import { Row } from "../core/row/Row";
import { Constants } from "../../common/constant";

export type FlutterProgrameStyledTextArgs = {
  className: string;
  skills: string[];
};

export function FlutterProgramStyledText(arg: FlutterProgrameStyledTextArgs) {
  return (
    <>
      <div>
        <Row>
          <KeywordStyledText value="class" maginRight />
          <ClassStyledText value={arg.className} />
          <KeywordStyledText value="extends" maginRight marginLeft />
          <ClassStyledText reservedClassType="StatelessWidget" />
          <SpecialCharStyledText value="{" marginLeft />
        </Row>
        <Row marginColumnCount={{ left: 2, bottom: 2 }}>
          <KeywordStyledText value="const" maginRight />
          <ClassStyledText value={arg.className} />
          <SpecialCharStyledText value="(" />
          <SpecialCharStyledText value="{" />
          <KeywordStyledText value="super" />
          <SpecialCharStyledText value="." />
          <PropertiesStyledText value="key" />
          <SpecialCharStyledText value="}" />
          <SpecialCharStyledText value=")" />
          <SpecialCharStyledText value=";" />
        </Row>
        <Row marginColumnCount={{ left: 2 }}>
          <ClassStyledText
            reservedClassType="Development"
            marginLeft
            maginRight
          />
          <PropertiesStyledText value="build" />
          <SpecialCharStyledText value="(" />
          <ClassStyledText reservedClassType="BuildContext" maginRight />
          <PropertiesStyledText value="context" />
          <SpecialCharStyledText value=")" maginRight />
          <SpecialCharStyledText value="{" />
        </Row>
        <Row marginColumnCount={{ left: 4 }}>
          <KeywordStyledText value="return" marginLeft />
          <KeywordStyledText value="const" marginLeft maginRight />
          <ClassStyledText reservedClassType="Development" />
          <SpecialCharStyledText value="(" />
        </Row>
        <Row marginColumnCount={{ left: 6 }}>
          <PropertiesStyledText value="skills" marginLeft />
          <SpecialCharStyledText value=":" maginRight />
          <SpecialCharStyledText value="[" />
        </Row>
        {arg.skills.map((skill) => {
          return (
            <Row marginColumnCount={{ left: 8 }}>
              <ClassStyledText value={skill} />
              <SpecialCharStyledText
                value="("
                margin={Constants.styles.margin.char}
                maginRight
              />
              <SpecialCharStyledText
                value=")"
                margin={Constants.styles.margin.char}
                marginLeft
              />
              <SpecialCharStyledText
                value=","
                margin={Constants.styles.margin.char}
              />
            </Row>
          );
        })}
        <Row marginColumnCount={{ left: 6 }}>
          <SpecialCharStyledText value="]" />
          <SpecialCharStyledText value="," />
        </Row>
        <Row marginColumnCount={{ left: 4 }}>
          <SpecialCharStyledText value=")"></SpecialCharStyledText>
          <SpecialCharStyledText value=":"></SpecialCharStyledText>
        </Row>
        <Row marginColumnCount={{ left: 2 }}>
          <></>
          <SpecialCharStyledText value="}"></SpecialCharStyledText>
        </Row>
        <Row>
          <></>
          <SpecialCharStyledText value="}"></SpecialCharStyledText>
        </Row>
      </div>
    </>
  );
}

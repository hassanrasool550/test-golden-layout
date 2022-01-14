import React from "react";
import { GoldenLayoutComponent } from "./goldenLayoutComponent";
import Test from "./test";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

class App extends React.Component {
  state = { contextValue: "default value" };
  render() {
    return (
      <div>
        <GoldenLayoutComponent //config from simple react example: https://golden-layout.com/examples/#qZXEyv
          htmlAttrs={{
            style: { height: "500px", width: "1000px", overflow: "auto" }
          }}
          config={{
            content: [
              {
                type: "row",
                content: [
                  {
                    title: "A react component",
                    type: "react-component",
                    component: "testItem",
                    props: { value: "I'm on the left" }
                  },
                ]
              }
            ]
          }}
          registerComponents={myLayout => {
            myLayout.registerComponent("testItem", Test);
          }}
        />
      </div>
    );
  }
}

export default App;

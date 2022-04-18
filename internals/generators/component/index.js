/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a functional component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or page with this name already exists"
            : true;
        }

        return "The name is required";
      }
    },
    {
      type: "confirm",
      name: "wantStyledComp",
      default: true,
      message: "Do you want this to be a styled component?"
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
  ],
  actions: data => {
    // Generate index.ts and index.test.ts
    const componentTemplate = "./component/index.tsx.hbs";
    const styledComponentTemplate = "./component/styledComponent.ts.hbs";

    const actions = [
      {
        type: "add",
        path: "../../src/components/{{camelCase name}}/index.tsx",
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: "add",
        path:
          "../../src/components/{{camelCase name}}/__tests__/{{camelCase name}}.test.tsx",
        templateFile: "./component/test.tsx.hbs",
        abortOnFail: true
      },
    ];

    // If they want a styled component
    if (data.wantStyledComp) {
      actions.push({
        type: "add",
        path:
          "../../src/components/{{camelCase name}}/styledComponents/index.ts",
        templateFile: styledComponentTemplate,
        abortOnFail: true
      });
    }

    actions.push({
      type: "prettify",
      path: "/components/"
    });

    return actions;
  }
};

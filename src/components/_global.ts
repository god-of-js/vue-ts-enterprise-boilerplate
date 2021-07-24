// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from "vue";

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  ".",
  //look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /Base[A-Z]\w+\.(vue|js)$/
);

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  const fileSplitArr: string[] = fileName.split("/");
  // Get the component config
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName = fileSplitArr[fileSplitArr.length - 1]
    // Remove the "./_" from the beginning
    .replace(/_/g, "")
    // Remove the file extension from the end
    .split(".")[0]
    // Split up kebabs
    .split("-")
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join("");
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});

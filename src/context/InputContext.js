import { createContext, useReducer } from "react";
import inputReducer from "./InputReducer";

const InputContext = createContext();

const placeholder =
  "# Welcome to my Markdown Previewer!\n\n" +
  "## This is a sub-header\n\n" +
  "Three or more consecutive dashes `-`, asterisks `*`, or underscores `_` make a new horizontal rule.\n\n" +
  "**bold words...**\n" +
  "*italic words...*\n" +
  "**_bold...AND italic!_**\n" +
  "~strike-through~\n" +
  "...even emojis! :exploding_head:\n" +
  "> If you can dodge a wrench, you can dodge a ball.\n" +
  "> Dodge, Duck, Dip, Dive, and Dodge.\n\n" +
  "_Patches O'Hoolihan_\n\n" +
  'This is a link to [Google](http://Google.com "Google Search"), including optional helper text.\n\n' +
  'This is a refrence link to [FreeCodeCamp][fcc].\n\n[fcc]: http://freecodecamp.org "FreeCodeCamp Home"\n\n' +
  "This is an automatic link to <http://udemy.com>\n\nThis is an example email: <example@gmail.com>\n\n" +
  "Here's a footnote [^1], and here's a longer one [^bigone]\n\n" +
  '`echo "I am inline code"`\n\n' +
  "> :bulb:**Pro Tip**: Markdown can highlight the syntax in code blocks for most languages if you define it next to the opening back-ticks!\n\n" +
  `\`\`\`javascript\n// block code\nfunction greet() {\n\tconsole.log("Hello World!");\n}\ngreet();\n\`\`\`\n\n` +
  `\`\`\`bash\n#!/bin/bash\n# this is an example of bash script!\necho "My name is $(whoami)" > name.txt\n\`\`\`\n\n` +
  "### Ordered:\n\n" +
  "1. Red\n" +
  "2. Green\n" +
  "3. Blue\n" +
  "4. Yellow\n\n" +
  "### Un-Ordered:\n\n" +
  "* Asterisk works\n" +
  "* Asterisk works\n" +
  "* Asterisk works\n\n" +
  "+ Plus sign works\n" +
  "+ Plus sign works\n" +
  "+ Plus sign works\n\n" +
  "- Dash works\n" +
  "- Dash works\n" +
  "- Dash works\n\n" +
  "### Nested:\n\n" +
  "- Apple\n" +
  "\t- IPhone\n" +
  "\t\t- 14\n" +
  "\t\t- 15\n" +
  "- Google\n" +
  "\t- Pixel\n" +
  "\t- Pixel Plus\n" +
  "- Samsung\n" +
  "\t- Galaxy\n\n" +
  "| Col Head 1 | Col Head 2 | Col Head 3 |\n" +
  "| :--------- | :--------: | ---------: |\n" +
  "| R1, C1     |   R1, C2   |     R1, C3 |\n" +
  "| R2, C1     |   R2, C2   |     R2, C3 |\n" +
  "| R3, C1     |   R3, C2   |     R3, C3 |\n\n" +
  "This is an inline image: ![Img-Demo](http://placehold.it/50x50)\n\n" +
  'This is a reference to a bigger image:\n![400x200 demo][Demo400]\n\n[Demo400]: http://placehold.it/200x200 "Big Boi!"\n\n' +
  "[^1]: First footnote\n\n[^bigone]: Longer footnote with multiple paragraphs.\n" +
  "\tIndent to add more content.\n" +
  "\tAdd as much as you like...";

export const InputProvider = ({ children }) => {
  const init = { input: placeholder };

  const [state, dispatch] = useReducer(inputReducer, init);

  return (
    <InputContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export default InputContext;

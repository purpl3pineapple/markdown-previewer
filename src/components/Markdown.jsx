import { marked } from "marked";
import { useContext, useEffect, useState } from "react";
import InputContext from "../context/InputContext";
import * as DOMPurify from "dompurify";

const Markdown = () => {
  marked.use({
    breaks: true,
    pedantic: false,
    gfm: true,
  });
  const { input } = useContext(InputContext);
  const [markdown, setMarkdown] = useState("");

  const code = document.querySelectorAll("pre");

  useEffect(() => {
    const clean = DOMPurify.sanitize(marked.parse(input));

    [...code.values()].forEach(snippet => snippet.classList.add("prettyprint"));
    setMarkdown(clean);
  }, [input, code]);

  return (
    <>
      <script
        type='text/javascript'
        src='dist/purify.min.js'
      ></script>
      <script src='https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js'></script>
      <p dangerouslySetInnerHTML={{ __html: markdown }}></p>
    </>
  );
};

export default Markdown;

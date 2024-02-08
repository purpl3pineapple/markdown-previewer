import { useContext } from "react";
import InputContext from "../context/InputContext";

const Editor = () => {
  const { input, dispatch } = useContext(InputContext);
  const getMarkdown = e => {
    dispatch({ type: "GET_MD", payload: e.target.value });
  };
  return (
    <textarea
      name='editor'
      id='editor'
      cols='50'
      rows='15'
      defaultValue={input}
      onInput={getMarkdown}
    ></textarea>
  );
};

export default Editor;

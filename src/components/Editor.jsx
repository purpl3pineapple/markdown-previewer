import { useCallback, useContext } from "react";
import InputContext from "../context/InputContext";
import Container from "react-bootstrap/Container";

const Editor = () => {
  const { input, dispatch } = useContext(InputContext);

  function tab(e) {
    if (e.key !== "Tab") {
      return;
    }
    e.preventDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const tabbed = `${e.target.value.substring(
      0,
      start
    )}\t${e.target.value.substring(end)}`;

    e.target.value = tabbed;

    e.target.selectionStart = e.target.selectionEnd = start + 1;
  }

  const getMarkdown = useCallback(
    e =>
      dispatch({
        type: "GET_MD",
        payload: e.target.value,
      }),
    [dispatch]
  );

  return (
    <Container className='d-flex flex-column p-3'>
      <Container
        id='editor-label'
        className='d-flex mx-auto py-1 px-2 w-100'
      >
        <span>Editor</span>
      </Container>
      <textarea
        name='editor'
        id='editor'
        className='shadow mx-auto h-100 w-100'
        defaultValue={input}
        onKeyDown={tab}
        onChange={getMarkdown}
      />
    </Container>
  );
};

export default Editor;

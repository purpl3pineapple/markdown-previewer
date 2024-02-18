import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { InputProvider } from "./context/InputContext";

function App() {
  return (
    <InputProvider>
      <div className='App bg-body-tertiary d-flex justify-content-between p-3'>
        <Editor />
        <Preview />
      </div>
    </InputProvider>
  );
}

export default App;

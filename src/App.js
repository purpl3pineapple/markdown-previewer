import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { InputProvider } from "./context/InputContext";

function App() {
  return (
    <InputProvider>
      <div className='App'>
        <h1>Markdown Previewer</h1>
        <Editor />
        <Preview />
      </div>
    </InputProvider>
  );
}

export default App;

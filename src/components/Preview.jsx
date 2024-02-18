import { useContext } from "react";
import InputContext from "../context/InputContext";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import Container from "react-bootstrap/Container";
import rehypeSanitize from "rehype-sanitize";
import remarkGemoji from "remark-gemoji";

const Preview = () => {
  const { input } = useContext(InputContext);

  return (
    <Container
      fluid
      id='preview'
      className='bg-dark p-3 mt-3 rounded shadow'
    >
      <Markdown
        remarkPlugins={[remarkBreaks, remarkGfm, remarkGemoji]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        children={input}
        components={{
          code(props) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag='div'
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={oneDark}
              />
            ) : (
              <code
                {...rest}
                className={className}
              >
                {children}
              </code>
            );
          },
        }}
      />
    </Container>
  );
};

export default Preview;

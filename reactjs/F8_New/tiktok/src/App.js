import Heading from "./components/heading";
import Paragrapher from "./components/Paragraph";
import Button from "./components/button";
import GlobalCss from "./components/globals";
function App() {
  return (
    <GlobalCss>
      <div>
        <Heading />
        <Paragrapher />
        <Button primary />
      </div>
    </GlobalCss>
  );
}

export default App;

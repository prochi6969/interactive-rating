import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import RatedContainer from "./components/RatedContainer";

const App = () => {
  const [submited, setSubmited] = useState(false);
  return (
    <main>
      {!submited && <Container />}
      {submited && <RatedContainer />}
    </main>
  );
};

export default App;

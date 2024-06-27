import { useState } from "react";
import "./App.css";
import { Header } from "./components/ui/header/header";
import { Main } from "./components/ui/main/main";

function App() {
  const [time, setTime] = useState<number>(/* 120 */120);

  return (
    <>
      <Header time={time} setTime={setTime}/>
      <Main time={time}/>
    </>
  );
}

export default App;

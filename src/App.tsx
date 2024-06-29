import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/ui/header/header";
import { Main } from "./components/ui/main/main";
import { Suggestion } from "./components/ui/modal/suggestion/suggestion";

function App() {
  const [time, setTime] = useState<number>(150);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    time === 0 && setIsOpen(true)
  }, [time])

  return (
    <>
      <Header time={time} setTime={setTime} />
      <Main time={time} />
      <Suggestion setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default App;

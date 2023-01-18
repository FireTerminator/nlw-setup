import "./styles/global.css"

import Habit from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={2}/>
      <Habit completed={4}/>
      <Habit completed={8}/>
      <Habit completed={16}/>
    </div>
  )
}

export default App

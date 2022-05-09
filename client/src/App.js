import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TaskList></TaskList>} />
        <Route path="/new" element={<TaskForm></TaskForm>} />
        <Route path="/:id/edit" element={<TaskForm></TaskForm>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

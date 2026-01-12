import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./assets/Pages/Home"
import NotFound from "./assets/Pages/NotFound"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

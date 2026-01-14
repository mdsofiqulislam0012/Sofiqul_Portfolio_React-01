import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./assets/Pages/Home"
import NotFound from "./assets/Pages/NotFound"
import { ToastContainer } from "react-toastify"

function App() {
  

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
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

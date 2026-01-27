import { RouterProvider } from "react-router"
import { mainRoute } from "./routes/MainRoute"

function App() {

  return (
    <>
      <RouterProvider router={mainRoute} />
    </>
  )
}

export default App

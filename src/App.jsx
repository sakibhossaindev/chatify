import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Registration" element={<Registration />}></Route>
      <Route path="/Home" element={<Home />}></Route></>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
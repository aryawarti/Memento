import Mynotes from "./Mynotes/Mynotes";
import Footer from "./component/Footer/footer"
import Header from "./component/Header/header"
import LandingPage from "./screens/landingPage/landingPage";
import SingleNode from "./screens/SingleNode/SingleNode";
import LoginScreen from "./screens/loginScreen/loginScreen";
import RegisterScreen from "./screens/registerScreen/registerScreen";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  NavLink,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
        <Route index element={<LandingPage />} />
        <Route path="mynotes" element={<Mynotes />} />
        <Route path="note/:id" element={<SingleNode />} />
        <Route path="login"  element={<LoginScreen/>}/>
        <Route path="register" element={<RegisterScreen/>}/>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App

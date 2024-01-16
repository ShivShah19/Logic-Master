import Home from "./Home/home";
import Start from "./components/Start";
import SpatialIntelligence from "./learn/Spatial Intelligence";
import VerbalAbility from "./learn/Verbal Ability";
import NumericalReasoning from "./learn/Numerical Reasoning";
import LogicalReasoning from "./learn/Logical Reasoning";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { CheckUserExist } from "./helper/helper";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/main",
    element: <Main></Main>,
  },
  {
    path: "/Logical-Reasoning",
    element: <LogicalReasoning></LogicalReasoning>,
  },
  {
    path: "/Spatial-Intelligence",
    element: <SpatialIntelligence></SpatialIntelligence>,
  },
  {
    path: "/Verbal-Ability",
    element: <VerbalAbility></VerbalAbility>,
  },
  {
    path: "/Numerical-Reasoning",
    element: <NumericalReasoning></NumericalReasoning>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/start",
    element: <Start></Start>,
  },
  {
    path: "/main/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

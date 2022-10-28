import "./App.css";

// import MobileFirstScreen from "./MobileFirstScreen";
import MainScreen from "./MainScreen";

import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
function App() {
  // let width = window.innerWidth;
  // if (width < 844) {
  //   return <MobileFirstScreen></MobileFirstScreen>;
  // }
  return (
    <>
      <MainScreen></MainScreen>
      <SecondScreen></SecondScreen>
      <ThirdScreen></ThirdScreen>
    </>
  );
}

export default App;

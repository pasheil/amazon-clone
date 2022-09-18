// import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import ErrorPage from "./ErrorPage";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); // will reload is changes made to whatever is in array [user, basket]

  return (
    // BEM
    // <Router>
    //   <div className="app">
    //     <Routes>
    //       <Route path="/checkout" element={<Header />} />
    //         <h1>Rock it!</h1>

    //       <Route path="/" element={<Header />} />
    //     </Routes>
    //   </div>
    // </Router>

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/payment" element={[<Header />, <Payment />]} />
        <Route path="/" element={[<Header />, <Home />]} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

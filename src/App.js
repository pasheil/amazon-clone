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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LjWmtKiYAMpkOdZLn22JcILqmBc1bMf0m5E8MG17j6m6gZvidDaxFLJLhnKRKUO9e5Oa4YQiV1KBjhydrIiRCdS00suzMTTN2"
);

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
        <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
        <Route path="/" element={[<Header />, <Home />]} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

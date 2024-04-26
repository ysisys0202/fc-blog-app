import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "components/Router";
import Loader from "components/Loader";

function App() {
  const auth = getAuth(app);

  const [init, setInit] = useState<boolean>(false); //auth가 initialize 전에 loader를 띄워주는 용도
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser //user의 login 상태 (currentUser가 있을때)
  );

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setInit(true);
  });

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;

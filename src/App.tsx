import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "components/Router";
import Loader from "components/Loader";
import AuthContext from "context/AuthContext";

function App() {
  const [init, setInit] = useState<boolean>(false); //auth가 initialize 전에 loader를 띄워주는 용도
  const user = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!user //user의 login 상태 (user가 있을때)
  );

  useEffect(() => {
    if (user) {
      setInit(true);
    } else {
      setInit(false);
    }
  }, [user]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </>
  );
}

export default App;

import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";
import Router from "components/Router";

function App() {
  const auth = getAuth(app);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser //user의 login 상태
  );
  return <Router isAuthenticated={isAuthenticated} />;
}

export default App;

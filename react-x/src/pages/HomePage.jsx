import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Home } from "./Home";
import firebaseApp from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/sign-in");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <Home app={firebaseApp} />;
};

export default HomePage;

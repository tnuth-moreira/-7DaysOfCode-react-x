import { initializeApp } from "firebase/app";

import firebaseConfig from "../../firebase.json";

const connect = () => initializeApp(firebaseConfig);

export { connect };

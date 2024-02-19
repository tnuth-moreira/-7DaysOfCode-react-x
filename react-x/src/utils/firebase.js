import { initializeApp } from "firebase/app"; 
import firebaseConfig from "../../firebase.config.josn"; 

const connect = () => initializeApp(firebaseConfig); 

export { connect };
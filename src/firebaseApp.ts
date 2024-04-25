import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";

export let app: FirebaseApp;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

try {
  // app이 초기화 되었다면 초기화된 app을 가져오고 아니라면 초기화함
  app = getApp("app");
} catch (error) {
  app = initializeApp(firebaseConfig, "app");
}

const firebase = initializeApp(firebaseConfig);

export default firebase;

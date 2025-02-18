import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_MxYeWfMqo5qKpwJp_hoCa5Hwv1MfxU8",
  authDomain: "incoagro-723de.firebaseapp.com",
  projectId: "incoagro-723de",
  storageBucket: "incoagro-723de.firebasestorage.app",
  messagingSenderId: "494679002226",
  appId: "1:494679002226:web:12c6acfd54d8bc10b686eb",
  measurementId: "G-2QLB5JG2CP",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };

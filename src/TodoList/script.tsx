import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, query, where, setDoc, addDoc, getDoc, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

interface FireBaseData {
    id: string;
    value: string;
}
const firebaseConfig = {
    apiKey: "AIzaSyDwOp6a4wU-0YuJHkI3L-28rKRS0UDHcJ0",
    authDomain: "my-notfirst-project.firebaseapp.com",
    projectId: "my-notfirst-project",
    storageBucket: "my-notfirst-project.appspot.com",
    messagingSenderId: "590630639292",
    appId: "1:590630639292:web:ff884e9d27cb53b4ad22b9",
    measurementId: "G-WK5VLHSF86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//初始化 firebase 服務
const db = getFirestore(app);




export async function addFireBaseData(): Promise<void> {
    try {
        const docRef = await addDoc(collection(db, "mainTest"), {
            id: "1",
            message: "testmessage"
        })

        console.log(docRef);
    } catch (ex) {
        console.log(ex);
    }
}

export async function getFireBaseData(): Promise<void> {
    try {
        //取得單一[文件]
        // const docRef = await doc(db, "mainTest", "00f7CxYCADMnHIkONcuy");
        // const docSnap = await getDoc(docRef);
        // console.log(docRef);

        // console.log(docSnap.data());

        //從所有文件中挑選id = 2的資料(範例)
        const collectionRef = collection(db, "mainTest")//指定集合為 mainTest
        const docAllRef = await query(collectionRef, where("id", "==", "2")); //初始化建立查詢，設定條件 id == 2
        const docAllSnap = await getDocs(docAllRef); //取得文件
        docAllSnap.forEach((e) => {
            console.log(e.data());
        });

    } catch (ex) {
        console.log(ex);
    }
}
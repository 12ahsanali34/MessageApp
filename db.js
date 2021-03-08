import * as Firebase from 'firebase';
const firebaseConfig = {
    databaseURL: 'https://message-app-cff6f-default-rtdb.firebaseio.com',
    projectId: 'message-app-cff6f',
    storageBucket: 'message-app-cff6f',
    messagingSenderId: 'XXXXXXX',
    appId: "message-app-cff6f",
    messagingSenderId:"545608459818",
    apiKey:"AIzaSyDNL0ML7TgjPtzX7nMhso4NzDubUAY-v6s"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
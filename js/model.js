const model = {};
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMtKAElBLEXsqDdSkckM2T3_2fZVHWWlo",
    authDomain: "js09-c876a.firebaseapp.com",
    projectId: "js09-c876a",
    storageBucket: "js09-c876a.appspot.com",
    messagingSenderId: "568191867139",
    appId: "1:568191867139:web:ad5237616c642059643136"
    /* Firebase config */
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
model.register = async (data) => {
    try {
        //console.log("mode11111", data);
        let dataUser = '';
        let response = await auth.createUserWithEmailAndPassword(data.email, data.password);
        view.setScreenActive("loginPage");
        //console.log("666666666",auth.currentUser);
        auth.currentUser.sendEmailVerification();
        //console.log("666666666",auth.currentUser);
        await firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + data.lastName
        })
        dataUser = auth.currentUser.displayName;
        view.dataUser(dataUser);
        //console.log(dataUser, "11111111111111");
    } catch (error) {
        alert(error.message);
    }
}
model.login = async (data) => {
    try {
        // console.log("mode11111", data);
        let response = await auth.signInWithEmailAndPassword(data.email, data.password);
        // view.setScreenActive("loginPage");
        // console.log("666666666", auth.currentUser);
        //     console.log("success!");
        // console.log("666666666",auth.currentUser);
        let result= firebase.auth().currentUser.email;
        console.log(result,"8888888");
        if (response && auth.currentUser.emailVerified) {
            view.setScreenActive("webapp");
        } else {
            alert("please verify email!")
        }
    } catch (error) {
        alert(error.message);
    }
}
model.dataSendFirebase = (data) => {
    // let updateField = {
    //     //message: firebase.firestore.FieldValue.arrayUnion(data),
    // }
    let uid = "Lila1Bv2xHm8rOqInDag";
    // function lưu dữ  liệu vào firestore.
    const firestoreQueries = async () => {
        try {
            let response = await firebase.firestore()
                .collection("listMessage")
                .doc(uid)
                .update({ message: firebase.firestore.FieldValue.arrayUnion(data) });
           
        } catch (error) {
            console.log(error.message);
        }
    }
    firestoreQueries();
}
model.getListMessage = async () => {
    try {
        let response = await firebase.firestore()
            .collection("listMessage")
            .doc("Lila1Bv2xHm8rOqInDag") // id của document 
            .get()
        let result = response.data().message
        //console.log(result);
        // console.log(listChat.innerHTML);
        console.log(result,"999999999");
        view.renderListChat(result);
    } catch (err) {
        console.log(err.message);
    }
}


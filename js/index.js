window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            view.setScreenActive("webapp");
            model.getListMessage1 = async () => {
                try {
                    let response = await firebase.firestore()
                        .collection("listMessage")
                        .doc("Lila1Bv2xHm8rOqInDag")
                        .get()
                    let result = response.data().message
                    //console.log(result);
                    // console.log(listChat.innerHTML);
                    console.log(result, "999999999");
                    view.renderListChat(result);
                } catch (err) {
                    console.log(err.message);
                }
            }
            model.getListMessage1()   ;
        } else {
            view.setScreenActive("registerPage");
        }
           firebase.firestore().collection("listMessage").doc("Lila1Bv2xHm8rOqInDag")
               .onSnapshot((doc) => {
                   console.log("Current data111111: ", doc.data());
                //    view.modelUpdate(doc.data().message);
                   view.renderListChat(doc.data().message);
               }); 
    });
    /* 
     thao tác với firestore.
     CRUD
     */
    // getOne document
    // const firestoreQueries= async ()=>{
    //    try {
    //        let response = await firebase.firestore()
    //            .collection("users")
    //            .doc("tKewiFK45qGqoe9u88k5")
    //            .get();
    //         console.log(response.data());
    //    } catch (error) {
    //         console.log(error.message);
    //    }
    // }
    // firestoreQueries();
    // getMany document
    // const firestoreQueries = async () => {
    //     try {
    //         let response = await firebase.firestore()
    //             .collection("users")
    //             .get();
    //        for (let i = 0; i < response.docs.length; i++) {
    //            console.log("data", response.docs[i].data());
    //        }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }
    // firestoreQueries();
    // Create document
    // let addField={
    //     phone:"08288899888",
    //     name:"Hoa"
    // }
    // const firestoreQueries = async () => {
    //     try {
    //         let response = await firebase.firestore()
    //             .collection("users")
    //             .add(addField);
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }
    // firestoreQueries();
    // update document
    
    // Delete document
    // let uid = "msfFr8dsmn2N4CRazGjb";
    // const firestoreQueries = async () => {
    //     try {
    //         let response = await firebase.firestore()
    //             .collection("users")
    //             .doc()
    //             .delete();
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }
    // firestoreQueries();


}
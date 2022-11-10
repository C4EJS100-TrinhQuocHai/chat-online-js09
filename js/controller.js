const controller = {};
controller.register = (data) => {

    if (data.firstName == "") {
        view.setErrorMessage("firstName", "please input firstName again!")
    } else {
        view.setErrorMessage("firstName", "")
    }
    if (data.lastName == "") {
        view.setErrorMessage("lastName", "please input lastName again!")
    } else {
        view.setErrorMessage("lastName", "")
    }
    if (data.email == "") {
        view.setErrorMessage("email", "please input email again!")

    } else {
        view.setErrorMessage("email", "")
    }
    if (data.password == "") {
        view.setErrorMessage("password", "please input password again!")
    } else {
        view.setErrorMessage("password", "")
    }
    if (data.confirmPassword == "") {
        view.setErrorMessage("confirmPassword", "please input confirmPassword again!")
    } else {
        view.setErrorMessage("confirmPassword", "");
    }
    if (data.confirmPassword !== data.password) {
        view.setErrorMessage("confirmPassword", "password is not correct!")
    } else {
        view.setErrorMessage("confirmPassword", "");
    }
    if (data.firstName != "" && data.lastName != "" && data.email != "" &&
        data.password != "" && data.confirmPassword == data.password
    ) {
        model.register(data);
    }
}
controller.login = (data) => {
    console.log("data", data);
    if (data.email == "") {
        view.setErrorMessage("email", "please input email again!")
    } else {
        //view.setErrorMessage("email", "")
    }
    if (data.password == "") {
        view.setErrorMessage("password", "please input password again!")
    } else {
        view.setErrorMessage("password", "")
    }
    if (data.email && data.password) {
        model.login(data)
    }
}
controller.checkMessage = (checkMessage) => {
    // console.log(checkMessage, "1111111111");
    let listChat = document.getElementById("listChat");
    if (checkMessage.message.content != "") {
        // view.messageChat(checkMessage.message);
        // view.messageChat(checkMessage.messageFromBot);
        listChat.scrollTop = listChat.scrollHeight;
       // console.log("controller");
        model.dataSendFirebase(checkMessage);
    }
    
}
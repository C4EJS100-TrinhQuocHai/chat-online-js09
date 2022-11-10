const view={};
let dataUsername = '';
view.dataUser = (dataUser) => {
    dataUsername = dataUser;
    //console.log("dataUsername111", dataUsername);
}
view.setScreenActive = (screenName)=>{
    switch (screenName) {
        case "registerPage":
            let app=document.getElementById("app");
            app.innerHTML = component.registerPage;
            let registerForm = document.getElementById("registerForm");
            registerForm.addEventListener("submit",(e)=>{
                    e.preventDefault();
                // let a = registerForm.firstName.value;
                // console.log(a);
                const data={
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
               // console.log(data);
                controller.register(data);
            })
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content
            }
            let redirectLogin = document.getElementById("redirectLogin");
            redirectLogin.addEventListener("click",()=>{
                view.setScreenActive("loginPage")
            })
            break;
            case "loginPage" :
            document.getElementById("app").innerHTML = component.loginPage;
            let loginForm = document.getElementById("loginForm");
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                // let a = registerForm.firstName.value;
                // console.log(a);
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                // console.log(data);
                controller.login(data);
            })
            let redirectRegister = document.getElementById("redirectRegister");
            redirectRegister.addEventListener("click",()=>{
                view.setScreenActive("registerPage")
            })
           break;
           case "webapp":
            document.getElementById("app").innerHTML = component.loginWeb;
            //model.getChat();
            let send = document.getElementById("send");
            send.addEventListener("click",(e)=>{
                e.preventDefault();
                let valueInput = document.getElementById("valueInputForm").valueInput.value;
                // let listChat = document.getElementById("list-chat");
                document.getElementById("valueInputForm").valueInput.value="";
                // view.messageChat(message);
                // view.messageChat(messageFromBot);

                // let listChat = document.getElementById("listChat");
                // listChat.scrollTop=listChat.scrollHeight;
                var today = new Date();
                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;
                let checkMessage={
                    message:{
                        owner:firebase.auth().currentUser.email,// người vừa login vào tài khoản!
                        content: valueInput,// nội dung text chat.
                        createdAt:dateTime,
                    },

                }
                let listChat = document.getElementById("listChat");
                listChat.scrollTop = listChat.scrollHeight;
                controller.checkMessage(checkMessage);
                model.getListMessage();
            })
            break; 
    }
}
view.renderListChat=(listChat)=>{
    console.log("434343434343443434");
    let result='';
    console.log(" firebase.auth().currentUser", firebase.auth().currentUser);
    for (let i = 0; i < listChat.length; i++) {
        if (listChat[i].message.owner == firebase.auth().currentUser.email){
            result += `
                 <div class="message me" id="me">
                       
                         <div class="content">
                            ${listChat[i].message.content}
                        </div>
                         <div class="content">
                            ${listChat[i].message.createdAt}
                        </div>
                       
                    </div>
        `
        }else{
            result += `
                 <div class="message owner" id="me">
                        <div class="content">
                            ${listChat[i].message.owner}
                        </div>
                         <div class="content">
                            ${listChat[i].message.content}
                        </div>
                         <div class="content">
                            ${listChat[i].message.createdAt}
                        </div>
                        <div class="content">
                           
                        </div>
                    </div>
        `
        }       
    } 
    // if(mess.owner=="owner"){
    //     createElementDiv.classList.add("me");
    //     createElementDiv.innerHTML=`
    //                     <div class="content">
    //                         ${mess.content}
    //                     </div>
    //     `
    // }else{
    //     createElementDiv.classList.add("owner");
    //     createElementDiv.innerHTML = `
    //                     <div class="owner">Bot123@gmail.com</div>
    //                     <div class="content">
    //                         ${mess.content}
    //                     </div>
    //     `
    // }
    document.getElementById("listChat").innerHTML = result;
    //console.log(createElementDiv,"55555555555555555555555");

}
// view.modelUpdate=(renderDateUpdate)=>{
//     view.renderListChat(renderDateUpdate);
// }


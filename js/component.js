const component={};
component.registerPage=`
      <div class="register-container">
        <form  class="register-form" id="registerForm" >
            <div class="register-header"> REGISTER </div>
            <div class="register-header-name">
                <div>
                    <input type="text" placeholder="firstName" name="firstName">
                    <div class="error" id="firstName">  </div>
                </div>
                <div>
                    <input type="text" placeholder="lastName" name="lastName" >
                    <div class="error"id="lastName">  </div>
                </div>
            </div>
                <input type="text" placeholder="email" name="email">
                <div class="error" id="email">  </div>
            <div>
                <input type="text" placeholder="password" name="password">
                <div class="error" id="password"></div>
            </div>
            <div>
                <input type="text" placeholder="confirmPassword" name="confirmPassword">
                <div class="error" id="confirmPassword">  </div>
            </div>
            <button class="btn" type="submit"> Register </button>
            <div class="register-bottom">
                bạn đã có tài khoản? <a id="redirectLogin" > Login Now</a>
            </div>
        </form>
    </div>
`;
component.loginPage = `
      <div class="login-container">
        <form   class="login-form" id="loginForm" >
            <div class="login-header"> login </div>
                <input type="text" placeholder="email" name="email">
                <div class="error" id="email">  </div>
            <div>
                <input type="text" placeholder="password" name="password">
                <div class="error" id="password"></div>
            </div>
            <button class="btn" type="submit"> login </button>
            <div class="login-bottom">
                bạn chưa có tài khoản? <a id="redirectRegister" > Register Now</a>
            </div>
        </form>
    </div>
`
component.loginWeb=`
    <div class="chat-container">
        <div class="header">
            Hello Ra!
        </div>
        <div class="main">
            <div class="conversation-detail">
                <div class="tittle">
                    First Conversation
                </div>
                <div class="list-chat" id="listChat">
                    <div class="message me" id = "me">
                    </div>
                    
                </div>
                <form id="valueInputForm">
                    <div class="input-chat">
                        <input  placeholder="Message chat!" name="valueInput">
                    </div>
                    <button id="send" class="send" type="submit"> <i  class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </div>
`

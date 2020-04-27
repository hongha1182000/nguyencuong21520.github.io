const components ={
    signUp:`<section class="sign-up-container">
    <form class="form-sign-up">
        <div class="form-header">
            <h3>Chat</h3>
        </div>
        <div class="form-content">
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" name="firstname" placeholder="Fristname">
                    <div id="firstname-error" class="message-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="lastname"placeholder="Lastname">
                    <div id="lasttname-error" class="message-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" name="email"placeholder="Email">
                <div id="email-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password"placeholder="Password" required>
                <div id="passWord1-error" class="message-error"></div>
                </div>
            <div class="input-wrapper">
                <input type="password" name="confirmPassword"placeholder="Confirm Password">
                <div id="passWord-error" class="message-error"></div>
            </div>
            <div id="sign-up-error" class="message-error"></div>
            <div id="sign-up-success" class="message-success"></div>
        </div>
        <div class="form-footer">
            <a id="form-sign-up-link" href="#">Already have an account? Login</a>
            <button id="form-sign-up-btn" type="submit">Register</button>
            <!-- <button type="reset">aaaa</button> -->
        </div>

    </form>
</section>
    `,
    signIn:`<section class="sign-in-container">
    <form class="form-sign-in">
        <div class="form-header">
            <h3>MindX Chat</h3>
        </div>
        <div class="form-content">
            <div class="input-wrapper">
                <input type="email" name="email"placeholder="Email">
                <div id="email-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password"placeholder="PassWord">
                <div id="firstname-error" class="message-error"></div>
            </div>
            <div id="sign-in-error" class="message-error"></div>
            
        </div>
        <div class="form-footer">
                <a id="form-sign-in-link" href="#">Not yet have a account? Register</a>
                <button id="form-sign-in-btn" type="submit">Login</button>
                <!-- <button type="reset">aaaa</button> -->
        </div>
        
    </form>
</section>`,
    chat:`    <section class="chat-container">
    <!-- aside-left -->
    <div class="aside-left">
            <div class="list-conversation">
                
            </div>
            <form class="form-add-conversation">
                <div class="input-wrapper">
                    <input type="text" name="title" placeholder="New Conversation">
                </div>
                <div class="input-wrapper">
                    <input type="email" name="friendEmail" placeholder="Your Friend Email">
                </div>
                <!-- <i class="fas fa-acorn"></i> -->
                <button class="btn-icon" type="submit"><i class="fad fa-comments-alt"></i></i></button>
            </form>
        </div>
    <div class="current-conversation">
        <div class="list-message-chat">
            
        </div>
        <form class="form-add-message-chat">
        <button id="bbb">out</button>
            <div class="input-wrapper">
                <input type="text" name="message" placeholder="Enter Your Message...">
            </div>
            <button id="aaa" type="submit">Send</button>
        </form>
    </div>
    <!-- aside-right -->
</section>`
}
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="person pic" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="email pic" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="password pic" />
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password? 
                <span>Click Here</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">login</div>
            </div>
        </div>
    )
}

export default LoginSignup
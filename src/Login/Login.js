import profile from '../images/a.png';
import email from '../images/email.jpg';
import pass from '../images/pass.png';
import "./Login.css";

export const Login =(props) => {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="User Name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="password" className="email" />
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            <p className="link">
              <a href="#">Forgot password ?</a> or <a href="#">Signup</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


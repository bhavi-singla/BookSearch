import React from 'react';
import './login.css';
import { GoogleLogin} from 'react-google-login';

const clientId = "YOUR_ID";

function Login() {

    {/*const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
*/}
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        window.location = "http://localhost:8000/search";

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    {/*const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }*/}
    return (
        <>
        <div className='g-block'>
        <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> 
            {/*{ showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }*/}
        </div>
        {//<div className="g-signin2" data-onsuccess={onSignIn}></div>
        }
        </>
    );
}
export default Login;

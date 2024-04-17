import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './index.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        showPassword: false,
        showSubmitError: false,
        errorMessage: '',
    };

    onChangeemail = event => {
        this.setState({
            email: event.target.value,
        });
    };

    onChangePassword = event => {
        this.setState({
            password: event.target.value,
        });
    };

    renderEmailField = () => {
        const { email } = this.state;
        return (
            <>
                <label className='field-label' htmlFor="email">Email address</label>
                <input
                    className='input-field'
                    id="email"
                    type="text"
                    value={email}
                    placeholder="email"
                    onChange={this.onChangeemail}
                />
            </>
        );
    };

    renderPasswordField = () => {
        const { password, showPassword } = this.state;
        return (
            <>
                <label className='field-label' htmlFor="password">Password</label>
                <input
                    className='input-field'
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder="password"
                    onChange={this.onChangePassword}
                />
            </>
        );
    };

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword,
        }));
    };

    renderCheckedPasswordField = () => (
        <>
            <input
                type="checkbox"
                id="show-password"
                onChange={this.togglePasswordVisibility}
            />
            <label htmlFor="show-password">Show Password</label>
        </>
    );

    onSubmitSuccess = jwtToken => {
        const { history } = this.props;
        Cookies.set('jwt_token', jwtToken, { expires: 30 });
        history.replace('/');
    };

    onSubmitFailure = errorMsg => {
        this.setState({
            showSubmitError: true,
            errorMessage: errorMsg,
        });
    };

    submitLoginForm = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        // Simulate a successful login
        if (email === 'Ankita' && password === 'ankita@123') {
            // Set a dummy JWT token
            const jwtToken = 'dummy_token123';
            this.onSubmitSuccess(jwtToken);
        } else {
            // Simulate a login failure
            const errorMsg = 'Invalid email or password';
            this.onSubmitFailure(errorMsg);
        }
    };

    render() {
        // const { showSubmitError, errorMessage } = this.state;
        // const jwtToken = Cookies.get('jwt_token');
        // if (jwtToken !== undefined) {
        //   return <Redirect to="/" />;
        // }
        return (
            <>
                <div className="login-form-container">

                    <div className='bg-board-container'>

                        <h1>Board.</h1>
                    </div>
                    <div className='sign-in-container'>
                        <h1>Sign In</h1>
                        <p>Sign in to your account</p>
                        <div className='signin-options'>
                            <button className='sign-in-btns'>
                                <img src="https://res.cloudinary.com/ddsbhqayi/image/upload/v1713288343/Google_Sign_In_vvwtlf.png" alt="google" />
                            </button>
                            <button className='sign-in-btns'>
                                <img src="https://res.cloudinary.com/ddsbhqayi/image/upload/v1713288267/Apple_Sign_In_jrgf2c.png" alt="apple" />
                            </button>
                        </div>
                        <form className="form-container" onSubmit={this.submitForm}>

                            <div className="input-container">{this.renderEmailField()}</div>
                            <div className="input-container">{this.renderPasswordField()}</div>
                            <p className='forget-password'>Forget password?</p>
                            <button type="submit" className="sign-in-button">
                                sign In
                            </button>
                            <p className='para'>Don't have an account? <span className='register'>Register here</span></p>
                            {/* {showSubmitError && <p className="error-message">*{errorMsg}</p>} */}
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;

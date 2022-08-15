import React from "react";

class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            fname: '',
            lname: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error,i) => (
                    <li key={`errors-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    
    componentWillUnmount(){
        this.props.removeSessionErrors()
    }

    render() {
        return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
           
          <div className="signup-site-name1">
                        ensombrite
                    </div>
                    <div className="ensombriter">ensombrite</div>
                    <br />
                    <div className="sign-up-sign-up">
                        Sign up
                    </div>
            <br />
            {/* Please { this.props.formType} or  */}
            <div className="signup-form">
                <br />
                <label className="login-input-label">
                    <div className="password-input-text">email address</div>
                    <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
                </label>
                <br />
                <label className="login-input-label">
                <div className="password-input-text">first name</div>
                    <input type="text" value={this.state.fname} onChange={this.update('fname')} className="login-input" />
                </label>
                <br />
                <label className="login-input-label">
                <div className="password-input-text">last name</div>
                    <input type="text" value={this.state.lname} onChange={this.update('lname')} className="login-input" />
                </label>
                <br />
                <label className="login-input-label">
                <div className="password-input-text">password</div>
                    <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                </label>
                <br />
                <label ></label>
                <input className="login-button-input" type="submit" value={this.props.formType} />
                <br />
                {this.renderErrors()}
                <div className="login-from-signup">
                    <div className="signup-from-login-link">
                    { this.props.navLink}
                    </div>
                </div>
                <img className="login-form-image2" src={window.festivala}></img>
            </div>
          </form>
        </div>





        )
    }
}

export default SignupForm;
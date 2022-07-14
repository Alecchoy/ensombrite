import React from "react";
import Kanye from './kanye-west-peppa-pig.png'



class LoginForm extends React.Component {
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

    componentWillUnmount(){
        this.props.removeSessionErrors()
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demologin(e){
        e.preventDefault();
        this.props.demo()

    }

    // demo(e){
    //     e.preventDefault();
    //     this.props.demologin
    // }
    
    
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



    render() {
        return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {/* Please { this.props.formType} or  */}
            {this.renderErrors()}
            <div className="login-page">
                <div className="login-form">
                    <div className="login-site-name">
                        ensombryte
                    </div>
                    <br />
                    <div className="log-in-log-in">
                        Log in
                    </div>
                    <div classname="login-entries">
                        <br />
                        <div className="login-input-label">
                            <div className="email-input-text">email address</div>
                            <button className="text-input-border">
                                
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"></input>
                            </button>
                        </div>
                        <br />
                        <div className="login-input-label">
                        <div className="password-input-text">password</div>
                        <button className="text-input-border">

                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        </button>
                        </div>
                        <br />
                        <label className="login-input-label">
                            <input className="login-button-input" type="submit" value={this.props.formType} />
                        </label>
                        <br />
                        _____________________________________________
                        <br />
                        <br />
                        <div className="login-input-label">
                            <button onClick={e => this.demologin(e)} className="login-input">Demo User</button>
                        </div>
                            <div className="signup-from-login">
                                <div className="signup-from-login-link">
                                { this.props.navLink}
                                </div>
                            </div>
                    </div>
                </div>
               
                    <img className="login-form-image" src={Kanye}></img> 
            </div>
          </form>
        </div>

        )
    }
}

export default LoginForm;
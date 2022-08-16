import React from "react";



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
            <div className="login-page">
                <div className="login-form">
                    <div className="login-site-name">ensombrite</div>
                    <br />
                    <div className="log-in-log-in">
                        Log in
                    </div>
                    <div className="login-entries">
                        <br />
                        <div className="login-input-label">
                            <div className="password-input-text">email address</div>
                            <div className="text-input-border">
                                
                            <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"></input>
                            </div>
                        </div>
                        <br />
                        <div className="login-input-label">
                        <div className="password-input-text">password</div>
                        <div className="text-input-border">

                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        </div>
                        </div>
                        <br />
                        <label className="login-input-label">
                            <input className="login-button-input" type="submit" value={this.props.formType} />
                        </label>
                        <br />
                        __________________________________________________
                        <br />
                        <br />
                        <div className="login-input-label demoro">
                            <button onClick={e => this.demologin(e)} className="demo-boot">demo user</button>
                        </div>
                        {this.renderErrors()}
                            <div className="signup-from-login">
                                <div className="signup-from-login-link">
                                { this.props.navLink}
                                </div>
                            </div>
                    </div>
                </div>
               
            </div>
          </form>
                    <img className="login-form-image" src={window.Kanye}></img> 
                  
        </div>

        )
    }
}

export default LoginForm;
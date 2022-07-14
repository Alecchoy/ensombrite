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
            Welcome to Insombryte!
            <br />
            {/* Please { this.props.formType} or  */}
            {this.renderErrors()}
            <div className="login-form">
                <br />
                <label className="login-input-label">Email:
                    <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input" />
                </label>
                <br />
                <label className="login-input-label">First Name:
                    <input type="text" value={this.state.fname} onChange={this.update('fname')} className="login-input" />
                </label>
                <br />
                <label className="login-input-label">Last Name:
                    <input type="text" value={this.state.lname} onChange={this.update('lname')} className="login-input" />
                </label>
                <br />
                <label className="login-input-label">Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                </label>
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
                <br />
          { this.props.navLink}
            </div>
          </form>
        </div>

        )
    }
}

export default SignupForm;
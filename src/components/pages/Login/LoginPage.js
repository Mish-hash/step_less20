import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../../redux/actions/actionCreators';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onTextChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    onLoginClicked = () => this.props.login({email: this.state.email, password: this.state.password});

    render() {
        const {email, password} = this.state;
        const {isLoadingFetching} = this.props;
        return(
            <div>
                <input onChange={this.onTextChange} value={email} name='email'/>
                <input onChange={this.onTextChange} value={password} name='password'/>
                <button disabled={isLoadingFetching} onClick={this.onLoginClicked}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    isLoadingFetching: store.authReducer.isLoadingFetching
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(loginAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

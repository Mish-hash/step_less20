import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import {apiUrl} from '../../../api/baseUrl';
import { connect } from 'react-redux';
import {getAllUsersAction} from '../../../redux/actions/actionCreators'


class UsersPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

    onUserItemClick = (id) => this.props.history.push('/users/' + id);

    onUserClicked = (userId) => this.props.history.push('/users/' + userId);

    renderUsers() {
        const users = [];
        for(const user of this.props.users) {
            users.push(<div onClick={() => this.onUserClicked(user._id)} key={user._id}>{user.email}</div>)
        }
        return users;
    }

    onTryAgainClick = () => {
        this.setState({isFetching: true, error: null});
        const self = this;
        
        axios.get(apiUrl + '/secret/allUsers')
        .then(({data}) => {
            self.setState({isFetching: false, users: data.users});
            console.log(data);
        })
        .catch((err) => {
            self.setState({isFetching: false, error: err.message});
            console.log(err);
        })
    }

    onEmailChanged = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChanged = (event) => {
        this.setState({password: event.target.value})
    }

    onAddUserClicked = () => {}

    render() {
        const {email, password} = this.state;
        const {isFetching, error} = this.props;

        if (isFetching) {
            return <CircularProgress color="secondary" />
        }

        
        return (
            <div>
                <input onChange={this.onEmailChanged} value={email}/>
                <input onChange={this.onPasswordChanged} value={password}/>
                <button onClick={this.onAddUserClicked}>Add user</button>
                {error &&
                    (
                        <div>
                            <p style={{color: 'red'}}>{error}</p>
                            <button onClick={this.onTryAgainClick}>Try again</button>
                        </div>
                    )
                }
                {this.renderUsers()}
            </div>
        )
    };

    componentDidMount() {
        this.props.getAllUsers();
    };
}

const mapStateToProps = (store) => ({
    users: store.usersReducer.users,
    isFetching: store.usersReducer.isUsersLoading,
    error: store.usersReducer.usersError,
})

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsersAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);

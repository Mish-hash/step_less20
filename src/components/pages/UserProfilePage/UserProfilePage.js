import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';
import {getUserByIdAction, resetAction} from '../../../redux/actions/actionCreators';

class UserProfilePage extends React.Component {
    
    render() {
        const {isFatching, user, clearEventInputs, isFieldsField} = this.props;

        if(isFatching) {
            return <CircularProgress color="secondary" />
        }

        return (
            <div>
                {JSON.stringify(user)}
                {isFieldsField && <button onClick={clearEventInputs}>clear EventInputs</button>}
            </div>)
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.bla(id);
    }
}

const mapStateToProps = (state) => {
    return({
        user: state.usersReducer.user,
        isFatching: state.usersReducer.isUserLoading,
        isFieldsField: state.eventReducer.name || state.eventReducer.place,
    });
};

const mapDispatchToProps = (dispatch) => ({
    bla: (id) => dispatch(getUserByIdAction(id)),
    clearEventInputs: () => dispatch(resetAction())
});

export default connect(mapStateToProps, mapDispatchToProps) (UserProfilePage);

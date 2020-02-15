import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentUser} from '../../redux/actions/actionCreators';

function PrivateRouter({component: Component, user, isFetching, error, getCurrentUser, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if(user) {
                    return <Component {...props}/>
                }
                if(isFetching) {
                    return 'Loading'
                }
                if(error) {
                    return <Redirect to={'/login'}/>
                }
                
                getCurrentUser();
                
            }}
        />
    )
}

function mapStateToProps(store) {
    return {
        user: store.authReducer.user,
        isFetching: store.authReducer.isLoadinFetching,
        error: store.authReducer.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentUser: () => dispatch(getCurrentUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter)

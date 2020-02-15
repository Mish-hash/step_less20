import React from 'react';
import { Route,  Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentUser} from '../../redux/actions/actionCreators';

function PrefetchRouter({component: Component, user, prefetch, loggedInUserForbidden, getCurrentUser, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if(user && loggedInUserForbidden) {
                    return <Redirect to={'/'}/>
                }
                if(!user && prefetch) {
                    getCurrentUser()
                }
                return <Component {...props}/>
  
            }}
        />
    )
}

function mapStateToProps(store) {
    return {
        user: store.authReducer.user,
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentUser: () => dispatch(getCurrentUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrefetchRouter)

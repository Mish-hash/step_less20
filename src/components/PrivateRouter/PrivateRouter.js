import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'

function PrivateRouter({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props}/>
            }}
        />
    )
}

function mapStateToProps(store) {
    return null
}

function mapDispatchToProps(dispatch) {
    return null
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter)

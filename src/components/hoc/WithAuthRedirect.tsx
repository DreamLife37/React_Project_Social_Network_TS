import React, {JSXElementConstructor} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: JSXElementConstructor<any>) => {
    function RedirectComponent(props: any) {
        if (!props.isAuth) return <Navigate to="/login"/>
        return <Component {...props}
        />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}


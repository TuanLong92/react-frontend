import axios from "../../customize/axios";


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';

export const doLogin = (ssoToken)=> {
    return async (dispatch, getState) => {
        dispatch({type: USER_LOGIN_REQUEST});
        axios.post(process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN, { ssoToken }).then( res => {      
            if( res && +res.EC ===0)  {
               // navigate('/');
               dispatch({type: USER_LOGIN_SUCCESS, user: res.DT});
            } else{
               // setMessage(res.EM);
               dispatch({type: USER_LOGIN_FAILED, error: res.EM});
            }
        }).catch(err => {
            dispatch({type: USER_LOGIN_FAILED, error: "Something wrong...."});
            console.log(">>>error",err);
         })
    }
}

export const doGetAccount = (ssoToken)=> {
    return async (dispatch, getState) => {
        dispatch({type: USER_LOGIN_REQUEST});
        axios.get(process.env.REACT_APP_BACKEND_SSO_GET_ACCOUNT).then( res => {      
            if( res && +res.EC ===0)  {
               // navigate('/');
               dispatch({type: USER_LOGIN_SUCCESS, user: res.DT});
            } else{
               // setMessage(res.EM);
               dispatch({type: USER_LOGIN_FAILED, error: res.EM});
            }
        }).catch(err => {
            dispatch({type: USER_LOGIN_FAILED, error: "Something wrong...."});
            console.log(">>>error",err);
         })
    }
}

export const doLogout = (ssoToken)=> {
    return async (dispatch, getState) => {
        dispatch({type: USER_LOGOUT_REQUEST});
        axios.post(process.env.REACT_APP_BACKEND_SSO_LOGOUT).then( res => {      
            if( res && +res.EC ===0)  {
               // navigate('/');
               dispatch({type: USER_LOGOUT_SUCCESS, user: res.DT});
               window.location.href = '/';
            } else{
               // setMessage(res.EM);
               dispatch({type: USER_LOGOUT_FAILED, error: res.EM});
            }
        }).catch(err => {
            dispatch({type: USER_LOGOUT_FAILED, error: "Something wrong...."});
            console.log(">>>error",err);
         })
    }
}
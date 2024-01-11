import { USER_LOGIN_REQUEST,
         USER_LOGIN_FAILED, 
         USER_LOGIN_SUCCESS,
         USER_LOGOUT_REQUEST,
         USER_LOGOUT_FAILED, 
         USER_LOGOUT_SUCCESS,
         } from '../action/accountAction';


const INITIAL_STATE = {

    userInfo: {
        "access_token": "",
        "refresh_token": "",
        "email": "",
        "groupWithRoles": {},
        "username": ""
    },
    isLoading: false,
    errorMessage: ''
};

const accountReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case USER_LOGIN_REQUEST:

           return {

             ...state,
             isLoading : true,
             errorMessage: ''

           };
        case USER_LOGIN_FAILED:

           return {
              ...state,
              isLoading : false,
              errorMessage: action.error

           };
        case USER_LOGIN_SUCCESS:
           console.log('User logged in successfully',action);
        return {
            ...state,
            userInfo: action.user,
            isLoading : false,
            errorMessage: ''

        };
        case USER_LOGOUT_REQUEST:

        return {

          ...state,
          isLoading : false,
          errorMessage: ''

        };
     case USER_LOGOUT_FAILED:

        return {
           ...state,
           isLoading : false,
           errorMessage: action.error

        };
     case USER_LOGOUT_SUCCESS: 
        return {
            ...state,
            userInfo: {
                "access_token": "",
                "refresh_token": "",
                "email": "",
                "groupWithRoles": {},
                "username": ""
            },
            isLoading : false,
            errorMessage: ''

        };


        default: return state;

    }

};

export default accountReducer;
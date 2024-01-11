import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../redux/action/accountAction";
const Code = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    //console.log(searchParams.get('ssoToken'));
    const firstRunRef = useRef(false);
    //const [message, setMessage] = useState("");
    const navigate = useNavigate();
    //console.log(searchParams);
    const dispatch = useDispatch();
    const message = useSelector(state => state.account.errorMessage);
    const user = useSelector(state => state.account.userInfo);
    
    useEffect(() => {
        const ssoToken = searchParams.get('ssoToken');
        if(ssoToken && firstRunRef.current === false) {
            firstRunRef.current = true;
            dispatch(doLogin(ssoToken));
        }        
    }, []);
    useEffect(()=> {
        if(user && user.access_token) {
            navigate('/');
        }
    }, [user]);

    return (<>
        <div class= "container">
            <div className="row">
                <div className="col-12 mt-3">
                {message}
                {message && <span>. Please do login again. Click here to &nbsp; <a href={`${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`}>Login</a></span>}
                </div>
            </div>
        </div>
    </>)
}

export default Code;
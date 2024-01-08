import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "../../customize/axios";
const Code = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    //console.log(searchParams.get('ssoToken'));
    const firstRunRef = useRef(false);
    const [message, setMessage] = useState("");
    //console.log(searchParams);
    useEffect(() => {
        const ssoToken = searchParams.get('ssoToken');
        if(ssoToken && firstRunRef.current === false) {
            firstRunRef.current = true;
            axios.post(process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN, { ssoToken }, { withCredentials : true }).then( res => {      
                if( res && +res.EC ===0)  {

                } else{
                    setMessage(res.EM);
                }
            }).catch(err => {
                console.log(">>>error",err);
             })
        }        
    }, []);


    return (<>
        <div class= "container">
            <div className="row">
                <div className="col-12 mt-3">
                {message}
                {message && <span>. Please do login again. Click here to <a href={`${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`}>Login</a></span>}
                </div>
            </div>
        </div>
    </>)
}

export default Code;
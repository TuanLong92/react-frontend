import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { doGetAccount } from './redux/action/accountAction';
import PuffLoader from 'react-spinners/PuffLoader'

const App = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.account.userInfo);
  const isLoading = useSelector(state => state.account.isLoading);
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate( -50%, -50%)" };
  useEffect(()=>{
    if(user && !user.access_token) {
      dispatch(doGetAccount());
    }
  },[]);
  return (
    <>
    {
      isLoading == true ?
      <div style={style}>
         <PuffLoader
        color={'#36d7b7'}
        loading={true}       
        size={150}        
        />
      </div>
      :
      <div className="App">
      <Header> </Header>
     
     </div>
    
    }
    </>
  );
}

export default App;

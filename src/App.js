import { useState, useEffect } from "react";
import Signin from "./components/Signin";
import Main from "./components/Main";

const userinfo = 'http://localhost:8080/users';

const App = () => {
  const [userData, setUserData] = useState({});
  const [searchData, setSearchData] = useState({});
  const [change, setChange] = useState('')

  useEffect(() => {
    getUserinfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserinfo = async () => {
    const response = await fetch(userinfo);
    const jsonData = await response.json();
    setUserData(jsonData);
  };
  //Variable userData contains array of data

  const validate = async (userInfo) => {
    const newResults = userData.filter(user => user.username.includes(userInfo.username));
    setSearchData(newResults);
    if(userInfo.password === newResults[0].password){
      setChange('Confirmed')
    }
    else {
      setChange('Denied')
      console.log('Login Denied!')
      console.log('User: ' + userInfo.username + ' & ' + newResults[0].username + ' has conflicting information. searchData contains ' + searchData[0].username )
    }
    //console.log(searchData);
  };

  // const newResults = userData.filter(user => user.username.includes('dedwards'));
  // console.log(newResults);

  // console.log(userData);
  //console.log(userData[0].firstname);

  return (
    <div className="adam">
      {change === 'Confirmed' ? <Main /> : <Signin checker={ validate }/>}
    </div>
  );
}

export default App;

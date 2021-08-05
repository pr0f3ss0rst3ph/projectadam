import { useState, useEffect } from "react";
import Button from "./components/Button";

const userinfo = 'http://localhost:8080/users';

const App = () => {
  const [userData, setUserData] = useState({});
  const [searchData, setSearchData] = useState({});

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

  const search = () => {
    const newResults = userData.filter(user => user.username.includes('sfraser'));
    setSearchData(newResults);
    //console.log(searchData);
  };

  // const newResults = userData.filter(user => user.username.includes('dedwards'));
  // console.log(newResults);

  // console.log(userData);
  //console.log(userData[0].firstname);

  return (
    <div className="adam">
       <div className='login'>
         <div className='logincard'>
           <div className='form'>
             <div className='welcome-text'>
               A.D.A.M : eCommerce
             </div>
             <div className='sub-text'>
               Application Deployment And Management
             </div>
             <div className='input-fields'>
               <input type='text' placeholder='Username' id='username'/>
               <input type='password' placeholder='Password' id='password'/>
             </div>
             <Button type='signin'/>
           </div>
           <div className='loginimage'></div>
         </div>
       </div>
    </div>
  );
}

export default App;

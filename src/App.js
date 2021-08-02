import Button from "./components/Button";

const App = () => {
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

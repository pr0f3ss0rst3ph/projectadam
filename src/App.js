import Button from "./components/Button";

const App = () => {
  return (
    <div className="adam">
       <div className='login'>
         <div className='logincard'>
           <div className='form'>
             <div className='welcome-text'>
               Welcome to A.D.A.M
             </div>
             <div className='sub-text'>
               Application Deployment And Management
             </div>
             <div className='input-fields'>
               <input type='text' placeholder='Username' id='username'/>
               <input type='password' placeholder='Password' id='password'/>
             </div>
             <Button />
           </div>
           <div className='loginimage'></div>
         </div>
       </div>
    </div>
  );
}

export default App;

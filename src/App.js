

const App = () => {
  return (
    <div className="adam">
       <div className='login'>
         <div className='logincard'>
           <div className='form'>
             <div className='welcome-text'>
               Welcome to A.D.A.M
             </div>
             <div className='input-fields'>
               <input type='text' placeholder='Username' id='username'/>
               <input type='password' placeholder='Password' id='password'/>
             </div>
           </div>
           <div className='loginimage'></div>
         </div>
       </div>
    </div>
  );
}

export default App;

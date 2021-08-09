import { useState } from "react"

const Signin = ( { checker } ) => {
    const [username, getUsername] = useState('')
    const [password, getPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username) {
            alert('Please enter username')
            return
        }
        else if (!password) {
            alert('Please enter password')
            return
        }

        checker({ username, password })

    }


    return (
       <div className='login'>
         <div className='logincard'>
             <form className='form' onSubmit={onSubmit}>
                <div className='welcome-text'>
                    A.D.A.M : eCommerce
                </div>
                <div className='sub-text'>
                    Application Deployment And Management
                </div>
                <div className='input-fields'>
                    <input type='text' placeholder='Username' id='username' value={ username } onChange={ (e) => getUsername(e.target.value) }/>
                    <input type='password' placeholder='Password' id='password' value={ password } onChange={ (e) => getPassword(e.target.value) }/>
                </div>
                <input type='submit' value='Sign In' className='signin-button' />
             </form>

           <div className='loginimage'></div>
         </div>
       </div>
    )
}

export default Signin

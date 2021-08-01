
const Button = ({ type }) => {
    let button = '';
    if(type === 'signin'){
        button = 'signin-button';
    }
    else{
        button = ''
    }
    return (
        <button className={ button }>
            Sign In
        </button>
    )
}

export default Button

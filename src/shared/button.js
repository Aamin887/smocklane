import '../assets/styles/button.css'
const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className="btn">
            {text}
        </button>
    )
}

export default Button
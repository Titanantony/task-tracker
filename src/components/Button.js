import PropTypes from 'prop-types'


const Button = ({ color, text, onChange }) => {  

    return (
        <div>
            <button 
            onClick={onChange} 
            style={{ backgroundColor: color }} 
            className='btn'>
                {text}
            </button>
        </div>
    );
}

Button.defaultProps = {
    color: "steelblue",
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onChange: PropTypes.func,
}

export default Button;
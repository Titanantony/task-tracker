const Button = ({ color, text }) => {
    return (
        <div>
            <button style={{ backgroundColor: color }} className='btn'>
                {text}
            </button>
        </div>
    );
}

Button.defaultProps = {
    color: "steelblue",
}
Button.protoTypes = {
    text: protoTypes.string,
    color: protoTypes.string,
}

export default Button;



// const Button = ({ color, text }) => {
//     return (
//         <div>
//             <button style={{ backgroundColor: color } 
//             className='btn'>
//             { text }
//                  </button>
//         </div>
//     );
// }

// export default Button;

import PropTypes from 'prop-types';

const Button = ({ children, buttonColour, onClick }) => {
  return (
    <button className={`${buttonColour} button`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  buttonColour: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

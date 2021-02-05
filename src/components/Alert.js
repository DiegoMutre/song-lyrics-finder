import PropTypes from "prop-types";

const Alert = ({ message }) => {
    return <p className="alert alert-danger text-center p-2">{message}</p>;
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Alert;

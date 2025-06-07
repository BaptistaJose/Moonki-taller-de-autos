const validateLogin = (input) => {
    const errors = {};

    if (!input.username) {
        errors.username = 'Username is required';
    } else if (username.length < 3) {
        errors.username = 'Username must be at least 3 characters long';
    }

    if (!input.password) {
        errors.password = 'Password is required';
    }
    return errors;
}

export default validateLogin;
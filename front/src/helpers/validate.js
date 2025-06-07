const validate = (input) =>{
    const errors = {};

    if (!input.name) {
        errors.name = 'Name is required';
    } else if (input.name.length < 3) {
        errors.name = 'Name must be at least 3 characters';
    }

    if (!input.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.email)) {
        errors.email = 'Invalid email address';
    }

    if (!input.birthdate) {
        errors.birthdate = 'Birthdate is required';
    }else if(!/^\d{4}-\d{2}-\d{2}$/.test(input.birthdate)){
        errors.birthdate = 'Birthdate must be in YYYY-MM-DD format';
    }

    if (!input.nDni) {
        errors.ndn = 'National ID Number is required';
    } else if (!/^\d{6,12}$/.test(input.nDni)) {
        errors.ndn = 'Must be a number with 6 to 12 digits';
    }

    if (!input.username) {
        errors.username = 'Username is required';
    } else if (input.username.length < 3) {
        errors.username = 'Username must be at least 3 characters';
    }

    if (!input.password) {
        errors.password = 'Password is required';
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(input.password)) {
        errors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    return errors;
}

export default validate;
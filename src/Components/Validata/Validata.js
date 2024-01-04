export const Validata = (data,type) => {
    const errors = {};

    if (!data.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email address is invalid';
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 6) {
        errors.password = 'Password need to be 6 character or more';
    } else {
        delete errors.password;
    }

    if (type === 'signUp') {
        if (data.name.trim()) {
            delete errors.name;
        } else {
            errors.name = 'Username required';
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = 'Your password must contain between 4 and 60 characters';
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Password do not match';
        } else {
            delete errors.confirmPassword;
        }

        if (data.isAccepted) {
            delete errors.isAccepted;
        } else {
            errors.isAccepted = 'Accept our regulations';
        }
    }

    return errors;
}
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Validata } from '../../Components/Validata/Validata';
import { Notify } from '../../Components/Toastify/Toastify';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
// Css
import 'react-toastify/dist/ReactToastify.css';
import '../../Assets/Css/Form.css';

const SignUp = () => {
    // title
    useTabTitle('Sing Up');

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: true
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState();
    const [submit, setSubmit] = useState();

    useEffect(() => {
        setErrors(Validata(data, 'signUp'));
    }, [data]);

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true });
    };

    const passwordHandler = () => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };

    const changeHandler = event => {
        if (event.target.name === 'isAccepted') {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else {
            setData({ ...data, [event.target.name]: event.target.value });
        }
    };

    const submitHandler = () => {
        if (!Object.keys(errors).length) {
            Notify('You signed in successfully', 'success');
            setSubmit(true);
        } else {
            Notify('Invalid data!', 'error');
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            });
        }
    }

    return (
        <main className='container'>
            <form action='/home' onSubmit={submitHandler}>
                <h2 className='form-title'>Sign Up</h2>
                <div className='form-filed'>
                    <input placeholder='Name' className={`form-input ${errors.name && touched.name ? 'uncompleted' : ''}`}
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={changeHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className='form-filed'>
                    <input placeholder='Email' className={`form-input ${errors.email && touched.email ? 'uncompleted' : ''}`}
                        type='text'
                        name='email'
                        value={data.email}
                        onChange={changeHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className='form-filed'>
                    <input placeholder='Password'
                    className={`form-input ${errors.password && touched.password ? 'uncompleted' : ''}`}
                        type= {showPassword ? 'text' : 'password'}
                        name='password'
                        value={data.password}
                        onChange={changeHandler}/>

                    {errors.password && touched.password && <span>{errors.password}</span>}

                    <i className={`password-icon ${showPassword ? 'show-password' : 'hide-password'}`} onClick={passwordHandler}></i>
                </div>
                <div className='form-filed'>
                    <input placeholder='ConfirmPassword'
                    className={`form-input ${errors.confirmPassword && touched.confirmPassword ? 'uncompleted' : ''}`}
                        type='password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={changeHandler}/>

                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className='form-filed'>
                    <div className='checkbox-container'>
                        <input
                            type='checkbox'
                            name='isAccepted'
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            defaultChecked={true}
                            id='remember'
                        />
                        <label htmlFor='remember'>Remember me</label>
                    </div>
                </div>
                <div className='form-btn'>
                    <Link to='/login' className='btn-submit'>login</Link>
                    <Link to={submit ? '/home' : ''} className='btn-submit' onClick={submitHandler}>sing up</Link>
                </div>
            </form>
            <ToastContainer />
        </main>
    );
};

export default SignUp;
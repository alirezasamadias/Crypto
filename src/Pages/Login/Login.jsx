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

const Login = () => {
    // title
    useTabTitle('Login');

    const [data, setData] = useState({
        email: '',
        password: '',
        isAccepted: true
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [submit, setSubmit] = useState();
    const [learnMore, setLearnMore] = useState({
        learnMore: false
    });

    useEffect(() => {
        setErrors(Validata(data, 'login'));
    }, [data]);


    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true});
    };

    const changeHandler = event => {
        if (event.target.name === 'isAccepted') {
            setData({...data, [event.target.name]: event.target.checked});
        } else {
            setData({...data, [event.target.name]: event.target.value});
        }
    };

    const submitHandler = () => {
        if (!Object.keys(errors).length) {
            Notify('You loge in successfully', 'success');
            setSubmit(true);
        } else {
            Notify('Invalid data!', 'error')
            setTouched({
                email: true,
                password: true,
                isAccepted: true
            });
        }
    };

    const clickHandler = () => {
        setLearnMore({learnMore: true});
    };

    return (
        <main className='container'>
            <form action='/home' onSubmit={submitHandler}>
                <h1 className='form-title'>login</h1>

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
                        type='password'
                        name='password'
                        value={data.password}
                        onChange={changeHandler}/>

                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className="form-btn">
                    <Link to={submit ? '/home' : ''} className='btn-submit' onClick={submitHandler}>login</Link>
                </div>

                <div className='form-filed'>
                    <div className='checkbox-container'>
                        <input
                            type='checkbox'
                            value={data.isAccepted}
                            onFocus={focusHandler}
                            defaultChecked={true}
                            id='remember'
                        />
                        <label htmlFor='remember'>Remember me</label>
                    </div>
                </div>

                <div className='form-suggest'>
                    <span>
                        New to Crypto?&nbsp;
                        <Link to='/sign-up'> sign up now</Link>
                    </span>

                    <p>This page is protected by google re CAPTCHA to ensure you're not a bot. {!learnMore.learnMore && <span className='textLink' onClick={clickHandler}>Learn more</span>}</p>

                    <p className={learnMore.learnMore ? 'show-content' : 'hide-content'}>
                        The information collected by Google reCAPTCHA is subject to the Google
                        <span className='textLink'> Privacy Policy</span> and <span className='textLink'>Terms of Service</span>, and is used for providing, maintaining and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                    </p>
                </div>
            </form>
            <ToastContainer />
        </main>
    );
}

export default Login;
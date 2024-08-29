"use client";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../helpers/authHelper';
import { ILogin } from '@/interfaces/login';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Email must be a valid format'
        )
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\d!@#$%^&*()-+=]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        )
        .required('Password is required'),
});

const InputField = ({ field, form, ...props }: any) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="relative">
            <input
                {...field}
                {...props}
                type={props.type === 'password' ? (showPassword ? 'text' : 'password') : props.type}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {props.type === 'password' ? (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="focus:outline-none border border-gray-300 shadow shadow-gray-500"
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                        )}
                    </button>
                ) : (
                    props.icon
                )}
            </div>
        </div>
    );
};

const Login: React.FC = () => {
    const router = useRouter();
    const { login: contextLogin } = useAuth();

    const handleSubmit = async (values: ILogin, { setSubmitting }: any) => {
        try {
            const response = await login(values);
            const { token, user } = response;
            const clearUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                orders: user.orders,
            };

            contextLogin(clearUser, token);

            toast.success('Your login was successful.', { autoClose: 2000, position: 'top-center' });

            setTimeout(() => {
                router.push('/dashboard');
            }, 2000);
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Login failed. Please try again.', { autoClose: 2000, position: 'top-center' });
        }
        setSubmitting(false);
    };

    return (
        <div className="mt-12 mb-24 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 bg-white px-16 py-20 rounded-lg shadow-lg">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        Login
                    </h2>
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    component={InputField}
                                    icon={<Mail className="h-5 w-5 text-gray-400" />}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />

                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    component={InputField}
                                    icon={<Lock className="h-5 w-5 text-gray-400" />}
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="max-w-sm group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
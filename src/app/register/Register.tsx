"use client";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User, Mail, Lock, MapPin, Phone, Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { register } from '../../helpers/authHelper';
import { IRegister } from '../../interfaces/register';

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]{2,30}$/, 'Please enter a valid Name.')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address.')
        .required('Email is required'),
    password: Yup.string()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'The password must be at least 8 characters long and include one letter and one number.')
        .required('Password is required'),
    address: Yup.string()
        .min(5, 'A minimum of 5 characters is required for the address.')
        .required('Address is required'),
    phone: Yup.string()
        .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please enter a valid phone number.')
        .required('Phone number is required'),
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
                        className="focus:outline-none"
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400 shadow shadow-gray-500" />
                        ) : (
                            <Eye className="h-5 w-5 text-gray-400 shadow shadow-gray-500" />
                        )}
                    </button>
                ) : (
                    props.icon
                )}
            </div>
        </div>
    );
};

const Register: React.FC = () => {
    const router = useRouter();

    const handleSubmit = async (values: IRegister, { setSubmitting }: any) => {
        try {
            await register(values);
            toast.success('Your registration was successful.', { autoClose: 2000, position: 'top-center' });
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message, { autoClose: 3000, position: 'top-center' });
            } else {
                toast.error('An unexpected error occurred. Please try again.', { autoClose: 2000, position: 'top-center' });
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mt-12 mb-24 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 bg-white px-16 py-20 rounded-lg shadow-lg">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        Register
                    </h2>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        address: '',
                        phone: '',
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    component={InputField}
                                    icon={<User className="h-5 w-5 text-gray-400" />}
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />

                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
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

                                <Field
                                    name="address"
                                    type="text"
                                    placeholder="Address"
                                    component={InputField}
                                    icon={<MapPin className="h-5 w-5 text-gray-400" />}
                                />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />

                                <Field
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone number"
                                    component={InputField}
                                    icon={<Phone className="h-5 w-5 text-gray-400" />}
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="max-w-sm group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Registering...' : 'Register'}
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

export default Register;
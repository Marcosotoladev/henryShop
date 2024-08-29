
import React from 'react'
import Link from 'next/link'
import Register from './Register'

const Page = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <p className="text-gray-600">
                    If you are already registered, login{' '}
                    <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                        HERE
                    </Link>
                </p>
            </div>
            <Register />
        </div>
    )
}

export default Page


import React from 'react'
import Link from 'next/link'
import Login from './Login'

const Page = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <p className="text-gray-600">
                    If you are not registered yet, register{' '}
                    <Link href="/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                        HERE
                    </Link>
                </p>
            </div>
            <Login />
        </div>
    )
}

export default Page




import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavLogo = () => {
    return (
        <div>
            <Link href="/" className="">
                <div className="relative w-[120px] h-[90px] sm:w-[170px] sm:h-[120px]">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        layout="fill" // Usar layout fill para que la imagen se ajuste al contenedor
                        objectFit="contain"
                    />
                </div>
            </Link>
        </div>
    );
};

export default NavLogo;

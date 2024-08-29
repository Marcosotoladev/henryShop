import Image from 'next/image';

export const MyComponent = () => {
    return (
        <div>
            <Image
                src="/path/to/image.png"
                alt="My Image"
                width={100}
                height={100}
                loading='lazy'
            />
        </div>
    );
}
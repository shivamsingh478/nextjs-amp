import Image from 'next/image';

export const config = { amp: 'hybrid' };

export default function Landing() {
    return (
        <div>
            <Image
                src="next.svg"
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    );
}

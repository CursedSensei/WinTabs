import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
    const imageStyle = {
        aspectRatio: '1 / 1',
        height: '100%',
        width: 'auto'
    };

    return (
        <>
        <div className="hidden text-center font-semibold text-lg md:grid md:grid-cols-7 h-26 py-6">
            <div className="h-14 mx-auto">
                <Link href='/'>
                    <Image 
                        src='/favicon.ico'
                        width={20}
                        height={20}
                        alt="Home"
                        style={imageStyle}
                    />
                </Link>
            </div>
            <a className="my-auto">Home</a>
            <a className="my-auto">Latest</a>
            <a className="my-auto">Workspace</a>
            <div className="col-end-8 col-span-2 text-base font-normal font-serif grid grid-cols-2">
                <button className="m-auto">Login</button>
                <button className="m-auto">Sign Up</button>
            </div>
        </div>
        
        <div className="md:hidden h-26 py-6">
            <div className="h-14 mx-auto">
                <Link href='/'>
                    <Image 
                        src='/favicon.ico'
                        width={20}
                        height={20}
                        alt="Home"
                        style={imageStyle}
                    />
                </Link>
            </div>
        </div>
        </>
    );
}
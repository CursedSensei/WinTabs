import Image from "next/image";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

export default function TopBar() {
    const imageStyle = {
        aspectRatio: '1 / 1',
        height: '100%',
        width: 'auto'
    };

    return (
        <>
        <div className="hidden text-center font-semibold text-lg md:grid md:grid-cols-7 h-26 py-6">
            <div className="h-14 mx-auto select-none">
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
            <Link href='/' className="my-auto hover:bg-white hover:bg-opacity-5 py-1 rounded-lg">Home</Link>
            <a className="my-auto hover:bg-white hover:bg-opacity-5 py-1 rounded-lg">Latest</a>
            <a className="my-auto hover:bg-white hover:bg-opacity-5 py-1 rounded-lg">Profile</a>
            <div className="col-end-8 col-span-2 text-base font-normal font-serif grid grid-cols-2">
                <Link href='/login' className="m-auto opacity-75 hover:opacity-100">Login</Link>
                <button className="m-auto opacity-75 hover:opacity-100">Sign Up</button>
            </div>
        </div>
        
        <div className="md:hidden h-26 px-1 py-6 grid grid-cols-2">
            <div className="h-14 flex">
                <Link href='/'>
                    <Image 
                        src='/favicon.ico'
                        width={20}
                        height={20}
                        alt="Home"
                        style={imageStyle}
                    />
                </Link>
                <p className="my-auto ml-5 text-2xl font-bold font-mono">WinTabs</p>
            </div>
            <Link href='/mobile' className="ml-auto my-auto text-2xl">
                <TiThMenu />
            </Link>
        </div>
        </>
    );
}
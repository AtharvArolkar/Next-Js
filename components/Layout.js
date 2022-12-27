import Image from "next/image";
import Header from "./Header";

export default function Layout({children}){
    return (
        <div className="p-5">
            
            <Header/>
            {children}
            <footer className="sticky  bg-white p-5 w-full">
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                Powered by{' '}
                <span >
                    
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
        </div>
    )
}
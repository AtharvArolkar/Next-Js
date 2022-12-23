import Header from "./Header";

export default function Layout({children}){
    return (
        <div className="p-5">
            <Header/>
            {children}
        </div>
    )
}
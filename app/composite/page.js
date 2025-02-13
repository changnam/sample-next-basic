import ClientComponent from "@/component/ClientComponent";
import ServerComponent from "@/component/ServerComponent";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Composite(){
    
    return(
        <>
        <ClientComponent>
            <ServerComponent />
        </ClientComponent>
        <Link className="block" href="/">홈으로로</Link>
        </>
    )
}
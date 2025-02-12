import ClientComponent from "@/component/ClientComponent";
import ServerComponent from "@/component/ServerComponent";

export const dynamic = "force-dynamic";

export default function Composite(){
    
    return(
        <ClientComponent>
            <ServerComponent />
        </ClientComponent>
    )
}
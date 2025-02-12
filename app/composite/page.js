import ClientComponent from "@/component/ClientComponent";
import ServerComponent from "@/component/ServerComponent";

export default function Composite(){
    
    return(
        <ClientComponent>
            <ServerComponent />
        </ClientComponent>
    )
}
import Nav from "../components/nav"
import CuerpoPage from "../components/cuerpoPaginaInicio"
import Eventos from "../components/eventos"
export default function Inicio(){
    return(
        <>
        <div className="mx-auto w-10/12">
        <Nav />
        <Eventos />
        <CuerpoPage />
        </div>
        </>
    )
}
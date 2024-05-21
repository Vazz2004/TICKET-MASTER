import Nav from "../components/nav"
import CuerpoPage from "../components/cuerpoPaginaInicio"
import Eventos from "../components/eventos"
import Footer from "../components/footer"
export default function Inicio(){
    return(
        <>
        <div className="mx-auto w-10/12">
        <Nav />
        <Eventos />
        <CuerpoPage />
        <Footer />
        </div>
        </>
    )
}
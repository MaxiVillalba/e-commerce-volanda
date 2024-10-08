import { useEffect } from "react"
const Titulo = () => {
    useEffect (()=> {
        const mostrarAnchoVentana = () => {
            console.log("Ancho de la ventana: ", window.innerWidth)
        }
        window.addEventListener("resize", mostrarAnchoVentana)

        return () => {
            // console.log("Me estoy desmontando")
            window.removeEventListener("resize", mostrarAnchoVentana)
        }
    }, [])
  return (
    <div>Titulo</div>
  )
}

export default Titulo
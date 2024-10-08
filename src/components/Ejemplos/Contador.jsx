import { useState, useEffect } from "react"
import ContadorView from "./ContadorView"
import Titulo from "./Titulo"
const Contador = () => {
    const [ contador, setContador ] = useState(0)
    console.log(contador)
    const [toggle, setToggle] = useState(true)
    
    const aumentarContador = () => {
        if ( contador <10 ) {
        setContador( contador + 1)
        }
    }

    // useEffect( ()=> {    const fetchAppi = () => {
    //     fetch ("https://fakestoreapi.com/products")
    //     .then ( (respuesta) => respuesta.json()
    //     .then ( (data) => console.log(data))
    // )
    // }

    // fetchAppi()}, [])

    const alternarToggle = () => {
        setToggle( !toggle )
    }

    //Se ejecuta solo al montar el componente
    //Ej: llamadas a api, suscripciones a eventListener
    useEffect( ()=> {
        console.log("1er use effect")
    }, [])

    //Se ejecuta en el montaje y cada vez que "contador" cambie
    //Ej: para acciones especificas cuando una variable de
    useEffect( ()=> {
        console.log("2do use effect")
    }, [contador])

    useEffect( ()=> {
        console.log("3er use effect")
    })

    return (
        <>
        <div>
            <ContadorView contador={contador} aumentarContador={aumentarContador} />
        </div>
        <div>
            <p>Valor toggle: { toggle.toString() } </p>
            <button onClick={ alternarToggle } >Alternar valor del toggle</button>
            {
                toggle === true && <Titulo />
            }
        </div>
        </>
    )
}

export default Contador


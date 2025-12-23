import { useLayoutEffect, useState } from "react";


export default function useWindowResize(){
    const [windowResize, setWindowResize] = useState({
        width: 0,
        height: 0
    })

    function handleWindowResize(){
        setWindowResize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [windowResize])

    return windowResize
}
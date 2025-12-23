import { useRef } from "react"
import { data } from "./data"

export default function ScrollToSection() {
    const ref = useRef()

    function handleScrollToSection() {
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: pos,
            behavior: 'smooth'
        })
    }
    return <>
        <div>
            <h1>Scroll to Section Feature</h1>
            <button onClick={() => handleScrollToSection()}>Click to scroll</button>
            {
                data && data.length ?
                    data.map((item, index) => {
                        return <div key={index} ref={index === 4 ? ref : null} style={item.style}>
                            <h3>{item.label}</h3>
                        </div>
                    })
                    : null
            }
        </div>
    </>
}
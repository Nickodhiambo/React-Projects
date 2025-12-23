import { useRef } from "react"
import { data } from "./data"

export default function ScrollToTopAndBottom() {

    const bottomRef = useRef(null)

    function handleScrollToTop() {
        window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
        })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return <>
        <div>
            <h1>Scroll to Top and Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button onClick={() => handleScrollToBottom()}>Scroll to Bottom</button>
            <ul style={{ listStyle: 'none' }}>
                {
                    data && data.length ?
                        data.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                        : null
                }
            </ul>
            <h3 ref={bottomRef}>This is the bottom section</h3>
            <button onClick={() => handleScrollToTop()}>Scroll to Top</button>
        </div>
    </>
}
import { use, useRef, useState } from "react";
import useOnClickOutside from ".";


export default function UseOnClickOutsideTest() {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, () => setShowContent(false))

    return <>
        <div>
            {
                showContent ? <div ref={ref}>
                    <h1>This is some random content</h1>
                    <p>Click only outside of this text to close</p>
                </div>
                    : <button onClick={() => setShowContent(true)}>Show content</button>
            }
        </div>
    </>
}
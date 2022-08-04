import { useEffect, useState } from "react"

const useLunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/lunch')
            .then(res => res.json())
            .then(data => {
                setLunch(data)
            })
    }, [])
    return [lunch, setLunch]
}
export default useLunch;
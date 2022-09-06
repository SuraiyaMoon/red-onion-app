import { useEffect } from 'react';
import { useState } from 'react';
const useItemDetails = id => {
    const [food, setFood] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data)
            })
    }, [id])
    return [food, setFood]
}
export default useItemDetails;

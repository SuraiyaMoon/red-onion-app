// import { useEffect, useState } from "react"
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../firebase.init";
// import Loading from "../pages/Shared/Loading";

// const useMyOrder = user => {
    // const [user, loading] = useAuthState(auth)
    // if (loading) {
    //     return <Loading></Loading>
    // }
    // const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //     if (user) {
    //         const email = user?.email;
    //         fetch(`http://localhost:5000/orderByEmail?email=${email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setOrders(data)

    //             })
    //     }
    // }, [user])
//     return [orders, setOrders]
// }
// export default useMyOrder;
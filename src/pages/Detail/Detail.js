import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailMenu from './DetailMenu';
import ShowDetail from './ShowDetail';


const Detail = () => {
    const { id } = useParams()

    const [detail, setDetail] = useState({})

    const url = `http://localhost:5000/breakfast/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])


    return (
        <div>
            <DetailMenu></DetailMenu>
            <ShowDetail detail={detail}
            ></ShowDetail>
        </div>
    );
};

export default Detail;
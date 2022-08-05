import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowDetail from './ShowDetail';

const DinnerDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    const url = `http://localhost:5000/dinner/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [url])
    return (
        <div>
            <ShowDetail detail={detail}></ShowDetail>

        </div>
    );
};

export default DinnerDetail;
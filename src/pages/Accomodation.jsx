import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AccomodationErrors from './Errors/AccomodationErrors.jsx'
import Carrousel from '../components/Carrousel.jsx'
import Banner from '../components/Banner.jsx'

export const Accomodation = () => {
    const url = `http://localhost:3001/accomodations`
    let urlParams = useParams()
    const [data, setData] = useState();
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${url}/${urlParams.id}`)

            let responseData = null;

            switch (response.status) {
                case 200:
                    responseData = await response.json();
                    setData(responseData);
                    break;
                case 404:
                    responseData = await response.text()
                    setError({
                        status: response.status,
                        data: JSON.parse(responseData)
                    })
                    break;
            }
        }
        fetchData();
    }, []);

    if (error) return <AccomodationErrors error={error}/>
    return (
        <main>
            <Carrousel images={data?.pictures} />
            {/* <Banner image={data?.pictures[0]} alt={data?.description}/> */}
        </main>
    )
}
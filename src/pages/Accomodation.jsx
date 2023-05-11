import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AccomodationErrors from './Errors/AccomodationErrors.jsx'

export const Accomodation = () => {
    const url = `http://localhost:3001/accomodations`
    let urlParams = useParams()
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${url}/${urlParams.id}`)
            
            if (response.status !== 404) {
                const responseData = await response.json();
                setData(responseData);
            } else {
                let responseData = await response.text()
                setError({
                    status: response.status,
                    data: JSON.parse(responseData)
                })
            }
        }
        fetchData();
    }, []);

    if (error) return <AccomodationErrors error={error}/>
    return (
        <main>
            Bien {data.title}
        </main>
    )
}
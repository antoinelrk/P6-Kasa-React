import { useNavigate } from 'react-router'
import BackgroundImage from '../assets/images/tinywow_background_21429525.jpg'
import AccomodationCard from '../components/AccomodationCard.jsx'
import { useState, useEffect } from 'react'

export default function Home () {
    const url = `https://api.kasa.antoinelrk.com/accomodations`
    const [data, setData] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = `Kasa`
        async function fetchData() {
            const response = await fetch(`${url}`)

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

    if (error) navigate('/404')
    
    const listAccomodations = data?.map(
        (accomodation) => (
            <AccomodationCard key={accomodation.id} accomodation={accomodation} />
        )
    )

    return (
        <main className="home">
            <section className="home-image">
                <img src={BackgroundImage} alt="Chez vous, partout et ailleur" />
                <div className="text"><p>Chez vous,</p><p>partout et ailleur</p></div>
            </section>
            <div className="locations-wrapper">
                {listAccomodations}
            </div>
        </main>
    )
}
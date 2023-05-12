import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AccomodationErrors from './Errors/AccomodationErrors.jsx'
import Carrousel from '../components/Carrousel.jsx'
import Style from '../assets/scss/modules/Accomodation.module.scss'
import Tags from '../components/Tags.jsx'
import AccomodationRating from '../components/AccomodationRating.jsx'

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
        <main className={Style.Accomodation}>
            <Carrousel images={data?.pictures} />
            <section className={Style.FirstInformations}>
                <section className={Style.Left}>
                    <h1 className={Style.AccomodationTitle}>{data?.title}</h1>
                    <h2 className={Style.AccomodationLocation}>{data?.location}</h2>
                </section>
                <section className={Style.Right}>
                    <div className={Style.AccomodationHost}>
                        <div className={Style.Name}>{data?.host.name}</div>
                        <img className={Style.Avatar} src={data?.host.picture} />
                    </div>
                </section>
            </section>

            <section className={Style.SecondaryInformations}>
                <Tags tags={data?.tags} />
                <AccomodationRating stars={data?.rating} />
            </section>
        </main>
    )
}
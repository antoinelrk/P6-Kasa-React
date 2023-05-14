import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AccomodationErrors from './Errors/AccomodationErrors.jsx'
import Carrousel from '../components/Carrousel.jsx'
import Style from '../assets/scss/modules/Accomodation.module.scss'
import Tags from '../components/Tags.jsx'
import AccomodationRating from '../components/AccomodationRating.jsx'
import Collapse from '../components/Collapse.jsx';

export const Accomodation = () => {
    const url = `https://api.kasa.antoinelrk.com/accomodations`
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

    return (data && (
        <main className={Style.Accomodation}>
            <Carrousel images={data?.pictures} />
            <section className={Style.FirstInformations}>

                <section className={Style.Left}>
                    <div className={Style.AccomodationTopInfo}>
                        <h1 className={Style.AccomodationTitle}>{data?.title}</h1>
                        <h2 className={Style.AccomodationLocation}>{data?.location}</h2>
                    </div>
                    <Tags tags={data?.tags} />
                </section>

                <section className={Style.Right}>
                    <div className={Style.AccomodationHost}>
                        <div className={Style.Name}>{data?.host.name}</div>
                        <img className={Style.Avatar} src={data?.host.picture} />
                    </div>
                    <AccomodationRating stars={data?.rating} />
                </section>
            </section>

            <section className={Style.AccomodationWrappers}>
                <section className={Style.Left}>
                    <Collapse text={data?.description} title="Description"/>
                </section>
                <section className={Style.Right}>
                    <Collapse title="Equipements" list={data?.equipments}/>
                </section>
            </section>
        </main>
    ))
}
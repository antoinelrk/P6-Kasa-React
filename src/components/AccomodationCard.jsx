import Style from '../assets/scss/modules/AccomodationCard.module.scss'

export default function AccomodationCard ({accomodation}) {
    return (
        <section className={Style.AccomodationCard}>
            <a className={Style.AccomodationLink} href={`accomodation/${accomodation.id}`}>
                <img className={Style.componentBackground} src={accomodation.cover} alt={accomodation.description} />
                <p className={Style.componentTitle}>{accomodation.title}</p>
            </a>
        </section>
    )
}
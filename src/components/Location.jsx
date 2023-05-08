import Style from '../assets/scss/modules/Location.module.scss'

function Location ({location}) {
    return (
        <section className={Style.Location}>
            <a className={Style.LocationLink} href={`accomodation/${location.id}`}>
                <img className={Style.componentBackground} src={location.cover} alt={location.description} />
                <p className={Style.componentTitle}>{location.title}</p>
            </a>
        </section>
    )
}

export default Location
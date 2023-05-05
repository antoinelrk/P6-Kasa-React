import Style from '../assets/scss/modules/Location.module.scss'

function Location ({location}) {
    console.log(location.title)
    return (
        <section className={Style.Location}>
            <img className={Style.componentBackground} src={location.cover} alt={location.description} />
            <p className={Style.componentTitle}>{location.title}</p>
        </section>
    )
}

export default Location
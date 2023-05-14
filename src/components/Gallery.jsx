import Style from '../assets/scss/modules/Gallery.module.scss'
import Location from './Location.jsx'

export default function Gallery ({data}) {
    const listLocation = data.map(
        (location) => (
            <Location location={location} />
        )
    )

    return(
        <section className={Style.Gallery}>
            {listLocation}
        </section>
    )
}
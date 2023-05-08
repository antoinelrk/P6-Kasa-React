import Style from '../assets/scss/modules/Banner.module.scss'

export default function Banner ({data}) {
    return (
        <section className={Style.BannerImage}>
            <img src={data.image} alt={data.alt} />
        </section>
    )
}
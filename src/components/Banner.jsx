import Style from '../assets/scss/modules/Banner.module.scss'

export default function Banner ({image, alt}) {
    return (
        <section className={Style.BannerImage}>
            <img src={image} alt={alt} />
            {/* TODO: Carousel */}
        </section>
    )
}
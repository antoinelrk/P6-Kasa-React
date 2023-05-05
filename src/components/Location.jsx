import Style from '../assets/scss/modules/Location.module.scss'

function Location () {
    return (
        <section className={Style.Location}>
            <img className={Style.componentBackground} src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg" alt="Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accéderez très rapidement à tous les points touristiques de Paris." />
            <p className={Style.componentTitle}>Cheap - Studio 18ème</p>
        </section>
    )
}

export default Location
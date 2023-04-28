import BackgroundImage from '../assets/images/tinywow_background_21429525.jpg'

function Main () {
    return (
        <section className="home-image">
            <img src={BackgroundImage} alt="Image de fond du premier composant" />
            <p>
                Chez vous,<br/> partout et ailleurs
            </p>
        </section>
    )
}

export default Main
import BackgroundImage from '../assets/images/tinywow_background_21429525.jpg'
import Location from '../components/Location.jsx'

function Home () {
    return (
        <main className="home">
            <section className="home-image">
                <img src={BackgroundImage} alt="Image de fond du premier composant" />
                <p>Chez vous,<br/> partout et ailleur</p>
            </section>
            <Location />
        </main>
    )
}

export default Home
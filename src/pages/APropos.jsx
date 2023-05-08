import Collapse from "../components/Collapse.jsx"
import BackgroundImage from '../assets/images/tinywow_kalen-emsley-Bkci_8qcdvQ-unsplash 2_22483284.jpg'

function APropos () {
    return (
        <main className="a-propos">
            <section>
                <img className="banner" src={BackgroundImage} alt="Image de fond du premier composant" />
            </section>
            <Collapse />
            <Collapse />
            <Collapse />
            <Collapse />
        </main>
    )
}

export default APropos
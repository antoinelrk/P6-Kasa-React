import { useState } from 'react'
import Style from '../assets/scss/modules/Collapse.module.scss'

function Collapse ({ text, title, list }) {
    /**
     * On défini la variable ainsi que le mutateur 
     */
    const [isCollapsed, setIsCollapsed] = useState(false);

    /**
     * On défini la constante pour toggle le state
     */
    const handleToggle = () => setIsCollapsed(!isCollapsed)

    let collapseContent = ""

    if (list) {
        collapseContent = (<ul> {list.map((entry, index) => (<li key={index}>{entry}</li>))} </ul>)
    } else {
        collapseContent = (<p className={Style.CollapseContent}>{text}</p>)
    }

    return (
        <section className={Style.Collapse}>
            <div className={Style.CollapseTitle}>
                <h2>{title ?? ''}</h2>
                <button onClick={handleToggle} className={Style.CollapseRetract}>
                    <figure className={isCollapsed ? Style.CaretRotated : Style.CaretDefault}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 448 512">
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </figure>
                </button>
            </div>
            {isCollapsed && collapseContent}
        </section>
    )
}

export default Collapse
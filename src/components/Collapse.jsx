import { useEffect, useState } from 'react'
import Style from '../assets/scss/modules/Collapse.module.scss'

function Collapse (props) {
    /**
     * On défini la variable ainsi que le mutateur 
     */
    const [isCollapsed, setIsCollapsed] = useState(false);

    /**
     * On défini la constante pour toggle le state
     */
    const handleToggle = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <section className={Style.Collapse}>
            <div className={Style.CollapseTitle}>
                <h2>Title</h2>
                <button onClick={handleToggle} className={Style.CollapseRetract}>
                    {/* {isCollapsed ? '-' : '+'} */}
                    <figure className={isCollapsed ? Style.CaretRotated : Style.CaretDefault}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 448 512">
                            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </figure>
                </button>
            </div>
            {isCollapsed && (
                <p className={Style.CollapseContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ut ipsum doloremque quaerat laborum pariatur voluptatibus, velit animi iusto neque, obcaecati mollitia ipsa? Repellat sint assumenda tempore nobis quam corrupti.
                    Doloremque ea impedit nobis magni error, natus necessitatibus numquam tempore minima, repellendus harum beatae debitis reprehenderit commodi nesciunt explicabo modi a repudiandae culpa, perferendis adipisci velit! Nisi praesentium ratione odit!
                    Perferendis velit sunt voluptatibus minus quia rerum, qui earum optio fugiat. Dolor asperiores dicta reiciendis, modi voluptatem, enim exercitationem esse eos numquam, illum beatae. Animi deleniti modi nesciunt amet ea?
                </p>
            )}
        </section>
    )
}

export default Collapse
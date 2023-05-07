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
                <button onClick={handleToggle} className={Style.CollapseRetract}>{isCollapsed ? '-' : '+'}</button>
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
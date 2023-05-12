import Style from '../assets/scss/modules/Carrousel.module.scss'
import { useEffect, useRef } from 'react'

export default function Carrousel ({ images }) {
    const listOfImagesElement = images?.map((image) => (<li key={image} className={Style.ImageElement}><img src={image} alt="" /></li>))
    let elementVariable = useRef(null)
    let interval
    
    useEffect(() => {
        let sliderIndex = 0
        let autoSlide = () => {
            if (sliderIndex === (images?.length - 1)) {
                elementVariable.current.scrollLeft = 0
                sliderIndex = 0
            } else {
                elementVariable.current.scrollLeft += elementVariable.current.offsetWidth
                sliderIndex++
            }
        }

        let resetInterval = () => {
            clearInterval(interval)
            interval = setInterval(autoSlide, 3000)
        }

        resetInterval()
    })

    return (
        <section className={Style.Carrousel}>
            <ul ref={elementVariable} className={Style.ListOfImages}>
                {listOfImagesElement}
            </ul>
        </section>
    )
}
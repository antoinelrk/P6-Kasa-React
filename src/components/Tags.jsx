import Style from '../assets/scss/modules/Tags.module.scss'

export default function Tags ({tags}) {
    const tagsElement = tags?.map((tag) => (<li className={Style.Tag}>{tag}</li>))
    return (<ul className={Style.TagsList}>{tagsElement}</ul>)
}
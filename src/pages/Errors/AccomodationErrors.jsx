import { useEffect } from "react"

export default function AccomodationErrors ({error}) {
  useEffect(() => { 
    document.title = `Le bien est introuvable !`
  })

  return (
  <div className="errors-page">
      <div className="error-container">
        <h1>{error.status}</h1>
        <p>{error.data.message}</p>
      </div>
      <a href="/" className="return-to-home">Retourner sur la page d'accueil</a>
    </div>
  )
}
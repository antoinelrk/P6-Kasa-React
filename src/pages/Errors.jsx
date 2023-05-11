import { useParams, useRouteError } from "react-router-dom";

export default function Errors() {
  const error = useRouteError()

  return (
    <div className="errors-page">
      <div className="error-container">
        <h1>{error.status}</h1>
        {/* <p>{error.statusText}</p> */}
        <p>Oups ! La page que vous demandez n'existe pas</p>
      </div>
      <a href="/" className="return-to-home">Retourner sur la page d'accueil</a>
    </div>
  );
}
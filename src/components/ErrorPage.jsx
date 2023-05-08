import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError();

    return (
        <div className="errors-page">
            <div className="error-container">
                <h1>{error.status}</h1>
                <p>{getMessage(error)}</p>                
            </div>
                <a href="/" className="return-to-home">Retourner sur la page d'accueil</a>
        </div>
    )
    
}

const getMessage = (error) => {
    let result = ""

    switch (error.status) {
        case 404:
            result = `Oups ! La page que vous demandez n'existe pas !`
            break;
        default: 
    }

    return result
}

export default ErrorPage
export default function Errors() {
  return (
    <div className="errors-page">
      <div className="error-container">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas</p>
      </div>
      <a href="/" className="return-to-home">Retourner sur la page d'accueil</a>
    </div>
  );
}
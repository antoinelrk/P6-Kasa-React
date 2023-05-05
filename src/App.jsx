import Header from './components/Header.jsx';
import { RouterProvider } from 'react-router-dom';
import Router from './Router.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;

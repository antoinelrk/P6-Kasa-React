import Header from './components/Header.jsx';
import Main from './components/Main.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import routes from './Routes.js'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: routes
    }
])

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

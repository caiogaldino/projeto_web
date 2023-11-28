import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//páginas
import Home from "./routes/Home.jsx";
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import Reservas from './routes/Reservas.jsx';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reservas",
        element: <Reservas />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



import { BrowserRouter as Router} from 'react-router-dom';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/reservas" component={Reservas} />
      </Switch>
    </Router>
  );
};

export default Routes;
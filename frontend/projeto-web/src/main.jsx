import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

//páginas
import Home from "./routes/Home.jsx";
import Login from './routes/Login.jsx';
import Logout from './routes/Logout.jsx';
import Register from './routes/Register.jsx';
import Reservas from './routes/Reservas.jsx';
import Start160 from './routes/Start160.jsx';
import Titan160 from './routes/Titan160.jsx';
import Bros160 from './routes/Bros160.jsx';
import Fz15 from './routes/Fz15.jsx';
import Fz25 from './routes/Fz25.jsx';
import Factor150 from './routes/Factor150.jsx';


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
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reservas",
        element: <Reservas />,
      },
      {
        path: "/confirm",
        element: <Confirm />,
      },
      {
        path: "/details/1",
        element: <Start160 />,
      },
      {
        path: "/details/2",
        element: <Titan160 />,
      },
      {
        path: "/details/3",
        element: <Bros160 />,
      },
      {
        path: "/details/4",
        element: <Fz15 />,
      },
      {
        path: "/details/5",
        element: <Fz25 />,
      },
      {
        path: "/details/6",
        element: <Factor150 />,
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
import Confirm from './routes/Confirm.jsx';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
        {/* Add other routes as needed */}
      </Switch>
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
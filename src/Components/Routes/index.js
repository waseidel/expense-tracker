import { Route, Switch } from "react-router-dom";
import {
  About,
  Profile,
  Home,
  Dashboard,
  Error404,
  Login,
  Settings,
  Forgot,
} from "../../Pages";

const Routes = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      component: Home,
      place: "navigation",
    },
    {
      path: "/profile",
      exact: false,
      component: Profile,
      place: "profile",
    },
    {
      path: "/dashboard",
      exact: false,
      component: Dashboard,
      place: "navigation",
    },
    {
      path: "/login",
      exact: false,
      component: Login,
      place: undefined,
    },
    {
      path: "/about",
      exact: false,
      component: About,
      place: "navigation",
    },
    {
      path: "/settings",
      exact: false,
      component: Settings,
      place: "profile",
    },
    {
      path: "/forgot",
      exact: false,
      component: Forgot,
      place: undefined,
    },
    {
      path: "*",
      exact: false,
      component: Error404,
      place: undefined,
    },
  ];

  return (
    <div>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Routes;

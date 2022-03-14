import Route from "react-router-dom/es/Route";
import {Redirect} from "react-router-dom";
import Login from "../pages/Login";

/*
const PrivateRoute = (props) => {
  return(
    <Route exact={props.exact} path={props.path} component={props.component} />
  )
}

export default PrivateRoute
*/

/*const PrivateRoute = (props) => {
  return(
    <Route {...props} />
  )
}*/

//Simular Autenticación
let auth
auth = null
auth = true

const PrivateRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest}>
      {auth ? <Component /> : <Redirect to="/login" />}
    </Route>
  )
}

export default PrivateRoute

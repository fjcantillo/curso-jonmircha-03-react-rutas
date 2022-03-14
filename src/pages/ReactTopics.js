import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

const Topic = () => {
  let {topic} = useParams()

  return(
    <div>
      <h4>{topic}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiis culpa eius fugit optio repellat. Accusantium atque,
        aut dolorem eaque, excepturi nesciunt nisi non nulla reiciendis sit
        totam unde veniam voluptatibus!
      </p>
    </div>
  )
}

const ReactTopics = () => {
  let {path, url} = useRouteMatch()

  return(
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/state`}>State</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deserunt dicta dolorem ea eius et eveniet fugiat,
            illum minus non nostrum nulla odio officiis optio possimus quis
            quisquam sed similique.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  )
}

export default ReactTopics

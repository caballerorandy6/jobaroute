import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        dolor. Aspernatur nihil sint nemo architecto provident mollitia eum?
        Cumque iure ea doloribus veniam inventore quis aliquid quae eum.
        Pariatur, officiis!
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;

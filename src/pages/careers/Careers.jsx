import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={`${career.id}`} key={career.id}>
          <p>{career.title}</p>
          <p>{career.location}</p>
        </Link>
      ))}
    </div>
  );
};

//loader function
export const careersLoader = async () => {
  const data = await fetch(`http://localhost:4000/careers`);

  if (!data.ok) {
    throw Error(`Could not fetch the careers!`);
  }

  return data.json();
};

export default Careers;

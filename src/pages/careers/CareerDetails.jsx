import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab
          quidem aliquam voluptate consectetur! Et perspiciatis atque omnis, ab
          fugiat soluta eveniet quis adipisci magni obcaecati autem reiciendis
          laboriosam. Aliquid.
        </p>
      </div>
    </div>
  );
};

//loader function
export const careerDetailLoader = async ({ params }) => {
  //console.log(params);
  const { id } = params;
  const data = await fetch(`http://localhost:4000/careers/${id}`);

  if (!data.ok) {
    throw Error(`Could not find the career!`);
  }

  return data;
};

export default CareerDetails;

import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

/** DogDetails: shows info on single dog
 *
 * Props: 
 *  - dogInfo - arr of obj containing dog info
 *  
 */
function DogDetails({ dogInfo }) {
  const { name } = useParams();

  // TODO: use .find here, wont need to use [0]
  const dog = dogInfo.filter(d => (
    d.name.toLowerCase() === name
  ))[0];

  if (!dog) return <Redirect to="/dogs"/>
  
  const { age, src, facts } = dog;

  return (
    <div>
      <p>
        <img src={src} alt={`${src}`} />
        name: {name}
        age: {age}
        facts:
        {facts.map((f) => (
          <p>{f}</p>
        ))}
      </p>
      <br></br>
      <Link to="/dogs">
        <button>
          Back to All Dogs
        </button>
      </Link>
    </div>
  )
}

export default DogDetails;
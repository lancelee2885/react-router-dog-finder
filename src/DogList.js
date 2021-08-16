import React from "react";
import { Link } from "react-router-dom";

/** DogList: takes all dogs info as props
 *
 * Props: dogInfo - arr of obj containing dog info
 */
function DogList({ dogInfo }) {
  return (
    <div>
      {dogInfo.map((d) => (
        <p>
          <Link to={`/dogs/${d.name.toLowerCase()}`}><img src={d.src} alt={`${d.src}`} /></Link>
          name: {d.name}
          age: {d.age}
          facts:
          {d.facts.map((f) => (
            <p>{f}</p>
          ))}
        </p>
      ))}
    </div>
  );
}

export default DogList;

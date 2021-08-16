import React from "react";
import { Link } from "react-router-dom";

/** DogList: takes all dogs info as props
 *
 * Props: 
 *  - dogInfo - arr of obj containing dog info
 *  // TODO: show an example
 */
function DogList({ dogInfo }) {
  return (
    <div>
      {dogInfo.map((d) => (
        <p>
          <Link to={`/dogs/${d.name.toLowerCase()}`}><img src={d.src} alt={`${d.src}`} /></Link>
          name: {d.name}
        </p>
      ))}
    </div>
  );
}

export default DogList;

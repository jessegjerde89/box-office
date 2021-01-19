import React from "react";
import ActorCard from "./ActorCard";

import notFound from "../../images/notFound.jpeg";

function ActorGrid({ data }) {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : notFound}
        />
      ))}
    </div>
  );
}

export default ActorGrid;

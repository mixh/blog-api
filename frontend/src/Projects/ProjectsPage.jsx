import React from "react";
import Card from "./card";
import eventData from ".//DetailsData";

const ProjectPage = () => {
  const sortedEventData = [...eventData].sort((a, b) => b.date - a.date);

  return (
    <div className="flex flex-col min-h-screen bg-navy p-3">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {sortedEventData.map((event, index) => (
          <Card
            key={index}
            date={event.date}
            name={event.name}
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

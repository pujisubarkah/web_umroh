import React from "react";

const AwardsAndMentions = () => {
  // Data for awards and mentions
  const awardsData = [
    {
      year: "2022",
      awards: [
        {
          title: "Travel Agency of the Year",
          description: "Recognized for exceptional travel services and customer satisfaction."
        },
        {
          title: "Umrah Agency of the Year",
          description: "Awarded for outstanding Umrah travel arrangements and services."
        },
        {
          title: "Travel Agency",
          description: "Acknowledged for excellence in the travel industry."
        },
        {
          title: "Awarded Travel",
          description: "Honored for innovative travel solutions and services."
        },
        {
          title: "Top Visa Contributor",
          description: "Recognized for significant contributions to visa processing."
        }
      ],
    },
    {
      year: "2021",
      awards: [
        {
          title: "Best Travel Service",
          description: "Awarded for providing top-notch travel services."
        },
        {
          title: "Top Umrah Provider",
          description: "Recognized for being a leading provider of Umrah services."
        },
        {
          title: "Top Sales Agent",
          description: "Honored for exceptional sales performance in the travel sector."
        },
        {
          title: "Outstanding Travel Agency",
          description: "Acknowledged for exceptional performance in the travel sector."
        },
        {
          title: "Global Travel Excellence",
          description: "Honored for excellence in global travel services."
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-pink-500">AWARDS</h2>
          <h1 className="text-3xl font-bold mt-2">Awards and Mention</h1>
          <hr className="w-1/4 mx-auto my-4 border-gray-300" />
        </div>

        {/* Render Awards */}
        {awardsData.map((award, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Year Section */}
              <div className="md:w-1/4 bg-pink-600 text-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">{award.year}</h3>
                <ul className="list-disc pl-5">
                  {award.awards.map((item, idx) => (
                    <li key={idx}>{item.title}</li>
                  ))}
                </ul>
              </div>

              {/* Award Details */}
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {award.awards.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="mb-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Separator */}
            {index < awardsData.length - 1 && (
              <hr className="my-8 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAndMentions;
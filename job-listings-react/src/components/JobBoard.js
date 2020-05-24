import React from 'react';

const JobBoard = props => {
  const {
    id,
    company,
    logo,
    isNew,
    feature,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.job;

  const langAndTools = [];

  if (languages) {
    langAndTools.push(...languages);
  }

  if (tools) {
    langAndTools.push(...tools);
  }

  return (
    <div className="flex bg-white shadow-lg m-5 p-6 rounded-md border-2 border-transparent">
      <div>
        <img src={logo} alt={company} />
      </div>

      <div className="flex flex-col justify-between ml-6">
        <h3 className="font-bold">{company}</h3>
        <h2 className="font-bold text-lg tracking-wide">{position}</h2>
        <p>
          {postedAt} · {contract} · {location}
        </p>
      </div>

      <div className="flex items-center ml-auto">
        {langAndTools
          ? langAndTools.map(langAndTool => <span className="font-bold m-2 p-1 rounded">{langAndTool}</span>)
          : ''}
      </div>
    </div>
  );
};

export default JobBoard;

// {
//   "id": 1,
//   "company": "Photosnap",
//   "logo": "./images/photosnap.svg",
//   "isNew": true,
//   "featured": true,
//   "position": "Senior Frontend Developer",
//   "role": "Frontend",
//   "level": "Senior",
//   "postedAt": "1d ago",
//   "contract": "Full Time",
//   "location": "USA Only",
//   "languages": ["HTML", "CSS", "JavaScript"],
//   "tools": []
// }

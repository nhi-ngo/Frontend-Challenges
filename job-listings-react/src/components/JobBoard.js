import React from 'react';

const JobBoard = props => {
  const {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.job;

  const tags = [role, level];

  if (languages) {
    tags.push(...languages);
  }

  if (tools) {
    tags.push(...tools);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-lg my-16 mx-10 p-6 rounded-md ${featured &&
        'border-l-4 border-teal-600'} md:flex-row md:items-center md:-mb-8 `}
    >
      <div>
        <img className="w-16 h-16 -mt-16 md:mt-0 md:w-20 md:h-20" src={logo} alt={company} />
      </div>

      <div className="flex flex-col justify-between mt-4 md:ml-5">
        <h3 className="font-bold">
          {company}
          {isNew && <span className="text-white text-xs pt-2 px-3 py-1 rounded-full uppercase m-2">New!</span>}
          {featured && <span className="text-white text-xs pt-2 px-3 py-1 rounded-full uppercase">Featured</span>}
        </h3>
        <h2 className="font-bold text-lg tracking-wide my-3">{position}</h2>
        <p>
          {postedAt} &bull; {contract} &bull; {location}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-start mt-4 -mb-4 pt-5 border-t border-gray-400 md:ml-auto md:border-t-0 md:mt-0 md:pt-0">
        {tags ? tags.map(tag => <span className="font-bold text-md mr-4 mb-4 p-2 rounded">{tag}</span>) : ''}
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

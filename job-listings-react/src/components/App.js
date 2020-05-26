import React, { useState, useEffect } from 'react';
import data from '../assets/data.json';
import JobBoard from './JobBoard';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }

    if (tools) {
      tags.push(...tools);
    }

    return filters.every(filter => tags.includes(filter));
  };

  const onTagsClick = tag => {
    // avoid re-adding the tag
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const onFilterClick = passedFilter => {
    setFilters(filters.filter(f => f !== passedFilter));
  };

  const onClearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
      <header header className="-mt-16">
        <img className="w-full" src="images/bg-header-desktop.svg" alt="bg-img" />
      </header>

      <div className="container m-auto">
        {/* Show the span if there is filters */}
        {filters.length > 0 && (
          <div className="flex justify-between bg-white shadow-lg border-teal-700 rounded p-6 -mt-10 mx-10 relative z-10">
            <div>
              {filters.map(filter => (
                <span
                  onClick={() => onFilterClick(filter)}
                  className="cursor-pointer font-bold text-md p-2 rounded mr-3"
                >
                  {filter}
                  <span className="text-teal-700 ml-1 mb"> &#10008; </span>
                </span>
              ))}
            </div>

            <button onClick={onClearFilters} className="cursor-pointer bg-transparent text-clear font-bold">
              Clear
            </button>
          </div>
        )}

        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map(job => <JobBoard job={job} key={job.id} onTagsClick={onTagsClick} />)
        )}
      </div>
    </div>
  );
}

export default App;

// TODO
// 1. Study the design and JSON ✅
// 2. Create the JobBoard component (JBC) ✅
// 3. Get the data from the JSON ✅
// 4. Pass down the state to JBC ✅
// 5a. Style it desktop ✅
// 5b. Style it mobile ✅
// 6. Filter component ✅
// 7. Filter the data ✅

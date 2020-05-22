import React, { useState, useEffect } from 'react';
import data from '../assets/data.json';
import JobBoard from './JobBoard';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  console.log(jobs);

  return (
    <div>
      <h1 className="text-4xl">Hello there!</h1>
      {jobs.length === 0 ? <p>Jobs are fetching...</p> : jobs.map(job => <JobBoard job={job} key={job.id} />)}
    </div>
  );
}

export default App;

// TODO
// 1. Study the design and JSON ✅
// 2. Create the JobBoard component (JBC) ✅
// 3. Get the data from the JSON ✅
// 4. Pass down the state to JBC ✅
// 5. Style it
// 6. Filter component
// 7. Filter the data

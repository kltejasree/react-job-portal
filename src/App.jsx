
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import MainLayOut from './components/layouts/MainLayOut';
import HomePage from './components/pages/HomePage'
import AddPage from './components/pages/AddPage'
import JobsPage from './components/pages/JobsPage'
import NotFound from './components/pages/NotFound'
import JobPage, { jobLoader } from './components/pages/JobPage'
import EditJobPage from './components/pages/EditJobPage';


const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //Delete Job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="addjob" element={<AddPage />} />
        <Route
          path="edit-job/:id"
          element={<EditJobPage updateJobSubmit = {updateJob}/>}
          loader={jobLoader}
        />

        <Route
          path="jobs/:id"
          element={<JobPage deleteJob={deleteJob}/>}
          loader={jobLoader}
        />
        <Route path="add-job" element = {<AddPage addJobSubmit={addJob}/>} />
        <Route path="*" element={<NotFound />} />
        
      </Route>
    )
  );
    return <RouterProvider router={router} />;
};

export default App;


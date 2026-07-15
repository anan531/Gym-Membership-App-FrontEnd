import { Routes, Route, Link } from "react-router-dom";

import AddMember from "./components/AddMember";
import AddTrainer from "./components/AddTrainer";
import AddWorkout from "./components/AddWorkout";
import ViewMembers from "./components/ViewMembers";
import ViewTrainers from "./components/ViewTrainers";
import ViewWorkouts from "./components/ViewWorkouts";

function App() {

  return (

    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

          <Link className="navbar-brand" to="/">
            Gym Management
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add-member">Add Member</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add-workout">Add Workout</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add-trainer">Add Trainer</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view-members">View Members</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view-workouts">View Workouts</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view-trainers">View Trainers</Link>
              </li>

            </ul>

          </div>

        </div>

      </nav>

      <Routes>

        <Route path="/" element={
          <div className="container mt-5 text-center">
            <h1>Gym Membership Management System</h1>
            <p>React Frontend</p>
          </div>
        }/>

        <Route path="/add-member" element={<AddMember/>}/>
        <Route path="/add-workout" element={<AddWorkout/>}/>
        <Route path="/add-trainer" element={<AddTrainer/>}/>

        <Route path="/view-members" element={<ViewMembers/>}/>
        <Route path="/view-workouts" element={<ViewWorkouts/>}/>
        <Route path="/view-trainers" element={<ViewTrainers/>}/>

      </Routes>

    </>

  )

}

export default App;
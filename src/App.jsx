import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import AddMember from "./components/AddMember";
import AddTrainer from "./components/AddTrainer";
import AddWorkout from "./components/AddWorkout";
import ViewMembers from "./components/ViewMembers";
import ViewTrainers from "./components/ViewTrainers";
import ViewWorkouts from "./components/ViewWorkouts";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>

        <Route
          path="/"
          element={
            <div className="container mt-5 text-center">
              <h2>Gym Membership Management System</h2>
              <p>Welcome to the Gym Management Frontend</p>
            </div>
          }
        />

        <Route path="/add-member" element={<AddMember />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/add-trainer" element={<AddTrainer />} />

        <Route path="/view-members" element={<ViewMembers />} />
        <Route path="/view-workouts" element={<ViewWorkouts />} />
        <Route path="/view-trainers" element={<ViewTrainers />} />

      </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
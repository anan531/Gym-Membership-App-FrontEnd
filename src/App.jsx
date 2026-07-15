import "./App.css";

import Home from "./components/Home";
import AddMember from "./components/AddMember";
import AddWorkout from "./components/AddWorkout";
import AddTrainer from "./components/AddTrainer";
import ViewMembers from "./components/ViewMembers";
import ViewWorkouts from "./components/ViewWorkouts";
import ViewTrainers from "./components/ViewTrainers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Add */}
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/addworkout" element={<AddWorkout />} />
        <Route path="/addtrainer" element={<AddTrainer />} />

        {/* View */}
        <Route path="/viewmember" element={<ViewMembers />} />
        <Route path="/viewworkout" element={<ViewWorkouts />} />
        <Route path="/viewtrainer" element={<ViewTrainers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
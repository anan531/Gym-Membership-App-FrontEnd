import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import AddMember from './components/AddMember'
import AddWorkout from './components/AddWorkout'
import AddTrainer from './components/AddTrainer'
import ViewMembers from './components/ViewMembers'
import ViewWorkouts from './components/ViewWorkouts'
import ViewTrainers from './components/ViewTrainers'

function App() {
  return (
    <BrowserRouter>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add-member" element={<AddMember />} />
        <Route path="/view-members" element={<ViewMembers />} />

        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/view-workouts" element={<ViewWorkouts />} />

        <Route path="/add-trainer" element={<AddTrainer />} />
        <Route path="/view-trainers" element={<ViewTrainers />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
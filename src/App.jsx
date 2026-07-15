import './App.css'

import Navigation from './components/Navigation'
import Home from './components/Home'
import AddMember from './components/AddMember'
import AddWorkout from './components/AddWorkout'
import AddTrainer from './components/AddTrainer'
import ViewMembers from './components/ViewMembers'
import ViewWorkouts from './components/ViewWorkouts'
import ViewTrainers from './components/ViewTrainers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/addworkout" element={<AddWorkout />} />
        <Route path="/addtrainer" element={<AddTrainer />} />
        <Route path="/viewmember" element={<ViewMembers />} />
        <Route path="/viewworkout" element={<ViewWorkouts />} />
        <Route path="/viewtrainer" element={<ViewTrainers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
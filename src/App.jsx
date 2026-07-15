import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import AddMember from './components/AddMember'
import ViewMember from './components/ViewMember'
import AddWorkout from './components/AddWorkout'
import ViewWorkout from './components/ViewWorkout'
import AddTrainer from './components/AddTrainer'
import ViewTrainer from './components/ViewTrainer'

function App() {
  return (
    <BrowserRouter>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<AddMember />} />
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/viewmember" element={<ViewMember />} />
        <Route path="/addworkout" element={<AddWorkout />} />
        <Route path="/viewworkout" element={<ViewWorkout />} />
        <Route path="/addtrainer" element={<AddTrainer />} />
        <Route path="/viewtrainer" element={<ViewTrainer />} />
      </Routes>

    </BrowserRouter>
  )
}


export default App
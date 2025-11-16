import './App.css'
import React from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import { RestaurantProvider } from './RestaurantContext/restaurantContext.jsx';

function App() {

  return (
    <RestaurantProvider>
      <AppRoutes />
    </RestaurantProvider>
  )
}

export default App

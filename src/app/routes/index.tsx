import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homePage/HomePage"




export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/home-page' element={<HomePage />}/>
      <Route path="*" element={<Navigate to="/home-page" />} />
    </Routes>
  )
}
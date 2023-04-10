import React from 'react'
import {Route, Routes } from "react-router-native";
import Home from '../Pages/Home';
import Anime from '../Pages/descriptionAnime/Anime'

function LRouter() {
  return (
    <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="/:_id" element={<Anime />} />
    </Routes>
  )
}

export default LRouter
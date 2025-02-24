"use client";
import React from "react";
import { BackgroundLines } from "./components/ui/background-lines";
import { FlipWords } from "./components/ui/flip-words";
import {CardHover} from "./components/CardHover";
//import StickyScrollcomp from "./components/StickyScrollcomp";
import Navbar from "./components/Navbar";
import ImageGenerate from "./components/ImageGenerate";
import Bgbox from "./components/Bgbox";
import ProtectedRoute from "./components/ProtectedRoutes";
//import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
//import FavoriteSong from "@/components/FavoriteSong";

import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import App from "./components/ImageGenerate";
import Footer from "./components/ImageGenerate";
import Landing from "./Landing/page";



const Page = () => {
  // const res = axios.get("http://localhost:5000/Landing")
  // .then((res)=>res.json)
  // .then(res.status == '200'?console.log('Success'):console.log('Failed'))
  return (
    <ProtectedRoute>
      <Landing/>
    </ProtectedRoute>
  );
};

export default Page;
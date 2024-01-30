import React from "react"
import { Outlet } from "react-router-dom"
import Experience from "../Experiences/Experience"
import "../App.scss"
import { Canvas } from "@react-three/fiber"
import Nav from "../UI/Header/Nav"
import Footer from "../UI/Footer/Footer"
import LightSource from "../Experiences/LightSource"
import { Preload } from "@react-three/drei"
import SupportUkraine from "../UI/SupportUkraine/SupportUkraine"

const Layout = () => {
	return (
		<>
			<Nav />
			<Outlet />
			<div id='canvas'>
				<Canvas>
					<LightSource />
					<Experience />
					<Preload all />
				</Canvas>
			</div>
			<Footer />
			<SupportUkraine />
		</>
	)
}

export default Layout

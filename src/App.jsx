import { useEffect } from "react"
import Experience from "./Experiences/Experience"
import "./App.scss"
import { Canvas } from "@react-three/fiber"

import Nav from "./UI/Header/Nav"
import Footer from "./UI/Footer/Footer"
import LightSource from "./Experiences/LightSource"
import Home from "./UI/Home"
import Cursor from "./UI/Cursor"
import { Preload } from "@react-three/drei"
import Sno from "./routes/Sno"
import Cinema from "./routes/Cinema"
import Nfe from "./routes/Nfe"
// import { Route, Routes, BrowserRouter } from "react-router-dom"
import SupportUkraine from "./UI/SupportUkraine/SupportUkraine"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const scrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
}

const App = () => {
	// scrollToTop()
	// const location = useLocation()

	const imageDetails = {
		width: 524,
		height: 650,
	}

	return (
		<>
			{/* <Cursor /> */}
			{/* <Leva collapsed /> */}
			<Nav />
			<AnimatePresence
				// initial={false}
				mode='wait'
			>
				<Routes location={location} key={location.pathname}>
					a{/* <Route path='/' element={<Layout />} key={location.pathname}> */}
					{/* <Route path='/' element={<Layout />} key={location.pathname} /> */}
					<Route
						exact
						path='/'
						element={<Home imageDetails={imageDetails} />}
					/>
					<Route
						path='/cinema'
						element={<Cinema imageDetails={imageDetails} />}
						key='cinema'
					/>
					<Route path='/sno' element={<Sno />} key='sno' />
					<Route path='/nfe' element={<Nfe />} key='nfe' />
					{/* <Route path='/' element={<Home />} />
					<Route path='/cinema' element={<Cinema />} />
					<Route path='/sno' element={<Sno />} />
					<Route path='/nfe' element={<Nfe />} /> */}
					{/* </Route> */}
				</Routes>
			</AnimatePresence>
			<div id='canvas'>
				<Canvas>
					<LightSource />
					<Experience />
					<Preload all />
				</Canvas>
			</div>
			<Footer />
			<SupportUkraine />

			{/* <Social /> */}
		</>
	)
}

export default App

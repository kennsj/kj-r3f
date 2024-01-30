import React from "react"
import Intro from "./Intro/Intro"
import WorkList from "./WorkList/WorkList"
import Experiences from "./Experiences/Experiences"
import Services from "./Services/Services"
import Various from "./Various/Various"
import Header from "./Header/Header"
import PageTransition from "./PageTransition"
import { easeInOut, motion } from "framer-motion"
import { Link } from "react-router-dom"

const transition = {
	duration: 0.6,
	ease: [0.6, 0.01, -0.05, 0.9],
}

const Home = ({ imageDetails }) => {
	// const pageMotion = {
	// 	initial: { opacity: 0, x: 0 },
	// 	animate: {
	// 		opacity: 1,
	// 		x: 100,
	// 		// transition: transition,
	// 		transition: { duration: 0.6, ease: easeInOut },
	// 	},
	// 	exit: {
	// 		// opacity: 0,
	// 		x: 50,
	// 		// transition: transition,
	// 		transition: { duration: 0.6, ease: easeInOut },
	// 		// transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] },
	// 	},
	// }
	// console.log(imageDetails)
	return (
		<>
			<motion.main
				initial={false}
				// animate='animate'
				// exit='exit'
				// variants={pageMotion}
			>
				<Header />

				<Intro />
				<WorkList imageDetails={imageDetails} />
				<Experiences />
				<Various />
				<Services />
			</motion.main>
		</>
	)
}

export default PageTransition(Home)

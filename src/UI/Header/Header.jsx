import styles from "./Header.module.scss"

import Logo from "../../assets/logo/kj-logo.svg"
// import Logo from "../../assets/logo/kj-inverted.svg"
import { useAnimation, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const Header = () => {
	const scrollHandle = (e) => {
		console.log("hi")
	}

	useEffect(() => {
		const scroll = (e) => {
			console.log("hi")
		}
	}, [])

	return (
		<header onScroll={scrollHandle} className={styles.home__header}>
			{/* <img src={Logo} /> */}
			<div className={styles.intro}>
				{/* <h2 className={styles.header__title}>Good morning!</h2> */}
				{/* <h3 className={styles.header__subtitle}>
						I am Kenneth, a multidisciplinary designer and developer with a
						passion for thought-provoking concepts and products which focuses on
						user-engagements.
					</h3> */}

				<img src={Logo} />
				<h1>
					Multidisciplinary <br />
					designer and <br />
					developer
				</h1>
				{/* <h2>
						<span className={styles.highlighted}>Multidisciplinary</span>{" "}
						designer & developer with a passion for creating exciting{" "}
						<span className={styles.highlighted}>concepts</span> &{" "}
						<span className={styles.highlighted}>products</span> which focuses
						on user-engagements.
					</h2> */}
			</div>
		</header>
	)
}

export default Header

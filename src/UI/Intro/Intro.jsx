import React, { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import SplitText from "../SplitText/SplitText"
import styles from "./Intro.module.scss"
import { gsap } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"

const Intro = () => {
	// useEffect(() => {
	// 	const textSplit = new SplitType(phrase) // Use SplitType
	// 	gsap.from(textSplit.chars, {
	// 		opacity: 0,
	// 		y: 20,
	// 		duration: 0.5,
	// 		stagger: {
	// 			amount: 0.1,
	// 		},
	// 	})
	// }, [])
	// const text = new SplitType(phrase, { types: "chars" })
	// const chars = text.chars
	// console.log(chars)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const split = new SplitType("#target", { type: "chars" }) // Use SplitType

		const anim = gsap.to(split.chars, {
			delay: 1,
			color: "#ccb2b2", // Change color to white
			stagger: 0.5,
			ease: "none",
			scrollTrigger: {
				trigger: "section",
				start: "top 90%",
				end: "bottom 80%",
				scrub: true,
				// markers: true,
			},
		})
	}, [])

	return (
		<section className={styles.intro__section}>
			<h4>About me</h4>
			{/* <h2>
				<span className={styles.highlighted}>Multidisciplinary</span> designer &
				developer with a passion for creating exciting{" "}
				<span className={styles.highlighted}>concepts</span> &{" "}
				<span className={styles.highlighted}>products</span> which focuses on
				user-engagements.
			</h2> */}
			{/* <h2>
				<SplitText
					text='A multidisciplinary designer with a passion for creating exciting
				concepts and products which focuses on engaging the users.'
					role={"heading"}
				/>
			</h2> */}
			<div>
				<h2 id='target'>
					Multidisciplinary designer with a passion for creating exciting
					concepts and products which focuses on engaging the users
				</h2>
			</div>
		</section>
	)
}

export default Intro

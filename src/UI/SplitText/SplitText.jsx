import React, { useEffect, useRef } from "react"
import { motion, inView, useInView, useAnimation } from "framer-motion"
import styles from "./SplitText.module.scss"

const SplitText = ({ text, role }) => {
	const controls = useAnimation()
	const ref = useRef()
	const isInView = useInView(ref, { once: false })

	useEffect(() => {
		if (isInView) {
			controls.start("visible")
		}
		if (!isInView) {
			controls.start("hidden")
		}
	}, [controls, isInView])

	const wordAnimation = {
		hidden: {},
		visible: {},
	}

	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: `0.25em`,
		},
		visible: {
			opacity: 1,
			y: `0em`,
			transition: {
				duration: 1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	}

	return (
		<span aria-label={text} role='heading'>
			{text.split("").map((word, index) => {
				return (
					<span
						ref={ref}
						aria-hidden='true'
						key={index}
						initial='hidden'
						animate={controls}
						variants={wordAnimation}
						transition={{
							delayChildren: index * 0.25,
							staggerChildren: 0.05,
						}}
					>
						{word.split("").map((character, index) => {
							return (
								<span
									aria-hidden='true'
									key={index}
									variants={characterAnimation}
								>
									{character}
								</span>
							)
						})}
					</span>
				)
			})}
		</span>
	)

	// console.log(tag)

	// const ref = useRef()
	// const isInView = useInView(ref, { once: false })
	// const controls = useAnimation()

	// console.log(isInView)

	// const letterReveal = {
	// 	hidden: {
	// 		opacity: 0,
	// 		y: "-50px",
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		y: "0",
	// 		transition: {
	// 			duration: 1,
	// 			ease: [0.2, 0.65, 0.3, 0.9],
	// 		},
	// 	},
	// }

	// const letterAnimations = {
	// 	hidden: {
	// 		opacity: 0,
	// 		y: `100px`,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		y: `0em`,
	// 		transition: {
	// 			duration: 1,
	// 			ease: [0.2, 0.65, 0.3, 0.9],
	// 			// staggerChildren: 0.05,
	// 		},
	// 	},
	// }

	// const containerVariants = {
	// 	hidden: {
	// 		opacity: 0,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		transition: {
	// 			delayChildren: 0, // this will set a delay before the children start animating
	// 			staggerChildren: 0.3, // this will set the time inbetween children animation
	// 		},
	// 	},
	// }

	// useEffect(() => {
	// 	isInView ? controls.start("visible") : controls.start("hidden")
	// })

	// return (
	// 	<>
	// 		<motion.span
	// 			variants={containerVariants}
	// 			initial='hidden'
	// 			animate='visible'
	// 			aria-label={text}
	// 		>
	// 			{text.split(" ").map((char, index) => {
	// 				return (
	// 					<span aria-hidden='true' key={char + "-" + index}>
	// 						<motion.span
	// 							ref={ref}
	// 							role={role}
	// 							// initial={{ hidden }}
	// 							animate={controls}
	// 							variants={letterAnimations}
	// 							transition={{
	// 								// delayChildren: index * 2500,
	// 								staggerChildren: index,
	// 							}}
	// 						>
	// 							{char}&nbsp;
	// 						</motion.span>
	// 					</span>
	// 				)
	// 			})}
	// 		</motion.span>
	// 	</>
	// )
}

export default SplitText

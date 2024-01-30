import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import styles from "./Work.module.scss"
import { Link } from "react-router-dom"

const transition = {
	duration: 0.6,
	ease: [0.6, 0.01, -0.05, 0.9],
}

const animate = {}

const Work = ({ href, subtitle, title, tags, info, image, imageDetails }) => {
	const workRef = useRef(null)
	const isInView = useInView(workRef)

	return (
		<div
			className={styles.work__container}
			ref={workRef}
			style={{
				transform: isInView ? "none" : "translateY(20px) scale(1.0)",
				opacity: isInView ? 1 : 0.2,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
			}}
		>
			{/* TO DO
				Center image on click to line up with transition animation */}
			<Link to={href}>
				<motion.div
					initial={false}
					exit={{ opacity: 0 }}
					// transition={transition}
					className={styles.card}
				>
					<div className={styles.card__bottom}>
						<span>{title}</span>
						<ul className={styles.info__tags}>{tags}</ul>
					</div>
					<span className={styles.card__explore}>
						{/* <span>{info}</span> */}
					</span>
				</motion.div>
				<motion.div
					initial={{
						width: imageDetails.width,
						height: imageDetails.height,
					}}
					className={styles.img__container}
				>
					<img src={image} />
					<motion.div
						style={{
							transform: isInView ? "none" : "translateY(-100%) scale(1.0)",
							transition,
						}}
						// initial={{ scaleY: 1 }}
						animate={isInView ? "scaleY: 0" : ""}
						className={styles.image__overlay}
					></motion.div>
				</motion.div>
			</Link>
		</div>
	)
}

export default Work

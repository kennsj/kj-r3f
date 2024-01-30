import { useEffect } from "react"
import styles from "./WorkPage.module.scss"
import PageTransition from "../UI/PageTransition"
import { useLocation } from "react-router-dom"
import { easeInOut, motion } from "framer-motion"

// const transition = {
// 	duration: 0.6,
// 	ease: [0.6, 0.01, -0.05, 0.9],
// }

const scrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
}

const workImages = [
	"./img/work-preview-cinema_small.jpg",
	"./img/work-preview-cinema_wide.jpg",
	"./img/work-preview-snø_wide.jpg",
	"./img/work-preview-nfe_wide.jpg",
	"./img/work-preview-y4b_wide.jpg",
]

const transition = {
	duration: 1.4,
	ease: [0.6, 0.01, -0.5, 0.9],
}

const WorkPage = ({
	subtitle,
	title,
	description,
	yearCreated,
	creators,
	tools,
	url,
	imageDetails,
}) => {
	scrollToTop()

	console.log(imageDetails)

	return (
		<>
			<main>
				<header className={styles.work__header}>
					<motion.div
						initial={{ opacity: 0 }}
						className={styles.heading__container}
					>
						<h4>{subtitle}</h4>
						<h1 className={styles.highlighted}>{title}</h1>
					</motion.div>
				</header>

				<section className={styles.work__section}>
					<motion.div
						className={styles.image__container}
						initial={{
							width: "100%",
							width: imageDetails.width,
							height: imageDetails.height,
						}}
						// initial={{ scale: 1 }}
						animate={{
							// y: 0,
							width: "100%",
							transition: { ...transition },
						}}
					>
						{/* <motion.img
							// initial={{ scale: 1 }}
							initial={{
								width: imageDetails.width,
								height: imageDetails.height,
							}}
							animate={{
								y: 0,
								width: "100%",
								transition: { delay: 0.2, ...transition },
							}}
							src={workImages[0]}
						/> */}
					</motion.div>
					<div className={styles.project__info}>
						<div className={styles.project__when}>
							<h4 className={styles.highlighted}>When</h4>
							<span>{yearCreated}</span>
						</div>
						<div className={styles.project__who}>
							<h4 className={styles.highlighted}>By</h4>
							{creators}
						</div>
						<div className={styles.project__tools}>
							<h4 className={styles.highlighted}>Tools</h4>
							{tools}
						</div>
					</div>
					<p>{description}</p>
					{/* {isImage ? (
							<img src={props.url} />
						) : (
							<video>
								<source src={props.url} type='video/mp4' />
							</video>
						)} */}
				</section>
			</main>
		</>
	)
}

export default WorkPage

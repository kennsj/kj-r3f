import { motion } from "framer-motion"

const transition = {
	duration: 1.4,
	ease: [0.22, 1, 0.36, 1],
}

const PageTransition = (OgComponent) => {
	return ({ imageDetails }) => (
		<>
			<OgComponent imageDetails={imageDetails} />
			<motion.div
				className='slide-in'
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ delay: 0, ...transition }}
			></motion.div>
			<motion.div
				className='slide-out'
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ delay: 0, ...transition }}
			></motion.div>
		</>
	)
}

export default PageTransition

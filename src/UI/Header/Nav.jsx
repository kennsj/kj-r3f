import { useEffect, useRef, useState } from "react"
import Logo from "../../assets/logo/kj-logo.svg"
import styles from "./Nav.module.scss"
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion"
import { Link } from "react-router-dom"

const Nav = () => {
	let refMenu = useRef()
	let { scrollY } = useScroll()

	const [smallerNav, setSmallerNav] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		const prev = scrollY.getPrevious()

		if (latest > prev) {
			setSmallerNav(true)
		} else {
			setSmallerNav(false)
		}
	})

	const navVariant = {
		scrollDown: { height: "70px" },
		scrollUp: { height: "120px" },
	}

	const navLogoVariant = {
		scrollDown: { width: "1.5rem" },
		scrollUp: { width: "2rem" },
	}

	const navMenuVariant = {
		scrollDown: { opacity: 0 },
		scrollUp: { opacity: 1 },
	}

	return (
		<motion.nav
			variants={navVariant}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			animate={smallerNav ? "scrollDown" : "scrollUp"}
		>
			<div className={styles.nav__container}>
				<Link to='/'>
					<motion.img
						variants={navLogoVariant}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						animate={smallerNav ? "scrollDown" : "scrollUp"}
						src={Logo}
					/>
				</Link>
				<motion.div
					variants={navMenuVariant}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					animate={smallerNav ? "scrollDown" : "scrollUp"}
					className={styles.menu}
				>
					<span>
						<a href='#'>About</a>
					</span>
					<span>
						<a href='#'>Work</a>
					</span>
					<span>
						<a href='#'>Contact</a>
					</span>
				</motion.div>
			</div>
		</motion.nav>
	)
}

export default Nav

import React from "react"
import styles from "./Experiences.module.scss"
import { useInView } from "react-intersection-observer"

const Experiences = () => {
	const { ref, inView } = useInView({ triggerOnce: true })

	return (
		<section className={styles.experience__section} ref={ref}>
			{/* {(inView = html.style.mixBlend)} */}
			<h4>Work experience</h4>
			<div className={styles.experience__list}>
				<div className={styles.experience__info}>
					<span>Bodø, Norway</span>
					<h3>Dialog eXe</h3>
					<span>2019 - 2020</span>
				</div>
				<div>
					<p>
						Worked as a web designer and front-end developer designing and
						developing websites for their customers
					</p>
				</div>
			</div>

			<div className={styles.experience__list}>
				<div className={styles.experience__info}>
					<span>Oslo, Norway</span>
					<h3>Unfold</h3>
					<span>2018</span>
				</div>
				<div>
					<p>
						Internship for Unfold working on creating concepts for SNØ Oslo, the
						world's most spectacular indoor arena for snow experiences
					</p>
				</div>
			</div>

			<div className={styles.experience__list}>
				<div className={styles.experience__info}>
					<span>Oslo, Norway</span>
					<h3>Trigger</h3>
					<span>2016</span>
				</div>
				<div>
					<p>
						Working as an intern developing a concept and UX/UI for a social
						platform created to be used by creative people
					</p>
				</div>
			</div>
		</section>
	)
}

export default Experiences

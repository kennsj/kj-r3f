import React from "react"
import styles from "./Various.module.scss"

const Various = () => {
	return (
		<section className={styles.various__section}>
			<h4>Various works</h4>
			<div className={styles.various__list}>
				<h3>Lofoten Food Festival</h3>
				<p>Typographic poster</p>
			</div>
			<div className={styles.various__list}>
				<h3>Personal branding</h3>
				<p>Branding</p>
			</div>
			<div className={styles.various__list}>
				<h3>Platform game</h3>
				<p>Game design</p>
			</div>
		</section>
	)
}

export default Various

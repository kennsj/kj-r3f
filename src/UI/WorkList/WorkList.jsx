import React from "react"
import styles from "./WorkList.module.scss"
import Work from "../Work/Work"
const workImages = [
	"./img/work-preview-cinema_wide.jpg",
	"./img/work-preview-snø_wide.jpg",
	"./img/work-preview-nfe_wide.jpg",
	"./img/work-preview-y4b_wide.jpg",
]

const WorkList = ({ imageDetails }) => {
	console.log(imageDetails)
	return (
		<>
			<section className={styles.work__section}>
				<Work
					key='cinema'
					href='cinema'
					subtitle='UX / UI'
					title='Cinema / Theatre'
					tags={["UX", "UI"]}
					info='Design concept to further develope and improve usability for a CMS used by cinema and theatre clients'
					image={workImages[0]}
					imageDetails={imageDetails}
				/>
				<Work
					key='sno'
					href='sno'
					subtitle='VR / Concept'
					title='SNØ Oslo'
					info='Designing an interactive portal which works as an access point to SNØ Oslo, a year-round arena for snow experiences'
					tags={["VR", "Unreal Engine", "Concept"]}
					image={workImages[1]}
					imageDetails={imageDetails}
				></Work>
				<Work
					key='nfe'
					href='nfe'
					subtitle='3D / UI'
					title='Norwegian Folklore'
					tags={["3D", "UI"]}
					info='Building an interactive experience to retell old folklores on a modern, digital platform'
					image={workImages[2]}
					imageDetails={imageDetails}
				/>
			</section>
		</>
	)
}

export default WorkList

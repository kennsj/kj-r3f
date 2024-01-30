import WorkPage from "./WorkPage"
import PageTransition from "../UI/PageTransition"
// import image from "./img/work-preview-folkeeventyr.png"

const Nfe = ({ imageDetails }) => {
	return (
		<>
			<WorkPage
				subtitle={"UX / UI"}
				title={"Norwegian Folklore"}
				description={
					"Building an interactive experience to retell old folklores on a modern, digital platform"
				}
				yearCreated={"2016"}
				creators={["Kenneth Jørgensen", "Robin Ingebrigtsen"]}
				tools={["UX / UI", "Three.js"]}
				// url={image}
				imageDetails={imageDetails}
			/>
			{/*
			</header>
			<main className={styles.work__main}>
				<img src='./img/work-preview-folkeeventyr.png' alt='' />
			</main> */}
		</>
	)
}

export default PageTransition(Nfe)

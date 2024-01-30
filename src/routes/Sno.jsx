import WorkPage from "./WorkPage"
import video from "../../public/video/sno-vr.mp4"
import PageTransition from "../UI/PageTransition"

const Sno = ({ imageDetails }) => {
	return (
		<>
			<WorkPage
				subtitle={"VR / Experience"}
				title={"SNØ  Oslo"}
				description={
					"Building an interactive portal for visitors to transcend through."
				}
				yearCreated={"2018"}
				creators={["Kenneth Jørgensen", "Robin Ingebrigtsen"]}
				tools={["Concept", "VR Development", "Unreal Engine"]}
				url={video}
				imageDetails={imageDetails}
			/>

			{/* <main className={styles.work__main}>
					<video loop={true} controls>
						<source src='./video/sno-vr.mp4' type='video/mp4' />
					</video>
				</main> */}
		</>
	)
}

// export default Sno
export default PageTransition(Sno)

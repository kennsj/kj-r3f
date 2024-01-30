import WorkPage from "./WorkPage"
import PageTransition from "../UI/PageTransition"

const workImages = [
	"./img/work-preview-cinema_wide.jpg",
	"./img/work-preview-snø_wide.jpg",
	"./img/work-preview-nfe_wide.jpg",
	"./img/work-preview-y4b_wide.jpg",
]

const Cinema = ({ imageDetails }) => {
	return (
		<>
			<WorkPage
				subtitle={"UX / UI"}
				title={"Cinema design"}
				description={
					"Design concept to further develop and improve usability for a CMS used by cinema and theatre clients"
				}
				yearCreated={"2019"}
				creators={["Kenneth Jørgensen"]}
				tools={["UX / UI"]}
				url={workImages[0]}
				imageDetails={imageDetails}
			/>
			{/* <main className={styles.work__main}>
				<img src='./img/work-preview-cinema_wide.jpg' alt='' />
			</main> */}
		</>
	)
}

// export default Cinema
export default PageTransition(Cinema)

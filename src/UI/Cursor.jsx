import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
	return (
		<>
			<AnimatedCursor
				innerSize={0}
				innerScale={0.8}
				outerSize={40}
				outerScale={1.4}
				outerAlpha={0.5}
				hasBlendMode={true}
				showSystemCursor={true}
				color='255,  255 ,  255'
				outerStyle={{
					border: "1 solid #fff",
				}}
				innerStyle={{
					width: "0",
					height: "0",
					backgroundColor: "#fff",
				}}
				// clickables={["a"]}
			/>
		</>
	)
}

export default Cursor

import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>
)

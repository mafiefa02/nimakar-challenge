import { Route, Routes } from "react-router";
import { Home } from "./views";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
		</Routes>
	);
};

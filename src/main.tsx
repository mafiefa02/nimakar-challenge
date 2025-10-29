import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { RouterProvider } from "react-router/dom";
import { QueryProvider } from "./contexts/providers/query-provider";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NuqsAdapter>
			<QueryProvider>
				<RouterProvider router={router} />
			</QueryProvider>
		</NuqsAdapter>
	</StrictMode>,
);

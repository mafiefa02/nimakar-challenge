import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { setDefaultOptions } from "date-fns";
import { id } from "date-fns/locale";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "./components/shadcn/sonner";
import { QueryProvider } from "./contexts/providers/query-provider";
import { router } from "./router";

setDefaultOptions({ locale: id });

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NuqsAdapter>
			<QueryProvider>
				<RouterProvider router={router} />
				<Toaster
					richColors
					position="bottom-left"
				/>
			</QueryProvider>
		</NuqsAdapter>
	</StrictMode>,
);

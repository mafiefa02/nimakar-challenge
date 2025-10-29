import {
	QueryClient,
	QueryClientProvider,
	type QueryClientProviderProps,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryProvider = ({
	children,
}: Omit<QueryClientProviderProps, "client">) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

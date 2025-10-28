import type { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router";
import { emailConfirmationPageLoader } from "./loaders/email-confirmation-page-loader";
import { authMiddleware } from "./middlewares/auth-middleware";
import { Home } from "./views";
import { EmailConfirmationPage } from "./views/auth/email-confirmation-page";
import { LoginAccountPage } from "./views/auth/login-account-page";
import { LoginWithPasswordPage } from "./views/auth/login-with-password-page";
import { RegisterAccountPage } from "./views/auth/register-account-page";
import { AuthLayout } from "./views/layouts/auth-layout";
import { LoginAccountLayout } from "./views/layouts/login-account-layout";
import { RootLayout } from "./views/layouts/root-layout";

const routes: RouteObject[] = [
	{
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
		],
		middleware: [
			authMiddleware,
		],
	},
	{
		Component: AuthLayout,
		children: [
			{
				path: "/auth/login",
				Component: LoginAccountLayout,
				children: [
					{
						index: true,
						Component: LoginAccountPage,
					},
					{
						path: "password",
						Component: LoginWithPasswordPage,
					},
				],
			},
			{
				path: "/auth/register",
				Component: RegisterAccountPage,
			},
			{
				path: "/auth/email-confirmation",
				Component: EmailConfirmationPage,
				loader: emailConfirmationPageLoader,
			},
		],
	},
];

export const router = createBrowserRouter(routes);

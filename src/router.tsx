import type { RouteObject } from "react-router";
import { createBrowserRouter, RouterContextProvider } from "react-router";
import { sessionContext } from "./contexts/session-context";
import { emailConfirmationPageLoader } from "./loaders/email-confirmation-page-loader";
import { sessionLoader } from "./loaders/session-loader";
import { authMiddleware } from "./middlewares/auth-middleware";
import { roleGuardMiddleware } from "./middlewares/role-guard-middleware";
import { User } from "./models/user";
import { AdminPage } from "./views/admin-page";
import { EmailConfirmationPage } from "./views/auth/email-confirmation-page";
import { LoginAccountPage } from "./views/auth/login-account-page";
import { LoginWithPasswordPage } from "./views/auth/login-with-password-page";
import { RegisterAccountPage } from "./views/auth/register-account-page";
import { JobseekerPage } from "./views/jobseeker-page";
import { AuthLayout } from "./views/layouts/auth-layout";
import { JobseekerLayout } from "./views/layouts/jobseeker-layout";
import { LoginAccountLayout } from "./views/layouts/login-account-layout";
import { RootLayout } from "./views/layouts/root-layout";

const routes: RouteObject[] = [
	{
		middleware: [
			authMiddleware,
		],
		children: [
			{
				path: "/",
				Component: RootLayout,
				children: [
					{
						path: "jobseeker",
						Component: JobseekerLayout,
						loader: sessionLoader,
						children: [
							{
								index: true,
								Component: JobseekerPage,
							},
						],
					},
					{
						path: "admin",
						Component: AdminPage,
						loader: sessionLoader,
					},
				],
				middleware: [
					roleGuardMiddleware,
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
		],
	},
];

export const router = createBrowserRouter(routes, {
	getContext() {
		const user = new User({
			email: "example@email.com",
			role: "admin",
		});
		const context = new RouterContextProvider();
		context.set(sessionContext, user);
		return context;
	},
});

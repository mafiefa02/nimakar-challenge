import type { RouteObject } from "react-router";
import { createBrowserRouter, RouterContextProvider } from "react-router";
import { sessionContext } from "./contexts/session-context";
import { userService } from "./domains/user";
import { emailConfirmationPageLoader } from "./loaders/email-confirmation-page-loader";
import { sessionLoader } from "./loaders/session-loader";
import { authMiddleware } from "./middlewares/auth-middleware";
import { roleGuardMiddleware } from "./middlewares/role-guard-middleware";
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
		middleware: [authMiddleware],
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
				middleware: [roleGuardMiddleware],
			},
			{
				path: "auth",
				Component: AuthLayout,
				children: [
					{
						path: "login",
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
						path: "register",
						Component: RegisterAccountPage,
					},
					{
						path: "email-confirmation",
						Component: EmailConfirmationPage,
						loader: emailConfirmationPageLoader,
					},
				],
			},
		],
	},
];

export const router = createBrowserRouter(routes, {
	async getContext() {
		const user = await userService.getUserByIdentifier("tes");
		const context = new RouterContextProvider();
		context.set(sessionContext, user.data);
		return context;
	},
});

import type { RouteObject } from "react-router";
import { createBrowserRouter, RouterContextProvider } from "react-router";
import { sessionContext } from "./contexts/session-context";
import { services } from "./domains/services";
import type { User } from "./domains/user/user.type";
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
		const context = new RouterContextProvider();

		try {
			const session = localStorage.getItem("session");

			if (!session) {
				context.set(sessionContext, null);
				return context;
			}

			const sessionUser: User = JSON.parse(session);
			const user = await services.user.getUserByIdentifier(sessionUser.email);

			if (!user?.data) {
				context.set(sessionContext, null);
				return context;
			}

			context.set(sessionContext, user.data);
		} catch {
			localStorage.removeItem("session");
			context.set(sessionContext, null);
		}

		return context;
	},
});

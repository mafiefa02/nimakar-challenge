import { AuthErrorHandler } from "-/components/auth-error-handler";
import { GoogleIcon } from "-/components/icons/google-icon";
import { Button } from "-/components/shadcn/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "-/components/shadcn/card";
import { Link, Outlet } from "react-router";

export const LoginAccountLayout = () => {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Masuk ke Nimakar</CardTitle>
				<CardDescription>
					Belum punya akun?{" "}
					<Link
						to="/auth/register"
						className="text-primary"
					>
						Daftar menggunakan email
					</Link>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex w-full flex-col gap-4">
				<AuthErrorHandler />
				<Outlet />
				<Button variant="outline">
					<GoogleIcon /> Masuk dengan Google
				</Button>
			</CardContent>
		</Card>
	);
};

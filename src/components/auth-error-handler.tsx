import { Link, useSearchParams } from "react-router";
import { Alert, AlertDescription } from "./shadcn/alert";

type ErrorHandler = {
	id: string;
	element: React.ReactNode;
};

export const AuthErrorHandler = () => {
	const [searchParams] = useSearchParams();
	const errorId = searchParams.get("error");

	if (!errorId) return;

	const element = ERRORS.find((error) => error.id === errorId)?.element;

	return (
		<Alert
			variant="outline"
			color="danger"
		>
			{element}
		</Alert>
	);
};

const ERRORS: ErrorHandler[] = [
	{
		id: "email-found",
		element: (
			<AlertDescription>
				<p>
					Email ini sudah terdaftar sebagai akun di Nimakar Academy.{" "}
					<Link
						to="/auth/login"
						className="font-bold"
					>
						Masuk
					</Link>
				</p>
			</AlertDescription>
		),
	},
	{
		id: "email-not-found",
		element: (
			<AlertDescription>
				<p>
					Email ini belum terdaftar sebagai akun di Nimakar Academy.{" "}
					<Link
						to="/auth/register"
						className="font-bold"
					>
						Daftar
					</Link>
				</p>
			</AlertDescription>
		),
	},
	{
		id: "link-expired",
		element: (
			<AlertDescription>
				<p>
					Link <strong className="inline">sudah kadaluarsa</strong>, silakan
					login kembali!
				</p>
			</AlertDescription>
		),
	},
];

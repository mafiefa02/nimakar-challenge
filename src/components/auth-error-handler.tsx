import { Link, useSearchParams } from "react-router";
import { Badge } from "./shadcn/badge";

type ErrorHandler = {
	id: string;
	element: React.ReactNode;
};

export const AuthErrorHandler = () => {
	const [searchParams] = useSearchParams();
	const errorId = searchParams.get("error");

	if (!errorId) return;

	return ERRORS.find((error) => error.id === errorId)?.element;
};

const ERRORS: ErrorHandler[] = [
	{
		id: "email-found",
		element: (
			<Badge
				variant="outline"
				color="danger"
			>
				<p>
					Email ini sudah terdaftar sebagai akun di Rakamin Academy.{" "}
					<Link
						to="/auth/login"
						className="font-bold"
					>
						Masuk
					</Link>
				</p>
			</Badge>
		),
	},
	{
		id: "email-not-found",
		element: (
			<Badge
				variant="outline"
				color="danger"
			>
				<p>
					Email ini belum terdaftar sebagai akun di Rakamin Academy.{" "}
					<Link
						to="/auth/register"
						className="font-bold"
					>
						Daftar
					</Link>
				</p>
			</Badge>
		),
	},
	{
		id: "link-expired",
		element: (
			<Badge
				variant="outline"
				color="danger"
			>
				<p>
					Link <strong className="inline">sudah kadaluarsa</strong>, silakan
					login kembali!
				</p>
			</Badge>
		),
	},
];

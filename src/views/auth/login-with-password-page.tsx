import { LoginPasswordFormFields } from "-/components/forms/login-password-form/login-password-form-fields";
import { LoginPasswordFormProvider } from "-/components/forms/login-password-form/login-password-form-provider";
import { Button } from "-/components/shadcn/button";
import { Separator } from "-/components/shadcn/separator";
import { MailIcon } from "lucide-react";
import { Link } from "react-router";

export const LoginWithPasswordPage = () => {
	return (
		<>
			<LoginPasswordFormProvider>
				<LoginPasswordFormFields />
				<p className="text-right text-primary hover:cursor-pointer">
					Lupa kata sandi?
				</p>
				<Button variant="secondary">Masuk</Button>
			</LoginPasswordFormProvider>
			<div className="flex w-full items-center gap-3">
				<Separator
					className="shrink"
					orientation="horizontal"
				/>
				<p>atau</p>
				<Separator
					className="shrink"
					orientation="horizontal"
				/>
			</div>
			<Button
				variant="outline"
				asChild
			>
				<Link to="/auth/login">
					<MailIcon /> Kirim link login melalui email
				</Link>
			</Button>
		</>
	);
};

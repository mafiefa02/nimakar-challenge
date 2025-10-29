import { LoginPasswordForm } from "-/components/forms/login-password-form";
import { LoginPasswordFormEmailField } from "-/components/forms/login-password-form/fields/login-password-form-email-field";
import { LoginPasswordFormPasswordField } from "-/components/forms/login-password-form/fields/login-password-form-password-field";
import { Button } from "-/components/shadcn/button";
import { FieldGroup } from "-/components/shadcn/field";
import { Separator } from "-/components/shadcn/separator";
import { MailIcon } from "lucide-react";
import { Link } from "react-router";

export const LoginWithPasswordPage = () => {
	return (
		<>
			<LoginPasswordForm>
				<FieldGroup>
					<LoginPasswordFormEmailField />
					<LoginPasswordFormPasswordField />
				</FieldGroup>
				<p className="text-right text-primary hover:cursor-pointer">
					Lupa kata sandi?
				</p>
				<Button variant="secondary">Masuk</Button>
			</LoginPasswordForm>
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

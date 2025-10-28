import { LoginMagicLinkFormFields } from "-/components/forms/login-magic-link-form/login-magic-link-form-fields";
import { LoginMagicLinkFormProvider } from "-/components/forms/login-magic-link-form/login-magic-link-form-provider";
import { Button } from "-/components/shadcn/button";
import { Separator } from "-/components/shadcn/separator";
import { KeyRoundIcon } from "lucide-react";
import { Link } from "react-router";

export const LoginAccountPage = () => {
	return (
		<>
			<LoginMagicLinkFormProvider>
				<LoginMagicLinkFormFields />
				<Button
					type="submit"
					variant="secondary"
				>
					Kirim link
				</Button>
			</LoginMagicLinkFormProvider>
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
				<Link to="/auth/login/password">
					<KeyRoundIcon /> Masuk dengan kata sandi
				</Link>
			</Button>
		</>
	);
};

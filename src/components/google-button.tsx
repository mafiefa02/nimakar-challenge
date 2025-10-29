import { GoogleIcon } from "./icons/google-icon";
import { Button } from "./shadcn/button";

export const GoogleButton = ({
	children,
	...props
}: React.ComponentPropsWithRef<"button">) => {
	return (
		<Button
			variant="outline"
			{...props}
		>
			<GoogleIcon />
			{children}
		</Button>
	);
};

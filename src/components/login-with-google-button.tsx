import { GoogleButton } from "./google-button";

export const LoginWithGoogleButton = () => {
	const login = () => console.info("login");
	return <GoogleButton onClick={login}>Masuk dengan Google</GoogleButton>;
};

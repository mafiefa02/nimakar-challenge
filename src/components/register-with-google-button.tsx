import { GoogleButton } from "./google-button";

export const RegisterWithGoogleButton = () => {
	const register = () => console.info("register");
	return <GoogleButton onClick={register}>Daftar dengan Google</GoogleButton>;
};

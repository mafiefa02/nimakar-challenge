import defaultAvatar from "-/assets/default-avatar.png";
import type { sessionLoader } from "-/loaders/session-loader";
import { useLoaderData } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcn/avatar";

export const UserProfile = () => {
	const { user } = useLoaderData<typeof sessionLoader>();
	return (
		<Avatar>
			<AvatarImage src={user.get("photoProfile") ?? defaultAvatar} />
			<AvatarFallback>{user.get("email")[0]}</AvatarFallback>
		</Avatar>
	);
};

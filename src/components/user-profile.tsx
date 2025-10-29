import defaultAvatar from "-/assets/default-avatar.png";
import { useLoaderData } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcn/avatar";

export const UserProfile = () => {
	const { session } = useLoaderData();
	return (
		<Avatar>
			<AvatarImage src={session.meta.photoProfile ?? defaultAvatar} />
			<AvatarFallback>
				{session.meta.fullName ? session.meta.fullName[0] : "?"}
			</AvatarFallback>
		</Avatar>
	);
};

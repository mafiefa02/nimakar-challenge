import defaultAvatar from "-/assets/default-avatar.png";
import type { User } from "-/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcn/avatar";

export const UserProfile = ({ user }: { user: typeof User.infer }) => {
	return (
		<Avatar>
			<AvatarImage src={user.photoProfile ?? defaultAvatar} />
			<AvatarFallback>{user.email[0]}</AvatarFallback>
		</Avatar>
	);
};

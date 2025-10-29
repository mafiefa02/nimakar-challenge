import joblistIllustration from "-/assets/joblist-illustration.jpg";
import { cn } from "-/lib/utils";
import { CreateJobModalTrigger } from "./create-job-modal/create-job-modal-trigger";
import { Card, CardContent } from "./shadcn/card";

export const NewJobCtaCard = ({
	className,
	...props
}: React.ComponentProps<typeof Card>) => {
	return (
		<Card
			className={cn(
				"h-fit overflow-hidden rounded-2xl bg-neutral-100 py-0",
				className,
			)}
			{...props}
		>
			<img
				alt="Job list illustration"
				src={joblistIllustration}
				className="-z-10 absolute opacity-15"
			/>
			<CardContent className="flex flex-col gap-6 p-10">
				<div className="flex flex-col gap-1 text-center text-background">
					<strong className="text-heading-sm">Rekrut kandidat terbaik</strong>
					<strong className="text-pretty">
						Buat lowongan dan rekrut dengan mudah
					</strong>
				</div>
				<CreateJobModalTrigger>Tambah lowongan baru</CreateJobModalTrigger>
			</CardContent>
		</Card>
	);
};

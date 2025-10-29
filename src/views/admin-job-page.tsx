import { AdminJobPageBreadcrumbs } from "-/components/admin-job-page-breadcrumbs";
import { Header } from "-/components/header";
import { Card, CardContent } from "-/components/shadcn/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "-/components/shadcn/table";
import { UserProfile } from "-/components/user-profile";
import { adminJobPageLoader } from "-/loaders/admin-job-page-loader";
import { useLoaderData } from "react-router";

export const AdminJobPage = () => {
	const { job, applicationForm } = useLoaderData<typeof adminJobPageLoader>();
	return (
		<>
			<Header>
				<AdminJobPageBreadcrumbs />
				<UserProfile />
			</Header>
			<div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-4">
				<h1 className="font-bold text-xl">{job.get("title")}</h1>
				<Card className="rounded-xl py-3">
					<CardContent className="px-3">
						<Table className="overflow-hidden rounded-xl">
							<TableHeader>
								<TableRow>
									{applicationForm.sections.map((section) => (
										<TableHead key={section.key}>{section.label}</TableHead>
									))}
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									{applicationForm.sections.map((section) => (
										<TableCell key={section.key}>{section.required}</TableCell>
									))}
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

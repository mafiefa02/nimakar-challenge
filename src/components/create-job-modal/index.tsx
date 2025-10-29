import { CreateJobModalContext } from "-/domains/job/contexts/create-job-modal-context";
import { useState } from "react";
import { CreateJobModalForm } from "../forms/create-job-modal-form";
import { createJobModalFormId } from "../forms/create-job-modal-form/create-job-modal-form-schema";
import { createJobModalFormFields } from "../forms/create-job-modal-form/fields";
import { Button } from "../shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcn/card";
import {
	Dialog,
	DialogContent,
	DialogContentRoot,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "../shadcn/dialog";
import { FieldGroup, FieldLegend, FieldSet } from "../shadcn/field";

export const CreateJobModal = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<CreateJobModalContext.Provider value={{ isOpen, setIsOpen }}>
			<Dialog
				modal
				open={isOpen}
				onOpenChange={setIsOpen}
			>
				<CreateJobModalForm>
					<DialogContentRoot>
						<DialogHeader>
							<DialogTitle>Pembukaan Lowongan</DialogTitle>
						</DialogHeader>
						<DialogContent className="max-h-[70vh] overflow-y-auto">
							<div className="space-y-4">
								<FieldSet>
									<FieldGroup>
										{createJobModalFormFields["name"]}
										{createJobModalFormFields["type"]}
										{createJobModalFormFields["description"]}
										{createJobModalFormFields["candidatesAmount"]}
									</FieldGroup>
								</FieldSet>
								<FieldSet>
									<FieldLegend>Gaji Pekerjaan</FieldLegend>
									<div className="grid grid-cols-2 gap-4">
										{createJobModalFormFields["minimumPay"]}
										{createJobModalFormFields["maximumPay"]}
									</div>
								</FieldSet>
								<Card className="gap-2 rounded-lg border py-6 shadow-none">
									<CardHeader className="px-6">
										<CardTitle className="text-base!">
											Informasi Minimum yang Dibutuhkan
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4 px-6">
										{createJobModalFormFields["mpiFullName"]}
										{createJobModalFormFields["mpiPhotoProfile"]}
										{createJobModalFormFields["mpiGender"]}
										{createJobModalFormFields["mpiDomicile"]}
										{createJobModalFormFields["mpiEmail"]}
										{createJobModalFormFields["mpiPhoneNumber"]}
										{createJobModalFormFields["mpiLinkedin"]}
										{createJobModalFormFields["mpiDob"]}
									</CardContent>
								</Card>
							</div>
						</DialogContent>
						<DialogFooter>
							<Button
								type="submit"
								form={createJobModalFormId}
							>
								Buat Lowongan
							</Button>
						</DialogFooter>
					</DialogContentRoot>
				</CreateJobModalForm>
			</Dialog>
			{children}
		</CreateJobModalContext.Provider>
	);
};

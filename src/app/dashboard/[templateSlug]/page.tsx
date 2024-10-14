import { contentTemplates } from "@/lib/content-template";
import React from "react";

interface templateSlugProps {
	templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
	const selectedTemplate = contentTemplates.find(
		(item) => item.slug === params.templateSlug
	);
	return (
		<div className="mx-5 py-2">
			<div className="mt-5 py-6 px-4 bg-white rounded">
				<h2 className="font-medium">template name</h2>
			</div>
		</div>
	);
};

export default TemplatePage;

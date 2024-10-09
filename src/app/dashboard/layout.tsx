import React from "react";
import Sidebar from "./_components/sidebar";

const DashboardLayout = () => {
	return (
		<div className="bg-gray-50 h-screen">
			<div className="md:w-64 hidden md:block fixed">
				<Sidebar />
			</div>
			<div className="md:ml-64 bg-gray-50 h-fit pb-5">dashboard</div>
		</div>
	);
};

export default DashboardLayout;

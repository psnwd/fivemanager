import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import Overview from "@/components/dashboard/overview";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Admin dashbord for managing fiveM server and players.",
};

export default function DashboardPage() {
	return (
		<>
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
					<div className="flex items-center space-x-2">
						<Button>Download</Button>
					</div>
				</div>
				<Tabs defaultValue="overview" className="space-y-4">
					<TabsList>
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
						<TabsTrigger value="reports">Reports</TabsTrigger>
						<TabsTrigger value="notifications">Notifications</TabsTrigger>
					</TabsList>
					<Overview />
				</Tabs>
			</div>
		</>
	);
}

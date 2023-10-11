import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
			<Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
				Overview
			</Link>
			<Link
				href="/dashboard/servers"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Servers
			</Link>
			<Link
				href="/dashboard/players"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Players
			</Link>
			<Link
				href="/dashboard/settings"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Settings
			</Link>
		</nav>
	);
}

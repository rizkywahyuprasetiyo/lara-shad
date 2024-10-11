import {
    Home,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Sidebar() {
    const { url } = usePage();
    return (
        <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="#"
                    className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="w-4 h-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={route("dashboard")}
                                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 hover:text-foreground md:h-8 md:w-8 ${
                                    url == "/dashboard"
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                                }`}
                            >
                                <Home className="w-5 h-5" />
                                <span className="sr-only">Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={route("users.index")}
                                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 hover:text-foreground md:h-8 md:w-8 ${
                                    url == "/users"
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                                }`}
                            >
                                <Users2 className="w-5 h-5" />
                                <span className="sr-only">Users</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Users</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="w-5 h-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    );
}

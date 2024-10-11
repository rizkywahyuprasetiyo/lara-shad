import React from "react";
import { Link } from "@inertiajs/react";
import SidebarSheet from "./SidebarSheet";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { CircleUserRound, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Topbar({ breadcrumbs }) {
    return (
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarSheet />
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                {breadcrumb.link ? (
                                    <BreadcrumbLink asChild>
                                        <Link href={breadcrumb.link}>
                                            {breadcrumb.title}
                                        </Link>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>
                                        {breadcrumb.title}
                                    </BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < breadcrumbs.length - 1 && (
                                <BreadcrumbSeparator />
                            )}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
            <div className="relative flex-1 ml-auto md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="items-center rounded-full"
                    >
                        <CircleUserRound className="w-5 h-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link as="button" href={route("logout")} method="post">
                            Logout
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}

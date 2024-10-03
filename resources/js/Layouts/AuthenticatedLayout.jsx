import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        // <div className="min-h-screen bg-gray-100">
        //     <nav className="bg-white border-b border-gray-100">
        //         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        //             <div className="flex justify-between h-16">
        //                 <div className="flex">
        //                     <div className="flex items-center shrink-0">
        //                         <Link href="/">
        //                             <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
        //                         </Link>
        //                     </div>

        //                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        //                         <NavLink
        //                             href={route('dashboard')}
        //                             active={route().current('dashboard')}
        //                         >
        //                             Dashboard
        //                         </NavLink>
        //                     </div>
        //                 </div>

        //                 <div className="hidden sm:ms-6 sm:flex sm:items-center">
        //                     <div className="relative ms-3">
        //                         <Dropdown>
        //                             <Dropdown.Trigger>
        //                                 <span className="inline-flex rounded-md">
        //                                     <button
        //                                         type="button"
        //                                         className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
        //                                     >
        //                                         {user.name}

        //                                         <svg
        //                                             className="-me-0.5 ms-2 h-4 w-4"
        //                                             xmlns="http://www.w3.org/2000/svg"
        //                                             viewBox="0 0 20 20"
        //                                             fill="currentColor"
        //                                         >
        //                                             <path
        //                                                 fillRule="evenodd"
        //                                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                                                 clipRule="evenodd"
        //                                             />
        //                                         </svg>
        //                                     </button>
        //                                 </span>
        //                             </Dropdown.Trigger>

        //                             <Dropdown.Content>
        //                                 <Dropdown.Link
        //                                     href={route('profile.edit')}
        //                                 >
        //                                     Profile
        //                                 </Dropdown.Link>
        //                                 <Dropdown.Link
        //                                     href={route('logout')}
        //                                     method="post"
        //                                     as="button"
        //                                 >
        //                                     Log Out
        //                                 </Dropdown.Link>
        //                             </Dropdown.Content>
        //                         </Dropdown>
        //                     </div>
        //                 </div>

        //                 <div className="flex items-center -me-2 sm:hidden">
        //                     <button
        //                         onClick={() =>
        //                             setShowingNavigationDropdown(
        //                                 (previousState) => !previousState,
        //                             )
        //                         }
        //                         className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
        //                     >
        //                         <svg
        //                             className="w-6 h-6"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 className={
        //                                     !showingNavigationDropdown
        //                                         ? 'inline-flex'
        //                                         : 'hidden'
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                             <path
        //                                 className={
        //                                     showingNavigationDropdown
        //                                         ? 'inline-flex'
        //                                         : 'hidden'
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div
        //             className={
        //                 (showingNavigationDropdown ? 'block' : 'hidden') +
        //                 ' sm:hidden'
        //             }
        //         >
        //             <div className="pt-2 pb-3 space-y-1">
        //                 <ResponsiveNavLink
        //                     href={route('dashboard')}
        //                     active={route().current('dashboard')}
        //                 >
        //                     Dashboard
        //                 </ResponsiveNavLink>
        //             </div>

        //             <div className="pt-4 pb-1 border-t border-gray-200">
        //                 <div className="px-4">
        //                     <div className="text-base font-medium text-gray-800">
        //                         {user.name}
        //                     </div>
        //                     <div className="text-sm font-medium text-gray-500">
        //                         {user.email}
        //                     </div>
        //                 </div>

        //                 <div className="mt-3 space-y-1">
        //                     <ResponsiveNavLink href={route('profile.edit')}>
        //                         Profile
        //                     </ResponsiveNavLink>
        //                     <ResponsiveNavLink
        //                         method="post"
        //                         href={route('logout')}
        //                         as="button"
        //                     >
        //                         Log Out
        //                     </ResponsiveNavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>

        //     {header && (
        //         <header className="bg-white shadow">
        //             <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        //                 {header}
        //             </div>
        //         </header>
        //     )}

        //     <main>{children}</main>
        // </div>
        <div className="flex flex-col w-full min-h-screen bg-muted/40">
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
                                    href="#"
                                    className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Home className="w-5 h-5" />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Dashboard
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 bg-accent text-accent-foreground hover:text-foreground md:h-8 md:w-8"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="sr-only">Orders</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Orders</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Package className="w-5 h-5" />
                                    <span className="sr-only">Products</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Products
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Users2 className="w-5 h-5" />
                                    <span className="sr-only">Customers</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Customers
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                                >
                                    <LineChart className="w-5 h-5" />
                                    <span className="sr-only">Analytics</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Analytics
                            </TooltipContent>
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
                            <TooltipContent side="right">
                                Settings
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex items-center gap-4 px-4 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="icon"
                                variant="outline"
                                className="sm:hidden"
                            >
                                <PanelLeft className="w-5 h-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold rounded-full group shrink-0 bg-primary text-primary-foreground md:text-base"
                                >
                                    <Package2 className="w-5 h-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="w-5 h-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-foreground"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Orders
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Package className="w-5 h-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Users2 className="w-5 h-5" />
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="w-5 h-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Orders</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Recent Orders</BreadcrumbPage>
                            </BreadcrumbItem>
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
                                className="overflow-hidden rounded-full"
                            >
                                Nama user
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                            <Card
                                className="sm:col-span-2"
                                x-chunk="dashboard-05-chunk-0"
                            >
                                <CardHeader className="pb-3">
                                    <CardTitle>Your Orders</CardTitle>
                                    <CardDescription className="max-w-lg leading-relaxed text-balance">
                                        Introducing Our Dynamic Orders Dashboard
                                        for Seamless Management and Insightful
                                        Analysis.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button>Create New Order</Button>
                                </CardFooter>
                            </Card>
                            <Card x-chunk="dashboard-05-chunk-1">
                                <CardHeader className="pb-2">
                                    <CardDescription>This Week</CardDescription>
                                    <CardTitle className="text-4xl">
                                        $1,329
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xs text-muted-foreground">
                                        +25% from last week
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Progress
                                        value={25}
                                        aria-label="25% increase"
                                    />
                                </CardFooter>
                            </Card>
                            <Card x-chunk="dashboard-05-chunk-2">
                                <CardHeader className="pb-2">
                                    <CardDescription>
                                        This Month
                                    </CardDescription>
                                    <CardTitle className="text-4xl">
                                        $5,329
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xs text-muted-foreground">
                                        +10% from last month
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Progress
                                        value={12}
                                        aria-label="12% increase"
                                    />
                                </CardFooter>
                            </Card>
                        </div>
                        <Tabs defaultValue="week">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="week">Week</TabsTrigger>
                                    <TabsTrigger value="month">
                                        Month
                                    </TabsTrigger>
                                    <TabsTrigger value="year">Year</TabsTrigger>
                                </TabsList>
                                <div className="flex items-center gap-2 ml-auto">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="gap-1 text-sm h-7"
                                            >
                                                <ListFilter className="h-3.5 w-3.5" />
                                                <span className="sr-only sm:not-sr-only">
                                                    Filter
                                                </span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>
                                                Filter by
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuCheckboxItem checked>
                                                Fulfilled
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>
                                                Declined
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem>
                                                Refunded
                                            </DropdownMenuCheckboxItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="gap-1 text-sm h-7"
                                    >
                                        <File className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only">
                                            Export
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <TabsContent value="week">
                                <Card x-chunk="dashboard-05-chunk-3">
                                    <CardHeader className="px-7">
                                        <CardTitle>Orders</CardTitle>
                                        <CardDescription>
                                            Recent orders from your store.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>
                                                        Customer
                                                    </TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Type
                                                    </TableHead>
                                                    <TableHead className="hidden sm:table-cell">
                                                        Status
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Date
                                                    </TableHead>
                                                    <TableHead className="text-right">
                                                        Amount
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="bg-accent">
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Liam Johnson
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            liam@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Sale
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="secondary"
                                                        >
                                                            Fulfilled
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-23
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $250.00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Olivia Smith
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            olivia@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Refund
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="outline"
                                                        >
                                                            Declined
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-24
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $150.00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Noah Williams
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            noah@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Subscription
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="secondary"
                                                        >
                                                            Fulfilled
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-25
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $350.00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Emma Brown
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            emma@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Sale
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="secondary"
                                                        >
                                                            Fulfilled
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-26
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $450.00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Liam Johnson
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            liam@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Sale
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="secondary"
                                                        >
                                                            Fulfilled
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-23
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $250.00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Liam Johnson
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            liam@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Sale
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="secondary"
                                                        >
                                                            Fulfilled
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-23
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $250.00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Olivia Smith
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            olivia@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Refund
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="outline"
                                                        >
                                                            Declined
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-24
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $150.00
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">
                                                            Emma Brown
                                                        </div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            emma@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        Sale
                                                    </TableCell>
                                                    <TableCell className="hidden sm:table-cell">
                                                        <Badge
                                                            className="text-xs"
                                                            variant="secondary"
                                                        >
                                                            Fulfilled
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell">
                                                        2023-06-26
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $450.00
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div>
                        <Card
                            className="overflow-hidden"
                            x-chunk="dashboard-05-chunk-4"
                        >
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                                <div className="grid gap-0.5">
                                    <CardTitle className="flex items-center gap-2 text-lg group">
                                        Order Oe31b70H
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="w-6 h-6 transition-opacity opacity-0 group-hover:opacity-100"
                                        >
                                            <Copy className="w-3 h-3" />
                                            <span className="sr-only">
                                                Copy Order ID
                                            </span>
                                        </Button>
                                    </CardTitle>
                                    <CardDescription>
                                        Date: November 23, 2023
                                    </CardDescription>
                                </div>
                                <div className="flex items-center gap-1 ml-auto">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-8 gap-1"
                                    >
                                        <Truck className="h-3.5 w-3.5" />
                                        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                            Track Order
                                        </span>
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="w-8 h-8"
                                            >
                                                <MoreVertical className="h-3.5 w-3.5" />
                                                <span className="sr-only">
                                                    More
                                                </span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Export
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                Trash
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                                <div className="grid gap-3">
                                    <div className="font-semibold">
                                        Order Details
                                    </div>
                                    <ul className="grid gap-3">
                                        <li className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Glimmer Lamps x <span>2</span>
                                            </span>
                                            <span>$250.00</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Aqua Filters x <span>1</span>
                                            </span>
                                            <span>$49.00</span>
                                        </li>
                                    </ul>
                                    <Separator className="my-2" />
                                    <ul className="grid gap-3">
                                        <li className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Subtotal
                                            </span>
                                            <span>$299.00</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Shipping
                                            </span>
                                            <span>$5.00</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-muted-foreground">
                                                Tax
                                            </span>
                                            <span>$25.00</span>
                                        </li>
                                        <li className="flex items-center justify-between font-semibold">
                                            <span className="text-muted-foreground">
                                                Total
                                            </span>
                                            <span>$329.00</span>
                                        </li>
                                    </ul>
                                </div>
                                <Separator className="my-4" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-3">
                                        <div className="font-semibold">
                                            Shipping Information
                                        </div>
                                        <address className="grid gap-0.5 not-italic text-muted-foreground">
                                            <span>Liam Johnson</span>
                                            <span>1234 Main St.</span>
                                            <span>Anytown, CA 12345</span>
                                        </address>
                                    </div>
                                    <div className="grid gap-3 auto-rows-max">
                                        <div className="font-semibold">
                                            Billing Information
                                        </div>
                                        <div className="text-muted-foreground">
                                            Same as shipping address
                                        </div>
                                    </div>
                                </div>
                                <Separator className="my-4" />
                                <div className="grid gap-3">
                                    <div className="font-semibold">
                                        Customer Information
                                    </div>
                                    <dl className="grid gap-3">
                                        <div className="flex items-center justify-between">
                                            <dt className="text-muted-foreground">
                                                Customer
                                            </dt>
                                            <dd>Liam Johnson</dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className="text-muted-foreground">
                                                Email
                                            </dt>
                                            <dd>
                                                <a href="mailto:">
                                                    liam@acme.com
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className="text-muted-foreground">
                                                Phone
                                            </dt>
                                            <dd>
                                                <a href="tel:">
                                                    +1 234 567 890
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <Separator className="my-4" />
                                <div className="grid gap-3">
                                    <div className="font-semibold">
                                        Payment Information
                                    </div>
                                    <dl className="grid gap-3">
                                        <div className="flex items-center justify-between">
                                            <dt className="flex items-center gap-1 text-muted-foreground">
                                                <CreditCard className="w-4 h-4" />
                                                Visa
                                            </dt>
                                            <dd>**** **** **** 4532</dd>
                                        </div>
                                    </dl>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-row items-center px-6 py-3 border-t bg-muted/50">
                                <div className="text-xs text-muted-foreground">
                                    Updated{" "}
                                    <time dateTime="2023-11-23">
                                        November 23, 2023
                                    </time>
                                </div>
                                <Pagination className="w-auto ml-auto mr-0">
                                    <PaginationContent>
                                        <PaginationItem>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="w-6 h-6"
                                            >
                                                <ChevronLeft className="h-3.5 w-3.5" />
                                                <span className="sr-only">
                                                    Previous Order
                                                </span>
                                            </Button>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                className="w-6 h-6"
                                            >
                                                <ChevronRight className="h-3.5 w-3.5" />
                                                <span className="sr-only">
                                                    Next Order
                                                </span>
                                            </Button>
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}

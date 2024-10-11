import { Button } from "@/components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    File,
    ListFilter,
    MoreHorizontal,
    PlusCircle,
    Search,
} from "lucide-react";
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
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { usePage, router } from "@inertiajs/react";
import React, { useState, useCallback, useEffect } from "react";
import { debounce, pickBy } from "lodash";
import { Input } from "@/components/ui/input";

export default function User() {
    const breadcrumbs = [
        {
            title: "Dashboard",
            link: route("dashboard"),
        },
        { title: "Users" },
    ];

    const { data: users, meta, filtered, attributes } = usePage().props.users;
    const [params, setParams] = useState(filtered);
    const [pageNumber, setPageNumber] = useState([]);

    const reload = useCallback(
        debounce((query) => {
            router.get(
                route("users.index"),
                { ...pickBy(query), page: query.q ? 1 : query.page },
                {
                    preserveState: true,
                }
            );
        }, 150),
        []
    );

    useEffect(() => reload(params), [params]);

    useEffect(() => {
        let numbers = [];
        for (
            let i = attributes.per_page;
            i <= attributes.total / attributes.per_page;
            i += attributes.per_page
        ) {
            numbers.push(i);
        }
        setPageNumber(numbers);
    }, []);

    const onChange = (name, value) => {
        setParams({ ...params, [name]: value });
    };

    return (
        <AuthenticatedLayout breadcrumbs={breadcrumbs}>
            <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Tabs defaultValue="all">
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="draft">Draft</TabsTrigger>
                            <TabsTrigger
                                value="archived"
                                className="hidden sm:flex"
                            >
                                Archived
                            </TabsTrigger>
                        </TabsList>
                        <div className="flex items-center gap-2 ml-auto">
                            <Select
                                onValueChange={(value) =>
                                    onChange("load", value)
                                }
                                value={params.load}
                            >
                                <SelectTrigger className="w-[72px]">
                                    <SelectValue placeholder="Pilih" />
                                </SelectTrigger>
                                <SelectContent>
                                    {pageNumber.map((page, index) => (
                                        <SelectItem key={index} value={page}>
                                            {page}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 gap-1"
                                    >
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
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
                                        Active
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Draft
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Archived
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                                size="sm"
                                variant="outline"
                                className="h-8 gap-1"
                            >
                                <File className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Export
                                </span>
                            </Button>
                            <Button size="sm" className="h-8 gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Tambah
                                </span>
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="all">
                        <Card x-chunk="dashboard-06-chunk-0">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Data User</CardTitle>
                                    <CardDescription>
                                        Buat pengguna untuk akses sistem.
                                    </CardDescription>
                                </div>
                                <div>
                                    <div className="relative flex-1 ml-auto md:grow-0">
                                        <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            type="text"
                                            placeholder="Search..."
                                            value={params.q}
                                            onChange={(e) =>
                                                onChange("q", e.target.value)
                                            }
                                            className="w-full rounded-lg bg-background pl-10 md:w-[200px] lg:w-[336px]"
                                        />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Dibuat Pada</TableHead>
                                            <TableHead>
                                                <span className="sr-only">
                                                    Actions
                                                </span>
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {users.map((user, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium">
                                                    {user.name}
                                                </TableCell>
                                                <TableCell>
                                                    {user.email}
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    {user.bergabung}
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger
                                                            asChild
                                                        >
                                                            <Button
                                                                aria-haspopup="true"
                                                                size="icon"
                                                                variant="ghost"
                                                            >
                                                                <MoreHorizontal className="w-4 h-4" />
                                                                <span className="sr-only">
                                                                    Toggle menu
                                                                </span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>
                                                                Actions
                                                            </DropdownMenuLabel>
                                                            <DropdownMenuItem>
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter className="justify-between">
                                <div className="text-xs text-muted-foreground">
                                    Showing <strong>1-10</strong> of{" "}
                                    <strong>32</strong> products
                                </div>
                                <div>
                                    <Pagination>
                                        <PaginationContent>
                                            {meta.links.map((link, index) => (
                                                <React.Fragment key={index}>
                                                    <PaginationItem>
                                                        {link.label ==
                                                        "Previous" ? (
                                                            <PaginationPrevious
                                                                as="button"
                                                                disabled={
                                                                    link.url
                                                                        ? false
                                                                        : true
                                                                }
                                                                href={
                                                                    link.url ||
                                                                    ""
                                                                }
                                                            />
                                                        ) : link.label ==
                                                          "Next" ? (
                                                            <PaginationNext
                                                                as="button"
                                                                disabled={
                                                                    link.url
                                                                        ? false
                                                                        : true
                                                                }
                                                                href={
                                                                    link.url ||
                                                                    ""
                                                                }
                                                                onClick={() =>
                                                                    onChange(
                                                                        "page",
                                                                        new URL(
                                                                            link.url
                                                                        ).searchParams.get(
                                                                            "page"
                                                                        )
                                                                    )
                                                                }
                                                            />
                                                        ) : (
                                                            <PaginationLink
                                                                href={
                                                                    link.url ||
                                                                    ""
                                                                }
                                                                isActive={
                                                                    link.active
                                                                }
                                                            >
                                                                {link.label}
                                                            </PaginationLink>
                                                        )}
                                                    </PaginationItem>
                                                    {/* <PaginationItem>
                                                        <PaginationLink href="#">
                                                            2
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationEllipsis />
                                                    </PaginationItem> */}
                                                    {/* <PaginationItem>
                                                        <PaginationNext href="#" />
                                                    </PaginationItem> */}
                                                </React.Fragment>
                                            ))}
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </AuthenticatedLayout>
    );
}

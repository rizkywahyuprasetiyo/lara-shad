import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@inertiajs/react";
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    ShoppingCart,
    Users2,
} from "lucide-react";

export default function SidebarSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
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
    );
}

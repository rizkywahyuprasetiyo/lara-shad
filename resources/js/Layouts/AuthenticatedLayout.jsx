import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";

export default function Authenticated({ breadcrumbs, children }) {
    return (
        <div className="flex flex-col w-full min-h-screen bg-muted/40">
            {/* sidebar */}
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Topbar breadcrumbs={breadcrumbs} />
                {children}
                <Toaster />
            </div>
        </div>
    );
}

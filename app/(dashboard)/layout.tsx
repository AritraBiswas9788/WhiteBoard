import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/sidebar/org-sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }:DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="h-full pl-[60px]">
                <div className="flex hap-x-3 h-full">
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        <Navbar/>
                    {children}
                    </div>
                </div>      
            </div>
        </main>
    );
};

export default DashboardLayout;
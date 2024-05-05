import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";
import { PanelNavbar } from "./_components/panel-navbar";
import { OrgSidebar } from "./_components/org-sidebar";
import { TopNavbar } from "./_components/topnavbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <TopNavbar />
            <PanelNavbar />
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;

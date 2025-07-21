"use client";
import Sidebar from "@/components/ui/Sidebar";
import StocksTable from "@/components/stocks/StocksTable";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <StocksTable />
    </div>
  );
}
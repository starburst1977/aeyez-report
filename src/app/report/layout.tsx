import type { Metadata } from "next";
import "@/app/globals-print.css";

export const metadata: Metadata = {
  title: "Inspection Report - AEyes",
  description: "Property inspection report",
};

export default function ReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white min-h-screen px-12 py-16">
      {children}
    </div>
  );
} 
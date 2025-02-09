import XCart from "@/components/XCart/XCart";
import Link from "next/link";

export default function AnalyticsPage() {
  console.log("AnalyticsPage rerender");
  return (
    <XCart>
      <h3>Analytics Slot</h3>
      <Link href="/dashboard/news">News</Link>
    </XCart>
  );
}

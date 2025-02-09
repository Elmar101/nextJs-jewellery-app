import XCart from "@/components/XCart/XCart";
import Link from "next/link";

export default function NewsPage() {
  console.log("NewsPage rerender");
  return (
    <XCart>
      <h3>News page </h3>
      <Link href="/dashboard">Dashboard Link</Link>
    </XCart>
  );
}

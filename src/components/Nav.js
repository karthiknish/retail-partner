import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex justify-center bg-black items-center py-6">
      <Link href="/">
        <Image src="/Black.svg" alt="TRF Logo" width={300} height={300} />
      </Link>
    </nav>
  );
}

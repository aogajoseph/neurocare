import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/footer-logo.png";

export default function FooterLogo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Neuro Care Foundation">
      <Image src={logo} alt="Logo" width={150} />
    </Link>
  );
}

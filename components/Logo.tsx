import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Company Logo"
      width={75}
      height={75}
      priority
    />
  );
}

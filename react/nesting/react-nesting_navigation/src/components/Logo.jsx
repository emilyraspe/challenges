import Image from "./Image";
import Link from "./Link.jsx";

export default function Logo() {
  return (
    <>
      <Link href="#">
        <Image src="./src/assets/logo.jpg" alt="logo" />
      </Link>
    </>
  );
}

 
import Link from "next/link";

export default function Button({ text, link }) {
  return (
    <>
      <Link href={link} className="animated-button">
        <span>{text}</span>
        <span></span>
      </Link>
    </>
  );
}

import Link from "next/link";

export default function Button({ text, link }) {
  return (
    <Link href={link} className="animated-button">
      <div className="animated-inner">
        <span>{text}</span>
        <span aria-hidden="true"></span>
      </div>
    </Link>
  );
}

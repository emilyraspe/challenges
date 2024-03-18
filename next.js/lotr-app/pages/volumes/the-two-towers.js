import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  const book = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <Image
        src={book.cover}
        height={230}
        width={140}
        alt="the-two-towers Cover"
      ></Image>
      <ul>
        <li>
          <p>
            {book.books[0].ordinal}: {book.books[0].title}
          </p>
        </li>
        <li>
          <p>
            {book.books[1].ordinal}: {book.books[1].title}
          </p>
        </li>
      </ul>
    </div>
  );
}

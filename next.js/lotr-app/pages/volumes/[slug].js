import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => slug === volume.slug);
  if (!volume) return;
  const { books } = volume;

  return (
    <div>
      <Head>
        <title>{volume.title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image src={volume.cover} height={230} width={140} alt="Cover"></Image>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            <p>
              {book.ordinal}: {book.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

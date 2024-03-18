import { introduction, volumes } from "../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div>
      <Head>
        <title>All Volumes</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const random = getRandomElement(volumes);
          router.push(`/volumes/${random.slug}`);
        }}
      >
        Random Volume
      </button>
    </div>
  );
}

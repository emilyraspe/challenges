import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";

const VolumeDetailContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  gap: 30px;
  padding: 25px;
  align-items: center;
`;

const VolumeOvervieweContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Link = styled.a`
  margin-top: 25px;
  margin-bottom: 25px;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => slug === volume.slug);
  if (!volume) return;
  const { color, books } = volume;

  return (
    <>
      <Head>
        <title>{volume.title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <VolumeOvervieweContainer>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
      </VolumeOvervieweContainer>
      <VolumeDetailContainer backgroundColor={color}>
        <Image src={volume.cover} height={230} width={140} alt="Cover"></Image>
        <ul>
          {books.map((book) => (
            <li key={book.ordinal}>
              <p>{book.ordinal}</p>
              <h3>{book.title}</h3>
            </li>
          ))}
        </ul>
      </VolumeDetailContainer>
    </>
  );
}

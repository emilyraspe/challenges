import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}

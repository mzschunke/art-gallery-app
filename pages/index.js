import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <h1>Art Gallery</h1>
    </div>
  );
}






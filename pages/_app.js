import GlobalStyle from "../styles";
import useSWR from "swr";


const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} data={data} />
    </>
  );
}

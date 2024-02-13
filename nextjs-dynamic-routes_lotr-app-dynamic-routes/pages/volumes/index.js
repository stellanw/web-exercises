import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const goToRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume, slug) => (
          <li key={slug}>
            {" "}
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>{" "}
          </li>
        ))}
      </ul>
      <button type="button" onClick={goToRandomVolume}>
        Go to random Page
      </button>
    </>
  );
}

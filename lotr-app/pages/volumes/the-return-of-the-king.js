import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function ReturnOfKing() {
  const data = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1 id="slug">{data.title}</h1>
      <Image
        id="slug"
        src={data.cover}
        alt="the-return-of-the-kings-cover"
        width={140}
        height={230}
      />
      <p id="slug">{data.description}</p>
      <ul>
        {data.books.map((book) => (
          <li key={book.ordinal}>
            {" "}
            {book.ordinal}
            {": "}
            {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}

import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FetchProducts() {
  const router = useRouter();
  const id = router.query;
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  console.log(data);
  if (error) {
    return "Not found";
  }

  if (isLoading) {
    return "is Loading...";
  }

  return (
    <StyledUl>
      {data.map((product) => (
        <StyledList key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: "{product.category}"</p>
          <p>
            Price: {product.price}
            {product.currency}
          </p>
          <p>Description: {product.description}</p>
          <StyledLink href={`/products/${product.id}`}>Show Product</StyledLink>
        </StyledList>
      ))}
    </StyledUl>
  );
}

const StyledList = styled.li`
  list-style: none;
  padding: 1.5rem;
  background-color: lightgrey;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  background-color: grey;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
  &:hover {
    background-color: orange;
    color: white;
  }
  justify-content: center;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 0.5rem;
`;

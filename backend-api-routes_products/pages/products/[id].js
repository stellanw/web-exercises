import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FetchProducts() {
  const router = useRouter();
  const id = router.query.id;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  // console.log(data);
  if (error) {
    return "Not found";
  }

  if (isLoading) {
    return "is Loading...";
  }

  return (
    <StyledDiv>
      <StyledProduct key={data.id}>
        <h3>{data.name}</h3>
        <p>Category: "{data.category}"</p>
        <p>
          Price: {data.price}
          {data.currency}
        </p>
        <p>Description: {data.description}</p>
      </StyledProduct>
      <StyledLink href="/products/">See all products</StyledLink>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 1.5rem;
  background-color: lightgrey;
  margin: 1.5rem;
  border-radius: 1rem;
`;

const StyledProduct = styled.div`
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

import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const { data } = request.query;
  response.status(200).json(getAllProducts(data));
}

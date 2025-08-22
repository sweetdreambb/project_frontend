import ProductCard from "../../../component/ProductCard";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";

interface Props{
  getAllProductDtoList: GetAllProductDto[];
}

export default function AllProductCardContainer({getAllProductDtoList}:Props) {
  return (
    <section className="my-4">
      <h2 className="text-3xl font-bold m-10">ALL</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {
          getAllProductDtoList.map((dto) => (
            <ProductCard key={dto.pid} getAllProductDto={dto} />
          ))
        }
      </div>
    </section>
  );
}
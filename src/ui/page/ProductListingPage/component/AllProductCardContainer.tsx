import ProductCard from "../../../component/ProductCard";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";

interface Props {
  getAllProductDtoList: GetAllProductDto[];
  categoryTitle: string;
}

export default function AllProductCardContainer({
                                                  getAllProductDtoList,
                                                  categoryTitle
                                                }: Props) {
  return (
    <section className="my-4">
      <h2 className="text-3xl font-bold m-10">{categoryTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {
          getAllProductDtoList.length>0
          ?(
              getAllProductDtoList.map((dto) => (
                <ProductCard key={dto.pid} getAllProductDto={dto}/>
              ))
            ):(
              <div className="col-span-full text-center text-gray-500 py-8">
                No products found in this category
              </div>
            )
        }
      </div>
    </section>
  );
}
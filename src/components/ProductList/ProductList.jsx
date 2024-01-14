import ProductCard from "components/ProductCard/ProductCard"
import css from "./ProductList.module.css"

const ProductList = ({data}) => {
  return (
    <ul className={css.list}>
          {data.map(item => <ProductCard key={item.id} data={item} />)}     
    </ul>
  )
}

export default ProductList
import { Link, useNavigate } from "react-router-dom";

const DUMMY_PRODUCT = [
   { id: 'p1', title: 'product-1' },
   { id: 'p2', title: 'product-2' },
   { id: 'p3', title: 'product-3' }
]

const Products = () => {
   const navigate = useNavigate();
   const clickHandler = () => {
      navigate('/about');
   }
   return (<>
      <h2>Products Page</h2>
      <ul>
         {DUMMY_PRODUCT.map(item =>
            <li key={item.id}>
               <Link to={item.id}>{item.title}</Link>
            </li>
         )
         }

      </ul>
      <button onClick={clickHandler}>Click</button>
   </>)
}

export default Products;
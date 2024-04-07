import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/product/getproducts?');
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    
    <div className='flex flex-col gap-6 my-10 sm:px-20 max-w mx-auto'>
              
      <div className='sm:mx-20 mx-10 p-3 gap-8 py-7'>
        {products && products.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl font-semibold'>Our Products...</h2>
            <hr class="border-b-1 border-gray-500 "/>
            <div className='flex flex-wrap sm:gap-6 mx-auto sm:mx-auto '>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            
          </div>
        )}
      </div>

    </div>
  );
}
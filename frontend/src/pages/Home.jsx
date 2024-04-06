import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import test from '../assets/test.jpg';
import i from '../assets/3.jpg';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/product/getproducts?limit=5');
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  
  return (
    <div>
      <div className='flex flex-col gap-6 py-20 px-20 max-w mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold lg:text-6xl font-serif mb-3'>Welcome to Arcana Candles</h1>
          <h1 className='text-xl font-bold lg:text-4xl font-serif text-gray-500'>Where Your Dreams Come True...</h1>
        </div>       
      </div>
      
      <div className='px-20 mx-auto p-3 flex flex-col gap-8 py-7'>
        <div className='flex mx-auto px-20'>
          <img src={i} className="mr-3 h-20 w-1/2 sm:h-auto rounded-lg" />
          <img src={i} className="mr-3 h-20 w-1/2 sm:h-auto rounded-lg" />
        </div>
      </div>

      <div className='px-20 mx-auto p-3 flex flex-col gap-8 py-7'>
        {products && products.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl font-semibold text-center'>Our Best Sellers...</h2>
            <hr class="border-b-1 border-gray-500"/>
            <div className='flex flex-wrap gap-4 mx-auto'>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View More...
            </Link>
          </div>
        )}
      </div>

      <div className='px-20 mx-auto p-3 flex flex-col gap-8 py-7'>
        <h2 className='text-3xl font-semibold text-center'>Find Your Vibe...</h2>
        <hr class="border-b-1 border-gray-500"/>
        <div className='flex mx-auto'>
          <img src={test} className="mr-3 h-20 w-72 sm:h-auto rounded-lg" />
          <div>
            <img src={test} className="mr-3 h-20 w-72 sm:h-56 rounded-lg" />
            <img src={test} className="mr-3 mt-3 h-20 w-72 sm:h-56 rounded-lg" />
          </div>
          <img src={test} className="mr-3 h-20 w-72 sm:h-auto rounded-lg" />
          <div>
            <img src={test} className="mr-3 h-36 w-72 sm:h-56 rounded-lg" />
            <img src={test} className="mr-3 mt-3 h-20 w-72 sm:h-56 rounded-lg" />
          </div>
          <img src={test} className="mr-3 h-20 w-72 sm:h-auto rounded-lg" />
        </div>
      </div>

      <div className='px-20 mx-auto p-3 flex flex-col gap-8 py-7'>
        <h2 className='text-3xl font-semibold text-center'>See Our Customer Feedbacks...</h2>
        <hr class="border-b-1 border-gray-500"/>
        <div className='flex mx-auto'>
          <img src={i} className="mr-3 h-20 w-1/3 sm:h-auto rounded-lg p-10" />
          <img src={i} className="mr-3 h-20 w-1/3 sm:h-auto rounded-lg p-10" />
          <img src={i} className="mr-3 h-20 w-1/3 sm:h-auto rounded-lg p-10" />
        </div>
      </div>
    </div>
  );
}
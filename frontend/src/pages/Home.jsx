import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import feedback1 from '../assets/feedback1.jpg';
import promo1 from '../assets/promo1.jpg';
import promo2 from '../assets/promo2.jpg';
import balenceinnerpeace from '../assets/balence-inner-peace.jpg';
import clamclarity from '../assets/clam-clarity.jpg';
import connectiontonature from '../assets/connection-to-nature.jpg';
import igniteimagination from '../assets/ignite-imagination.jpg';
import relaxationtraniquility from '../assets/relaxation-traniquility.jpg';
import lovepassion from '../assets/love-passion.jpg';
import positivityjoy from '../assets/positivity-joy.jpg';

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
      <div className='flex flex-col gap-6 pt-20 px-20 max-w mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold lg:text-6xl font-serif mb-3'>Welcome to Arcana Candles</h1>
          <h1 className='text-xl font-bold lg:text-4xl font-serif text-gray-500'>Where Your Dreams Come True...</h1>
        </div>       
      </div>
      
      <div className='mx-10 sm:mx-40  p-3 flex flex-col gap-8 py-7'>
        <div className='flex sm:mx-auto mx-auto w-full'>
          <img src={promo1} className="p-1 h-30 w-1/2 sm:h-auto rounded-lg" />
          <img src={promo2} className="p-1 h-30 w-1/2 sm:h-auto rounded-lg" />
        </div>
      </div>

      <div className='sm:mx-20 p-3 gap-8 py-7'>
        {products && products.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl font-semibold sm:ml-20 mx-10'>Our Best Sellers...</h2>
            <hr class="border-b-1 border-gray-500 sm:mx-20 mx-10"/>
            <div className='flex flex-wrap gap-4 mx-10 sm:mx-auto '>
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

      <div className='sm:mx-20 p-3 flex flex-col gap-8 py-7'>
        <h2 className='text-3xl font-semibold sm:mx-20 mx-10'>Find Your Vibe...</h2>
        <hr class="border-b-1 border-gray-500 sm:mx-20 mx-10"/>
        <div className='flex sm:mx-20 mx-10 '>
          <img src={clamclarity} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
          <img src={relaxationtraniquility} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
        </div>
        <div className='flex sm:mx-20 mx-10'>
          <img src={balenceinnerpeace} className="h-auto sm:h-auto w-1/3 rounded-lg px-2 mx-auto" />
          <img src={connectiontonature} className="h-auto sm:h-auto w-1/3 rounded-lg px-2 mx-auto" />
          <img src={igniteimagination} className="h-auto sm:h-auto w-1/3 rounded-lg px-2 mx-auto" />
        </div>
        <div className='flex sm:mx-20 mx-10'>
          <img src={positivityjoy} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
          <img src={lovepassion} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
        </div>
      </div>

      <div className='sm:mx-20 p-3 flex flex-col gap-8 py-7'>
        <h2 className='text-3xl font-semibold sm:mx-20 mx-10'>Customer Feedbacks...</h2>
        <hr class="border-b-1 border-gray-500 sm:mx-20 mx-10"/>
        <div className='flex sm:mx-20 mx-10'>
          <img src={feedback1} className="h-auto w-1/3 sm:h-auto rounded-lg p-2" />
          <img src={feedback1} className="h-auto w-1/3 sm:h-auto rounded-lg p-2" />
          <img src={feedback1} className="h-auto w-1/3 sm:h-auto rounded-lg p-2" />
        </div>
      </div>
    </div>
  );
}
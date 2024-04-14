import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import feedback1 from '../assets/feedback1.jpg';
import promo1 from '../assets/promo1.jpg';
import promo2 from '../assets/promo2.jpg';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/product/getproducts?limit=4');
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
              to={'/products'}
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
          <img src={"https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/Moods%2FBalance-and%20%20Inner-peace.png?alt=media&token=b8186b2b-1aa0-4089-93f9-87107e6f6e41"} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
          <img src={"https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/Moods%2FCalm-and-Clarity.png?alt=media&token=1750e461-a640-4ce7-b0f8-83ae1818d758"} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
        </div>
        <div className='flex sm:mx-20 mx-10'>
          <img src={"https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/Moods%2FIgnite-Imagination.png?alt=media&token=a172983c-89da-4649-885f-c970350b5d70"} className="h-auto sm:h-auto w-1/3 rounded-lg px-2 mx-auto" />
          <img src={"https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/Moods%2FPositivity-and-Joy.png?alt=media&token=ff4151e9-1b14-4006-b0f1-451ff27081a7"} className="h-auto sm:h-auto w-1/3 rounded-lg px-2 mx-auto" />
          <img src={"https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/Moods%2FRelaxation-and-Tranquility.png?alt=media&token=b3de069d-c4ab-4d6a-9485-64ebd12914bb"} className="h-auto sm:h-auto w-1/3 rounded-lg px-2 mx-auto" />
        </div>
        <div className='flex sm:mx-20 mx-10'>
          <img src={"https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/Moods%2Fconnection-to-Nature.png?alt=media&token=c516737c-94d4-4f1a-9ff2-f18f831f49ed"} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
          <img src={"https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/Moods%2Flove-and-Passion.png?alt=media&token=a9ffa02c-3685-4d58-b0ed-a50a5ab2f0ca"} className="h-auto sm:h-auto w-1/2 rounded-lg px-2 mx-auto" />
        </div>
      </div>

      <div className='sm:mx-20 p-3 flex flex-col gap-8 py-7'>
        <h2 className='text-3xl font-semibold sm:mx-20 mx-10'>Customer Feedbacks...</h2>
        <hr class="border-b-1 border-gray-500 sm:mx-20 mx-10"/>
        <div className='flex sm:mx-20 mx-10'>
          <img src={feedback1} className="h-auto w-1/2 sm:h-auto rounded-lg p-2" />
          <img src={feedback1} className="h-auto w-1/2 sm:h-auto rounded-lg p-2" />
        </div>
      </div>
    </div>
  );
}
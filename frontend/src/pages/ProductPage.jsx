import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  
  const { productSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);
  const [recentProducts, setRecentProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/product/getproducts?slug=${productSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setProduct(data.products[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productSlug]);

  useEffect(() => {
    try {
      const fetchRecentProducts = async () => {
        const res = await fetch(`/api/product/getproducts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentProducts(data.products);
        }
      };
      fetchRecentProducts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
    
    return (
      
      <main className='flex flex-col mx-auto sm:mx-auto sm:px-20 min-h-screen'>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          {product && product.title}
        </h1>
        <hr class="border-b-1 border-gray-500 sm:mx-20 mx-10"/>

        <div className='flex justify-between p-3 border-slate-500 sm:mx-20 mx-10 text-xs'>
          <span>{product && new Date(product.createdAt).toLocaleDateString()}</span>
            <h2 className='text-xl mt-2 text-center font-serif max-w-xl mx-auto lg:text-xl text-gray-500'>
              {product && product.category}
            </h2>
          <span className='italic'>
            {product && (product.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>

        <div className='mx-auto '>
          <img
            src={product && product.image}
            alt={product && product.title}
            className='p-1 max-h-[250px] w-auto object-cover'
          />
        </div>
        
        <div className='mx-auto p-10 sm:px-20 product-content' dangerouslySetInnerHTML={{ __html: product && product.content }}></div>

        <CommentSection productId={product._id} />

        <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>New Products...</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center mx-10'>
          {recentProducts &&
            recentProducts.map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
      </div>

      </main>
    );
  }
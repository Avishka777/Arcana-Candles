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
      <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          {product && product.title}
        </h1>
        <Link
          to={`/search?category=${product && product.category}`}
          className='self-center mt-5'
        >
          <Button color='gray' pill size='xs'>
            {product && product.category}
          </Button>
        </Link>
        <img
          src={product && product.image}
          alt={product && product.title}
          className='mt-10 p-3 max-h-[600px] w-full object-cover'
        />
        <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
          <span>{product && new Date(product.createdAt).toLocaleDateString()}</span>
          <span className='italic'>
            {product && (product.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className='p-3 max-w-2xl mx-auto w-full product-content'
          dangerouslySetInnerHTML={{ __html: product && product.content }}
        ></div>

        <CommentSection productId={product._id} />

        <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>New Products</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          {recentProducts &&
            recentProducts.map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
      </div>

      </main>
    );
  }
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {

  const openWhatsApp = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  
  return (

    <div className='group relative mx-auto border border-teal-500 hover:border-2 h-[480px] overflow-hidden rounded-lg sm:w-[230px] w-[230px] transition-all'>
      
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt='Product Image'
          className='h-auto w-[240px]  object-cover group-hover:h-[250px] transition-all duration-300 z-20 mx-auto'
        />
      </Link>

      <div className='p-3 flex flex-col gap-2'>
        
        <p className='italic text-xl font-semibold line-clamp-2 '>{product.title}</p>
        <p className='italic text-base text-gray-500'>{product.category}</p>
        <p className='italic text-sm'>{product.price}</p>
        
        <button 
          className='z-10 group-hover:bottom-14 absolute bottom-[50px] left-0 right-0 border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
          onClick={() => openWhatsApp('+94760733387', 'Hello, I am interested in your products.')}>
          Order via WhatsApp.
        </button>

        <Link
          to={`/product/${product.slug}`}
          className='z-10 group-hover:bottom-1 absolute bottom-[00px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          More Details...
        </Link>

      </div>
    </div>
  );
}

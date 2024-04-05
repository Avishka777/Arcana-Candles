import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashProducts() {

  const { currentUser } = useSelector((state) => state.user);
  const [userProducts, setUserProducts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  console.log(userProducts);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/product/getproducts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserProducts(data.products);
          if (data.products.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchProducts();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userProducts.length;
    try {
      const res = await fetch(
        `/api/product/getproducts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserProducts((prev) => [...prev, ...data.products]);
        if (data.products.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    
    <div className='w-full p-5 table-auto overflow-x-scroll md:mx-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && userProducts.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Product Image</Table.HeadCell>
              <Table.HeadCell>Product Name</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userProducts.map((product) => (
              <Table.Body className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  
                  <Table.Cell>{new Date(product.updatedAt).toLocaleDateString()}</Table.Cell>
                  
                  <Table.Cell>
                    <Link to={`/product/${product.slug}`}>
                      <img src={product.image}  alt={product.title} className='w-20 h-10 object-cover bg-gray-500' />
                    </Link>
                  </Table.Cell>
                  
                  <Table.Cell>
                    <Link className='font-medium text-gray-900 dark:text-white'  to={`/product/${product.slug}`} >
                      {product.title}
                    </Link>
                  </Table.Cell>
                  
                  <Table.Cell>{product.price}</Table.Cell>

                  <Table.Cell>{product.category}</Table.Cell>
                  
                  <Table.Cell>
                    <span className='font-medium text-red-500 hover:underline cursor-pointer'>
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-teal-500 hover:underline'
                      to={`/update-product/${product._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show More...
            </button>
          )}
        </>
      ) : (
        <p>You Have No Products Yet.</p>
      )}
    </div>
  );
}
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthProducts, setLastMonthProducts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/getusers?limit=5');
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/product/getproducts?limit=5');
        const data = await res.json();
        if (res.ok) {
          setProducts(data.products);
          setTotalProducts(data.totalProducts);
          setLastMonthProducts(data.lastMonthProducts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comment/getcomments?limit=5');
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchProducts();
      fetchComments();
    }
  }, [currentUser]);
  return (
    <div className='p-5 mx-auto w-full'>
      <div className='flex w-full gap-4 justify-center'>
        
      <div className='flex flex-col p-2 dark:bg-slate-800 gap-4 w-full rounded-md shadow-md'>
          <div className='flex justify-between'>
            <div className='flex flex-row'>
              <HiOutlineUserGroup className='bg-blue-500  text-white rounded-full text-5xl p-3 shadow-lg m-2 ' />
              <h3 className='text-gray-400 text-xl m-4 uppercase'>Total Users</h3>
              <p className='text-xl m-4'>{totalUsers}</p>
            </div>
          </div>
          <div className='flex  gap-2 text-sm ml-3'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>

        <div className='flex flex-col p-2 dark:bg-slate-800 gap-4 w-full rounded-md shadow-md'>
          <div className='flex justify-between'>
            <div className='flex flex-row'>
              <HiAnnotation className='bg-blue-500  text-white rounded-full text-5xl p-3 shadow-lg m-2 ' />
              <h3 className='text-gray-400 text-xl m-4 uppercase'>Total Comments</h3>
              <p className='text-xl m-4'>{totalComments}</p>
            </div>
          </div>
          <div className='flex  gap-2 text-sm ml-3'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              {lastMonthComments}
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>

        <div className='flex flex-col p-2 dark:bg-slate-800 gap-4 w-full rounded-md shadow-md'>
          <div className='flex justify-between'>
            <div className='flex flex-row'>
              <HiDocumentText className='bg-blue-500  text-white rounded-full text-5xl p-3 shadow-lg m-2 ' />
              <h3 className='text-gray-400 text-xl m-4 uppercase'>Total Products</h3>
              <p className='text-xl m-4'>{totalProducts}</p>
            </div>
          </div>
          <div className='flex  gap-2 text-sm ml-3'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              {lastMonthProducts}
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>
      </div>

      {/* Displaying Recent Users And Recent Announcements */}
      <div className='flex flex-row gap-4 py-3  min-w-full'>
        
        {/* Recent Users Component */}
        <div className='flex flex-col w-3/12 shadow-md rounded-md dark:bg-gray-800'>
          <div className='flex justify-between  p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Recent users</h1>
            <Button outline gradientDuoTone='purpleToPink'>
              <Link to={'/dashboard?tab=users'}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>User name</Table.HeadCell>
            </Table.Head>
            {/* Displaying List Of Recent Users */}
            {users &&
              users.map((user) => (
                <Table.Body key={user._id} className='divide-y'>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell>
                      <img
                        src={user.profilePicture}
                        alt='user'
                        className='w-10 h-10 rounded-full bg-gray-500'
                      />
                    </Table.Cell>
                    <Table.Cell className='w-13 text-xs' >{user.userName}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>

        <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
          <div className='flex justify-between  p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Recent comments</h1>
            <Button outline gradientDuoTone='purpleToPink'>
              <Link to={'/dashboard?tab=comments'}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell>Likes</Table.HeadCell>
            </Table.Head>
            {comments &&
              comments.map((comment) => (
                <Table.Body key={comment._id} className='divide-y'>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell className='w-96'>
                        <p className='line-clamp-2'>{comment.content}</p>
                    </Table.Cell>
                    <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
        <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
          <div className='flex justify-between  p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Recent Products</h1>
            <Button outline gradientDuoTone='purpleToPink'>
              <Link to={'/dashboard?tab=products'}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Product image</Table.HeadCell>
              <Table.HeadCell>Product Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
            </Table.Head>
            {products &&
              products.map((product) => (
                <Table.Body key={product._id} className='divide-y'>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell>
                      <img
                        src={product.image}
                        alt='user'
                        className='w-14 h-10 rounded-md bg-gray-500'
                      />
                    </Table.Cell>
                    <Table.Cell className='w-96'>{product.title}</Table.Cell>
                    <Table.Cell className='w-5'>{product.category}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateProduct() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Add Product</h1>
      <form className='flex flex-col gap-4'>
        <TextInput
            type='text'
            placeholder='Product Name'
            required
            id='title'
            className='flex-1'
        />
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Price'
            required
            id='price'
            className='flex-1'
          />
          <Select>
            <option value='uncategorized'>Select a category</option>
            <option value='Relaxation & Tranquillity'>Relaxation & Tranquillity</option>
            <option value='Love & Passion'>Love & Passion</option>
            <option value='Clam & Clarity'>Clam & Clarity</option>
            <option value='Balance & Inner Peace'>Balance & Inner Peace</option>
            <option value='Positivity & Joy'>Positivity & Joy</option>
            <option value='Connection to Nature'>Connection to Nature</option>
            <option value='Ignite Imagination'>Ignite Imagination</option>
          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput type='file' accept='image/*' />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
          >
            Upload image
          </Button>
        </div>
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
        />
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Add Product
        </Button>
      </form>
    </div>
  );
}
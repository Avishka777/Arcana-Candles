import React from 'react'

export default function Contact() {

  const openWhatsApp = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className='flex flex-col gap-6 pt-20 px-50 max-w mx-auto'>
      
    <h1 className='sm:text-5xl text-2xl font-semibold sm:ml-20 mx-10 text-center'>“WELCOME TO ARCANA CANDLES”</h1>
    <h1 className='sm:text-5xl text-2xl font-semibold sm:ml-20 mx-10 text-center text-gray-500'>“WHERE INSPIRATION MEETS ILLUMINATION”</h1>
    
    <h1 className='sm:text-3xl text-2xl sm:ml-20 mx-10 text-center mt-6 font-serif'>- Follow Us -</h1>
    <hr class="border-b-1 border-gray-500 sm:mx-20 mx-10"/>
    <div className='flex mx-auto px-10'>
      
      <a onClick={() => openWhatsApp('+94760733387', 'Hello, I am interested in your products.')}   target="_blank" >
        <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icons%2Ficon-whatsapp.png?alt=media&token=bc7ce056-ed6a-47ad-b224-4c1adf78bc2e" className="sm:h-40 sm:w-auto rounded-lg p-2  " alt="Whatsapp Icon" />
      </a>
      <a href='https://web.facebook.com/profile.php?id=61556755573437&mibextid=ZbWKwL&_rdc=1&_rdr'  target="_blank" >
        <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icons%2Ficon-facebook.png?alt=media&token=fb1760b0-22be-4099-8d73-b018e3cfb62d" className="sm:h-40 sm:w-auto rounded-lg p-2 " alt="Facebook Icon" />
      </a>
      <a href='https://www.instagram.com/arcana.candles.lk?igsh=N3UxbWFrcDRscHl6'  target="_blank" >
        <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icons%2Ficon-instagram.png?alt=media&token=4d2a9a0e-4434-43d6-9426-1b80e4451ab9" className="sm:h-40 sm:w-auto rounded-lg p-2 " alt="Instagram Icon" />
      </a>
      <a href='https://www.tiktok.com/@arcana.candles.lk?_t=8kr9uO37df6&_r=1'  target="_blank" >
        <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icons%2Ficon-tiktok.png?alt=media&token=08fd9c2c-2d95-49d0-b93d-22d3a2989569" className="sm:h-40 sm:w-auto rounded-lg  p-2 " alt="Tiktok Icon" />
      </a>
    </div>

    <div className='mx-auto mb-10'>
      <p className='text-center sm:text-3xl text-xl mb-2'><b>Mobile</b> - <a href="tel:+94760733387">+94 76 0733 387</a></p>
      <p className='text-center sm:text-3xl text-xl mb-2'><b>Email</b> - <a href="mailto:brandsphere.contact@gmail.com">brandsphere.contact@gmail.com</a></p>
      <p className='text-center sm:text-3xl text-xl'><b>Address</b> - Colombo, Sri Lanka</p>
    </div>


    



  </div>
  )
}

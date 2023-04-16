import Button from './components/button';
import Navbar from './components/navbar';
import mockups from './images/image-mockups.png'
import onboarding from './images/icon-onboarding.svg'
import online from './images/icon-online.svg'
import budgeting from './images/icon-budgeting.svg'
import api from './images/icon-api.svg'
import currency from './images/image-currency.jpg'
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import confetti from './images/image-confetti.jpg'
import logo from './images/logo.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import pinterest from './images/icon-pinterest.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import data from './data/data'



function App({images}) {
  return (
    <div className=" h-screen absolute">
      
      <div className='relative w-full'>
        <Navbar/>
      </div>

      <div>
        <div className='md:overflow-hidden md:flex w-full '>
          <div className='absolute md:overflow-hidden bg-intromobile  h-auto md:h-screen md:bg-[0%] w-full md:bg-introdesktop md:left-[35%] md:z-[-2] md:top-[-5%] bg-no-repeat p-4 top-[0%] z-[-1] '>
            <img className='w-[70%] md:w-[90%] md:ml-[30%]' src={mockups} alt="asset"/>
          </div>
          <div className='pt-[99%] md:pt-[10%] md:pr-[57%]  px-[9.5%] text-center'>
            <h1 className='text-3xl md:text-3xl text-slate-700 text-[hsl(233, 8%, 62%)]'>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>
            <div className=''>
            <Button/>
            </div>
          </div>
          
        </div>
        <div className=' px-[9.5%] py-[10%] bg-slate-100'>
        <div className='text-center md:text-start md:w-[80%]'>
          <h1 className='text-3xl md:text-[20px]'>Why choose Easybank?</h1>
          <p lassName=' md:text-[12px]'>We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
        </div>
        <div className='block text-center md:text-start w-full justify-center md:flex  items-center'>
          <div>
            <img className="ml-[35%] my-[5%]"  src ={online} alt=""/>
            <h2 className="text-2xl md:text-[20px] my-[5%]">Online Banking</h2>
            <p className='md:text-[12px]'>Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.</p>
          </div>
          <div>
            <img className="ml-[35%] my-[5%]" src ={budgeting} alt=""/>
            <h2 className="text-2xl md:text-[20px] my-[5%]">Simple budgeting</h2>
            <p className='md:text-[12px]'>See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.</p>
          </div>
          <div>
            <img className="ml-[35%]  my-[5%]" src ={onboarding} alt=""/>
            <h2 className="text-2xl md:text-[20px] my-[5%]">Fast Onboarding</h2>
            <p className='md:text-[12px]'>We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.</p>
          </div>
          <div>
            <img className="ml-[35%] my-[5%]" src ={api} alt=""/>
            <h2 className="text-2xl md:text-[20px] my-[5%]">Open API</h2>
            <p className='md:text-[12px]'>Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.</p>
          </div>
        </div>
       
      </div>
      <div className='px-[5%] py-[5%] bg-slate-50'>
          <h1 className='text-center text-3xl' >Latest Articles</h1>
          <div className='md:flex md:justify-around'>
            <div className="my-[7%] md:w-[80%] md:mx-[1%] bg-white rounded-[10px] shadow-xl">
              <img className="rounded-t-[10px]" src={currency} alt=''/>
              <div className='p-[7%]  '>
                <h4 className="md:text-[10px] text-[12px]">By Claire Robinson</h4>
                <h2 className="text-[25px] md:text-[16px] " >Receive money in any currency with no fees</h2>
                <p className="text-[16px] md:text-[12px] " >The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single …</p>
              </div>
            </div>
            <div className="my-[7%] md:w-[80%] md:mx-[1%] bg-white rounded-[10px] shadow-xl">
            <img className="rounded-t-[10px]" src={restaurant} alt=''/>
              <div className='p-[7%]' >
                <h4 className="md:text-[10px] text-[12px]">By Wilson Hutton</h4>
                <h2 className="text-[25px] md:text-[16px] " >Treat yourself without worrying about money</h2>
                <p className="text-[16px] md:text-[12px] " >Our simple budgeting feature allows you to separate out your spending and set 
                realistic limits each month. That means you …</p>
              </div>
            </div>
            <div className="my-[7%] md:w-[80%] md:mx-[1%] bg-white rounded-[10px] shadow-xl">
              <img className="rounded-t-[10px]" src={plane} alt=''/>
              <div className='p-[7%]' >
                <h4 className="md:text-[10px] text-[12px]">By Wilson Hutton</h4>
                <h2 className="text-[25px] md:text-[16px] " >Take your Easybank card wherever you go</h2>
                <p className="text-[16px] md:text-[12px] " >We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                while you’re abroad. We’ll even show you …</p>
              </div>
            </div>
            <div className="my-[7%] md:w-[80%] md:mx-[1%] bg-white rounded-[10px] shadow-xl">
              <img className="rounded-t-[10px]" src={confetti} alt=''/>
              <div className="p-[7%]">
                <h4 className="md:text-[10px] text-[12px]">By Claire Robinson</h4>
                <h2 className="text-[25px] md:text-[16px] " >Our invite-only Beta accounts are now live!</h2>
                <p className="text-[16px] md:text-[12px] " >After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                It’s easy to request an invite through the site ...</p>
              </div>
            </div>
          </div>
      </div>
      <div className='bg-slate-800 py-[5%]'>
        {/* <img src={logo} alt=''/> */}
        <div className='flex py-[5%] justify-center'  >
          <img src={facebook} alt=''/>
          <img src={youtube} alt=''/>
          <img src={twitter} alt=''/>
          <img src={pinterest} alt=''/>
          <img src={instagram} alt=''/>
        </div>
        <ul className='text-[16px] pt-[5%] text-white text-center' >
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Support</li>
          <li>Private Policy</li>
        </ul>
        <div>
          <Button/>
        </div>
        <footer className='text-white text-center'>© Easybank. All Rights Reserved</footer>
      </div>
      </div>
   

      
    </div>
  );
}

export default App;

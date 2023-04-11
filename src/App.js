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


function App() {
  return (
    <div className=" h-screen absolute">
      
      <div className='relative w-full'>
        <Navbar/>
      </div>

      <div className=' '>
        <div className='absolute bg-intromobile bg-no-repeat p-4 top-[0%] z-[-1] '>
          <img  src={mockups} alt="asset"/>
        </div>
        <div className='pt-[99%]  px-[9.5%] text-center'>
          <h1 className='text-3xl text-[hsl(233, 8%, 62%)]'>Next generation digital banking</h1>
          <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
           for spending, saving, budgeting, investing, and much more.</p>
        </div>
        <div className=''>
          <Button/>
        </div>
        <div className=' px-[9.5%] py-[10%] bg-slate-100'>
        <div className='text-center'>
          <h1 className='text-3xl'>Why choose Easybank?</h1>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
        </div>
        <div className='block text-center w-full justify-center  items-center'>
          <div>
            <img className="ml-[35%] my-[5%]"  src ={online} alt=""/>
            <h2 className="text-2xl my-[5%]">Online Banking</h2>
            <p>Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.</p>
          </div>
          <div>
            <img className="ml-[35%] my-[5%]" src ={budgeting} alt=""/>
            <h2 className="text-2xl my-[5%]">Simple budgeting</h2>
            <p>See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.</p>
          </div>
          <div>
            <img className="ml-[35%] my-[5%]" src ={onboarding} alt=""/>
            <h2 className="text-2xl my-[5%]">Fast Onboarding</h2>
            <p>We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.</p>
          </div>
          <div>
            <img className="ml-[35%] my-[5%]" src ={api} alt=""/>
            <h2 className="text-2xl my-[5%]">Open API</h2>
            <p>Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.</p>
          </div>
        </div>
       
      </div>
      <div className='px-[5%] py-[5%] bg-slate-50'>
          <h1 className='text-center text-3xl' >Latest Articles</h1>
          <div className="my-[7%] bg-white rounded-[10px]">
            <img className="rounded-t-[10px]" src={currency} alt=''/>
            <div className='p-[7%] '>
              <h4 className="text-[12px]">By Claire Robinson</h4>
              <h2 className="text-[25px] " >Receive money in any currency with no fees</h2>
              <p className="text-[16px] " >The world is getting smaller and we’re becoming more mobile. So why should you be 
              forced to only receive money in a single …</p>
            </div>
          </div>
          <div className="my-[7%] bg-whi rounded-[10px]te">
          <img className="rounded-t-[10px]" src={restaurant} alt=''/>
            <div className='p-[7%]' >
              <h4 className="text-[12px]">By Wilson Hutton</h4>
              <h2 className="text-[25px] " >Treat yourself without worrying about money</h2>
              <p className="text-[16px] " >Our simple budgeting feature allows you to separate out your spending and set 
              realistic limits each month. That means you …</p>
            </div>
          </div>
          <div className="my-[7%] bg-white rounded-[10px]">
            <img className="rounded-t-[10px]" src={plane} alt=''/>
            <div className='p-[7%]' >
              <h4 className="text-[12px]">By Wilson Hutton</h4>
              <h2 className="text-[25px] " >Take your Easybank card wherever you go</h2>
              <p className="text-[16px] " >We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
              while you’re abroad. We’ll even show you …</p>
            </div>
          </div>
          <div className="my-[7%] bg-white rounded-[10px]">
            <img className="rounded-t-[10px]" src={confetti} alt=''/>
            <div className="p-[7%]">
              <h4 className="text-[12px]">By Claire Robinson</h4>
              <h2 className="text-[25px] " >Our invite-only Beta accounts are now live!</h2>
              <p className="text-[16px] " >After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
              It’s easy to request an invite through the site ...</p>
            </div>
          </div>
      </div>
      </div>
   

      
    </div>
  );
}

export default App;

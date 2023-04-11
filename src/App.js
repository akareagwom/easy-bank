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
      <div>
          <h1 className='text-center text-3xl' >Latest Articles</h1>
          <div>
            <img src={currency} alt=''/>
            <h4></h4>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src={restaurant} alt=''/>
            <h4></h4>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src={plane} alt=''/>
            <h4></h4>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src={confetti} alt=''/>
            <h4></h4>
            <h2></h2>
            <p></p>
          </div>
      </div>
      </div>
   

      
    </div>
  );
}

export default App;

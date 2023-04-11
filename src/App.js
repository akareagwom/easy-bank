import Button from './components/button';
import Navbar from './components/navbar';
import mockups from './images/image-mockups.png'
import onboarding from './images/icon-onboarding.svg'


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
        <div className='text-center px-[9.5%] bg-slate-100'>
        <div>
          <h1 className='text-3xl'>Why choose Easybank?</h1>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
        </div>
        <div>
          <div>
            <img src ={onboarding} alt=""/>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src ={onboarding} alt=""/>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <img src ={onboarding} alt=""/>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
      </div>
   

      
    </div>
  );
}

export default App;

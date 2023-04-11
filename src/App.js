import Button from './components/button';
import Navbar from './components/navbar';
import mockups from './images/image-mockups.png'
// import intro from './images/bg-intro.png'


function App() {
  return (
    <div className=" h-screen absolute">
      
      <div className='relative w-full'>
        <Navbar/>
      </div>

      <div className=' h-screen'>
        <div className='absolute bg-intromobile bg-no-repeat p-4 top-[0%] z-[-1] '>
          <img  src={mockups} alt="asset"/>
        </div>
        <div className='pt-[95%] px-[9.5%] text-center'>
          <h1 className='text-3xl text-[hsl(233, 8%, 62%)]'>Next generation digital banking</h1>
          <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
           for spending, saving, budgeting, investing, and much more.</p>
        </div>
        <div>
          <Button/>
        </div>
      </div>

      
    </div>
  );
}

export default App;

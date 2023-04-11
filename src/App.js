import Navbar from './components/navbar';
import mockups from './images/image-mockups.png'
// import intro from './images/bg-intro.png'


function App() {
  return (
    <div className=" h-screen absolute">
      
      <div className='relative w-full'>
        <Navbar/>
      </div>

      <div className='bg-intromobile bg-no-repeat h-screen'>
        <div className='absolute p-4 top-[-13%] z-20'>
          <img src={mockups} alt="asset"/>
        </div>
        <div className='pt-[80%]'>
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
           for spending, saving, budgeting, investing, and much more.</p>
        </div>
      </div>

      
    </div>
  );
}

export default App;

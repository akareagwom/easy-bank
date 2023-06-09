import Button from './components/button';
import Navbar from './components/navbar';
import mockups from './images/image-mockups.png'
// import currency from './images/image-currency.jpg'
// import restaurant from './images/image-restaurant.jpg'
// import plane from './images/image-plane.jpg'
// import confetti from './images/image-confetti.jpg'
import foot from './images/foot.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import pinterest from './images/icon-pinterest.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import data from './data'
import { useState } from 'react';




function App() {
  const [data, setData] = useState([
    {title:"Online Banking",photo:require('./images/icon-online.svg').default,body:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},
    {title:"Simple budgeting",photo:require('./images/icon-budgeting.svg').default,body:"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."},
    {title:"Fast Onboarding",photo:require('./images/icon-onboarding.svg').default,body:"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."},
    {title:"Open API",photo:require('./images/icon-api.svg').default,body:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}
  ])
  const [info, setInfo] = useState([
    {title:"By Claire Robinson",phrase:"Receive money in any currency with no fees",photo:'image-currency.jpg',body:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"},
    {title:"By Wilson Hutton",phrase:"Treat yourself without worrying about money",photo:'image-restaurant.jpg',body:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"},
    {title:"By Wilson Hutton",phrase:"Take your Easybank card wherever you go",photo:'image-plane.jpg',body:"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"},
    {title:"By Claire Robinson",phrase:"Our invite-only Beta accounts are now live!",photo:'image-confetti.jpg',body:"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."}
  ])
  return (
    <div className=" h-screen font-sans relative">
      
      <div className=' w-full absolute z-[2]'>
        <Navbar/>
      </div>

      <div>
        <div className='md:overflow-hidden bg-intromobile md:bg-introdesktop md:bg-[550%] h-screen  bg-no-repeat md:flex  '>
          <div className=''>
          <div className='absolute md:overflow-x-hidden   h-auto   md:w-[65%] md:h-auto  md:left-[45%] md:z-[1] z-[1] md:top-[-45%] p-4 top-[-15%]  '>
            <img className='w-[100%]  md:w-[80%] md:mt-[30%]  md:ml-[20%]' src={mockups} alt="asset"/>
          </div>
          </div>
          <div className='pt-[99%] md:pt-[20%] md:pr-[57%]  px-[5.5%] md:text-start text-center'>
            <h1 className='text-3xl md:text-3xl text-[#2D314D]'>Next generation digital banking</h1>
            <p className='text-[#9698A6]'>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>
            <div className=''>
            <Button/>
            </div>
          </div>
          
        </div>
        <div className='  px-[5%] py-[5%] bg-slate-100'>
        <div className='text-center md:text-start md:w-[40%]'>
          <h1 className='text-3xl md:text-[25px] text-[#2D314D] '>Why choose Easybank?</h1>
          <p className='text-[#9698A6] md:text-[16px]'>We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
        </div>
        <div >
          <div className='block text-center md:text-start w-full justify-center md:justify-between md:flex p-[0%]  items-center'>
             {data.map((data)=>( 
              <div  key={data.title}>
                <img className=" ml-[35%] w-50% md:ml-[1%]  my-[5%]" src={data.photo} alt=""/>
                <h1 className="text-[#2D314D] text-2xl md:text-[20px] my-[5%]">{data.title}</h1>
                <p className='text-[#9698A6] md:text-[12px]'>{data.body}</p>
              </div> 
             ))}
      
          </div>
          </div>
       
        </div>
        <div className=' px-[5%] py-[5%] bg-slate-50'>
          <h1 className='text-center md:text-start text-3xl' >Latest Articles</h1>
          <div className='md:flex md:justify-around'>
              {info.map((info)=>(
                <div className="my-[7%] md:w-[80%] md:mx-[1%] bg-white rounded-[10px] shadow-xl" key={data.title}>
                    <img className="rounded-t-[2%] " src={info.photo}alt=""/>
                    <div  className='p-[7%]'>
                    <h4 className="text-[#9698A6] md:text-[10px] text-[12px]">{info.title}</h4>
                    <h2 className=" text-[#2D314D] text-[25px] md:text-[16px] ">{info.phrase}</h2>
                    <p className="text-[#9698A6] text-[16px] md:text-[12px] "> {info.body} </p>
                    </div>
                </div>
              ))}
          </div>
      </div>
      <div className='bg-slate-800 md:flex w-full justify-center md:justify-around py-[5%]'>
       
        
        <div className='md:flex mx-[25%] my-[10%] md:m-0 w-[45%] justify-around'>
          <div>
              <div className='text-white'>
                <img src={foot} alt=''/>
              </div>
            <div className='flex py-[5%] justify-center'  >
              <img src={facebook} alt=''/>
              <img src={youtube} alt=''/>
              <img src={twitter} alt=''/>
              <img src={pinterest} alt=''/>
              <img src={instagram} alt=''/>
            </div>
          </div>
          <ul className='text-[16px] pt-[] text-white text-center'>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>  
          <ul className='text-[16px] pt-[] text-white text-center'>
            <li>Careers</li>
            <li>Support</li>
            <li>Private Policy</li>
          </ul>  
              
        </div>

        <div className='md:mt-[1.5%]  '>
          <div className='md:w-[125%] ml-[30%] mr-0 md:ml-0'>
            <Button/>
          </div>
          <footer className='text-white text-center'>© Easybank. All Rights Reserved</footer>
        </div>
      </div>
    </div>
   

      
    </div>
  );
}

export default App;

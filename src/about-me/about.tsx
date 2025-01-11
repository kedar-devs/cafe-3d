import { Html } from "@react-three/drei"

function About() {
  const handleClick = (value:string) => {
    switch(value){
      case 'github':{
        window.open('https://github.com/kedar-devs', '_blank', 'noopener,noreferrer');
        break
      }
      case 'linkedIn':{
        window.open('https://www.linkedin.com/in/kedar-devasthali-0b8b081b5/', '_blank', 'noopener,noreferrer');
        break
      }
      case 'gmail':{
        const email = 'kedard249.kd@gmail.com'; // Replace with your email
        const subject = 'Lets Connect'; // Optional: Replace with your desired subject
        const body = 'Hii Kedar'; // Optional: Replace with your desired body content
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
        break
      }
      case 'resume':
        {
          const fileUrl='/Resume.pdf'
          const fileName='KedarDevasthali.pdf'
          const link=document.createElement('a')
          link.href=fileUrl
          link.download=fileName
          link.click()
          break
        }
    }
    
  };
  return (
    <Html className="w-[65vw] h-[75vh] flex flex-col justify-center items-center bg-black bg-opacity-65 px-8 py-8 rounded-lg text-white" position={[-10,10,-6]} >
        <label className=" font-semibold text-lg text-white ">About Me</label>
        <div className=" border rounded-lg border-white  px-4" style={{lineHeight:1.6}}>
      <h2 className=" font-semibold">Hi there!</h2>
      <p>
        I'm <strong>Kedar Devasthali</strong>, a Full Stack Developer currently working at{" "}
        <strong>Accio Robotics, Bangalore</strong>. I'm deeply passionate about software
        development and thrive on solving challenging problems. As a competitive coder, I've
        successfully solved over <strong>650 problems on LeetCode</strong> and continue to refine my
        skills.
      </p>
      <p>
        Feel free to connect with me through my social media handles to learn more about my work
        and interests.
      </p>
      <p><strong>Thanks for stopping by!</strong></p>
      <div className=" w-full flex justify-center items-center py-4">
      <div className="w-96 grid grid-cols-2 gap-x-4 gap-y-4">
        <div className=" col-span-1 flex flex-col gap-y-2 py-4 justify-center items-center border border-white rounded-xl cursor-pointer" onClick={()=>{handleClick('github')}}>
          <img src='/cafe-3d/github.png' className=" w-24 h-24 rounded-xl" />
          <label className=" font-semibold text-xl">Github</label> 
        </div>
        <div className=" col-span-1 flex flex-col gap-y-2 py-4 justify-center items-center border border-white rounded-xl cursor-pointer" onClick={()=>{handleClick('linkedIn')}}>
          <img src='/cafe-3d/linkedIn.png' className=" w-24 h-24 rounded-xl" />
          <label className=" font-semibold text-xl">Linked In</label> 
        </div>
        <div className=" col-span-1 flex flex-col gap-y-2 py-4 justify-center items-center border border-white rounded-xl cursor-pointer" onClick={()=>{handleClick('gmail')}}>
          <img src='/cafe-3d/gmail.png' className=" w-24 h-24 rounded-xl" />
          <label className=" font-semibold text-xl">Gmail</label> 
        </div>
        <div className=" col-span-1 flex flex-col gap-y-2 py-4 justify-center items-center border border-white rounded-xl cursor-pointer" onClick={()=>{handleClick('resume')}}>
          <img src='/cafe-3d/pdf.png' className=" w-24 h-24 rounded-xl" />
          <label className=" font-semibold text-xl">Resume</label> 
        </div>
      </div>
      </div>
    </div>
    </Html>
  )
}

export default About
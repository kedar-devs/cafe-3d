import { Html } from "@react-three/drei"
type AboutType={
  handleCameraChange:(value:string)=>void
}
function About({handleCameraChange}:AboutType) {
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
        const email = 'kedard249.kd@gmail.com'; 
        const subject = "Let's Connect"; 
        const body = 'Hi Kedar'; 
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
        break
      }
      case 'resume':
        {
          const fileUrl='/cafe-3d/Resume.pdf'
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
    <Html className="w-[65vw] h-[90vh] flex flex-col items-center bg-black bg-opacity-65 px-8 py-2 rounded-lg text-white" position={[-10,9,-4]} >
        <label className=" font-semibold text-2xl text-white ">About Me</label>
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
    <div className=" w-full flex justify-center items-center mt-3">
      <button className=" w-20 py-1 border border-white rounded-lg text-xl font-medium" onClick={()=>{handleCameraChange('Leave')}}>Leave</button>
    </div>
    </Html>
  )
}

export default About
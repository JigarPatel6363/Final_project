 import React from 'react'
 import Navbar from '../componets/Nevbar'
 import Course from '../componets/Course'
 import Footer from '../componets/Footer'
 import list from "../../public/list.json";

 function courses() {

   return (
    <>
<Navbar/> 
{/* <div className='min-h-screen   '><Course/></div> */}
<div className="min-h-screen ">

<Course list={list} />
</div>

<Footer/>
        </>
  );
}

export default courses;




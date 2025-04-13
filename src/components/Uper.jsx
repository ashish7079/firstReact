import React from 'react'
 

function Uper() {
  return (
   <div id="parent" className='w-screen h-screen flex-col flex'>
   <div id="three">
    <div id="child1" className='text-red-600 bold'> NETFLIX </div>
    {/* <p id="child2" className='mt-10 ml-[65pc] bg-black text-white'> English </p> */}
          <div id="child2" className='mt-12 ml-[65pc] bg-black text-white'>    
            <select>
                    <option className='bg-white'>English</option>
                    <option className='bg-white'>Hindi</option>
                </select>  </div>
   <button id='btn1' className='mt-10 ml-[3pc] bg-white'>Sign in</button>
    
   </div>
    <div id="child3">Popular Now&nbsp;&nbsp; &nbsp;&nbsp;Plans&nbsp;&nbsp; &nbsp;&nbsp;Reasons to Join&nbsp;&nbsp;&nbsp;&nbsp; FAQ</div>
    <div id="child4">
</div>

<div id="background">
   <div id="unlimited">
   Unlimited movies, TV <br /> &nbsp;&nbsp;&nbsp;&nbsp;shows and more </div>
   <div id="unlimited1">Starts at ₹149. Cancel at any time.</div>
   <div id="unlimited2">Ready to watch? Enter your email to create or restart your membership.</div>
   <div id="unlimited3">
    <div id="unlimited31">
    <input type="button" id="number"  value= "Email address" placeholder="Email address" /></div>
    <div id="unlimited32"><input type="submit" id="number"value= "Submit" placeholder="Submit  &nbsp;&nbsp; >" required ></input></div>
   </div>
</div>
   </div>
  )
}

export default Uper
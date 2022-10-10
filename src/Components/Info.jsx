import profile from '../assets/profile.jpg'
import envelope from '../assets/mailicon.png'
import indeed from '../assets/indeedicon.png'

function Info() {
  return (
    <div className='info'>
       <img src={profile} className='profile'></img>
       <h1>Jeff Wood</h1>
       <h3>Full Stack Web Developer</h3>
       <h4><a href=''>My Website</a></h4>
       <div className='buttons'>
          <button><img src={envelope}></img>Email</button>
          <button className='blue'><img src={indeed}></img>LinkedIn</button>
       </div>
    </div>
  )
}

export default Info
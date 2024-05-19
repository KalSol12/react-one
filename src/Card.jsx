 import profilePic from './assets/profile.jpg'
 let width=100;
 let height=100;
function Card() {
  return(
  <div className="card">
    <img src={profilePic} className='pic1' alt="profile picture"/>
    <h1 className='card-title'>sol code</h1>
    <p className='card-text'>i make Youtube vidio and play video game</p>
  </div>)
  ;
  
}
export default Card
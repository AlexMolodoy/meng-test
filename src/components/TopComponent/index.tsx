import './styles.css'
function TopComponent () {

  return (
    <div className='topComponentContainer'>
      <div className='navContainer'>
        <div className='navContainerSocial'>
          <a href="https://web.telegram.org/k/"><img src="../assets/telegram.png" alt="telega" className='linkButton' /></a>
          <a href="https://www.instagram.com/"><img src="../assets/instagram.png" alt="inst" className='linkButton'/></a>
          <a href="https://x.com/"><img src="../assets/x.png" alt="x" className='linkButton'/></a>
        </div>
        <button className='navContainerButton'>meng laboratory</button>
      </div>

      <img src="src/assets/logo.png" alt="logo" className="logo" />
      <div className='textContainer'>
        <p className='text'>HI, I'M $MENG!</p>
        <p className='text'>INSPIRED BY AH MENG, HERE TO BRING SMILES AND SWAY INTO YOUR HEARTS!</p>
        <p className='text'>I AM JUST A SWINGIN' ORANGUTAN!</p>
      </div>
      <a href="#" className="navContainerButton joinButton">join community</a>

      <img src="src/assets/meng.png" alt="meng" />
    </div>
  )
}

export default TopComponent

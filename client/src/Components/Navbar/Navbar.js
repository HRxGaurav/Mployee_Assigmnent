import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'
import arrowDown from '../../assets/icons/arrowDown.svg'
import profilePhoto from '../../assets/images/profile.png'


const Navbar = () => {

    const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt='logo' className={styles.logo} onClick={()=>(navigate('/'))}/>
      


      <div className={styles.navigationContainer}>
        
       <div className={styles.first}>Resume Scan</div>
       <div className={styles.second}>New Launch</div>
       <div className={styles.third}>Resume Keyowrds</div>
       <div className={styles.forth}>Resume Services</div>
       <div className={styles.fifth}>Career Blogs</div>
       <div className={styles.sixth}>About Us</div>

      

      <div className={styles.profileContainer}>
      
        <div className={styles.profileDiv}>
          <div className={styles.photoDiv}><img src={profilePhoto} alt='profilephoto' className={styles.profilePhoto}/></div>
          <div className={styles.profileName}>Divyanshu</div>
          <img src={arrowDown} alt='arrowDown' />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

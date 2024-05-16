import React from 'react'
import styles from './RightSide.module.css';
import googleIcon from '../assets/icons/google.svg'
import experienceIcon from '../assets/icons/experience.svg'
import timeIcon from '../assets/icons/time.svg'
import saveIcon from '../assets/icons/save.svg'
import Progress from './Progress';

const RightSide = () => {

  const arr = [87,92,49,95,96,77,57,28,91]
  return (
    <>
    <div className={styles.main}>
      <div className={styles.container}>

        <div className={styles.totalJobText}>Jobs (44)</div>

        {arr.map((val)=>{
          return(
          <div className={styles.jobPostContainer}>
          <div>
            <div className={styles.companyLogoPostDiv}>
              <div className={styles.companyIconDiv}><img src={googleIcon} alt='googleIcon'/></div>
              <div className={styles.jobReqPostDiv}>
                <div className={styles.postName}>UI/UX Designer</div>
                <div className={styles.companyNameRequirement}>
                  <div className={styles.companyName}>Google</div>
                  <div className={styles.greyDotDivider}></div>
                  <div className={styles.Figma}>Figma</div>
                  <div className={styles.Prototyping}>Prototyping</div>
                  <div className={styles.UserInterface}>User Interface</div>
                </div>
              </div>
            </div>


            <div className={styles.companyTypeDiv}>
              <img src={experienceIcon} alt='experienceIcon'/>
              <div className={styles.duration}>0-3 Years</div>
              <div className={styles.hrLine}></div>
              <img src={timeIcon} alt='timeIcon'/>
              <div className={styles.jobType}>Full Time</div>
              <div className={styles.hrLine}></div>
              <div className={styles.postedOn}><span className={styles.postedOnGrey}>Posted on:</span> 02 April 2024</div>
            </div>


            <div className={styles.jobDescriptionDiv}>
              <div className={styles.jobDescriptionDot}></div>
              <div className={styles.jobDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
            </div>
            <div className={styles.jobDescriptionDiv}>
              <div className={styles.jobDescriptionDot}></div>
              <div className={styles.jobDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
            </div>


          </div>



          
          <div className={styles.savePercentDiv}>
            <div className={styles.saveApplyDiv}>
              <div className={styles.applyNow}>Apply Now</div>
              <div className={styles.save}> 
                <div><img src={saveIcon} alt='saveIcon'/></div>
                <div className={styles.saveText}>Save</div>
              </div>
            </div>
            <div>
              <Progress percent={val} />
            </div>
          </div>
        </div>)
        })}
        






      




      </div>
    </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
        <div className={styles.pageText}>Showing <span>1-20</span> from <span>1250</span> data</div>
        <div className={styles.paginationDiv}>
          <div className={styles.selectedPaginationButton}>1</div>
          <div className={styles.paginationButton}>2</div>
          <div className={styles.dotDotDot}>...</div>
          <div className={styles.paginationButton}>8</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default RightSide;
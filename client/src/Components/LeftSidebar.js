import React from "react";
import styles from "./LeftSidebar.module.css";
import jobReqIcon from "../assets/icons/grid-5.svg";
import history from "../assets/icons/history.svg";
import dollar from "../assets/icons/dollar-square.svg";
import people from "../assets/icons/people.svg";
import savedJob from "../assets/icons/savedJob.svg";
import topArrow from "../assets/icons/topArrow.svg";
import help from "../assets/icons/help.svg";
import Settings from "../assets/icons/Settings.svg";
import star from "../assets/icons/star.svg";
import rightArrow from "../assets/icons/rightArrow.svg";

const LeftSidebar = () => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <div className={styles.sideNavDiv}>
            <img src={jobReqIcon} alt="jobResIcon" />
            <div className={styles.sideNavText}>Job Recommendation Tool</div>
          </div>
          <div className={styles.sideNavDiv}>
            <img src={history} alt="history" />
            <div className={styles.sideNavText}>History</div>
          </div>

          <div className={styles.selectedSideNavDiv}>
            <img src={savedJob} alt="savedJob" />
            <div className={styles.selectedSideText}>Saved Jobs</div>
            <img src={topArrow} alt="topArrow"  />
          </div>

          <div className={styles.selectedListItemsDiv}>
            <div className={styles.yellowDot}></div>
            <div className={styles.selectedListText}>UI/UX Designer</div>
          </div>

          <div className={styles.listItemsDiv}>
            <div className={styles.greyDot}></div>
            <div className={styles.ListText}>Web Developer</div>
          </div>
          <div className={styles.listItemsDiv}>
            <div className={styles.greyDot}></div>
            <div className={styles.ListText}>Analyst</div>
          </div>
          <div className={styles.listItemsDiv}>
            <div className={styles.greyDot}></div>
            <div className={styles.ListText}>Lorem Ipsum</div>
          </div>





          <div className={styles.sideNavDiv}>
            <img src={dollar} alt="dollar" />
            <div className={styles.sideNavText}>
              Plans <span style={{ color: "#485066" }}>(Current: Free)</span>
            </div>
          </div>
          <div className={styles.sideNavDiv}>
            <img src={people} alt="people" />
            <div className={styles.sideNavText}>Manage Profiles</div>
          </div>
        </div>







        <div>
          <div className={styles.help}>Help & Support</div>

          <div className={styles.sideNavDiv}>
            <img src={Settings} alt="Settings" />
            <div className={styles.sideNavText}>Settings</div>
          </div>

          <div className={styles.sideNavDiv}>
            <img src={help} alt="help" />
            <div className={styles.sideNavText}>Help Center</div>
          </div>

          <div className={styles.currentPlan} >Current Plan: Free</div>

          <div className={styles.upgradeDiv}>
            <img src={star} alt="star" />
            <div>
              <div>Upgrade to Pro</div>
              <div>Get all features</div>
            </div>
            <img src={rightArrow} alt="rightArrow" className={styles.rightArrow}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;

import Link from "next/link";
import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

const resumeDownload =
  "https://doc-0g-3c-docstext.googleusercontent.com/export/hhg3d4r82c7inco0petrpken14/jbnt5272r5746bfekevnc9tck8/1688317490000/104882856472236798115/111332808816389709313/1IALXZFBO9ohG8RqTWMqSLvDNsge2AfBJB9KvwVV_0yE?format=docx&dat=ANh7AEyYuV5dqqQWLjju5ielTPN7mD3v3xonM_W8N3mNI4xIGhgUn1xaWaX7koq_qpoV8Jck0AQOpGYqQETgzFKU1BEGUkAGcsmCcnGbrl68RhpgeFDT3ypPDTp3VdC18Et0ugxJayjLbZU96P-HUm7LYdGX_nX-BURTvI6zWIDajuD7CYJFyuUnu12Xv4MazE98U-Bf130Ep-xsBmsEdt3GqjZLZDEXxYk16EFNH-dXJFwkNYChOKGiLYPcBJk15elRTc9ACWA2fhJWek6POZxbQ1g2_LWuqiFizexk2d76suZituIvzwiCu_pn89JakkTeOYV4mUBl2EYMFpVx1SfijSdtk2iogHR1lgrSzpD2GON_01-K1iAvjGM-L_Iyx3LNjcmK_qlWaEOI7bfWfHoSK1G2UzSMZl71rCkivDnnbyCS3OOoyeVUJyBiCwrboYFS2pvxrD7EXIbz9B49YIPElzGUBVgiTzUPBLPy-iVTJTGjhkyJEJ5EysXYxlBq4Uh8-xMVf1P_i8WJ1nl59FkRw6KE8qn2r3foFJgu5en5m5fqz-KhSN_b1Y7CyksAessgISPfHRycB_oAh6Fjw2KTPQUb6Oc72lyTZ786Y3CSYPythNgfropw2df9t3KP0XxKu_okw4XiAk1-fgsxW0yy--5jZ8jwJI7yl4ochCJpoSOu05dyn8-eRB_OYJHtl0kxhu7C-rtupsfuP4V4YCtr2zxQhnIC17KNDFTFcz6sJdIwqfF8npX4iDimRI3SopSK-TwipYZKaiuWvNwuQEFQ0_bkucrVN8-ln6UN1t1Rou2US0dfE3HF_ePdFdVUz6Euhw9bM0eANUedXGrFuwoF1o2AmAI3d7Eyctn0peQCTZe97JMNylSuvPe6I6oMqnDgw_WHzaQUc-4ujmZg3mg5dawl49W8cgj17y_juOy1YIy4CNK27ZyGHS20";

const Experience = () => (
  <Fragment>
    <div className='resume-card-header'>
      <div className='resume-card-name'>
        <i className='fa fa-briefcase' /> Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className='resume-card-body experience'>
      <div className='resume-card-body-container second-font'>
        {/* Single Experience Starts */}
        <div className='resume-content'>
          <h6 className='uppercase'>
            <span>Web Designer - </span>Envato
          </h6>
          <span className='date'>
            <i className='fa fa-calendar-o' /> 2015 - 2023
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className='separator' />
        {/* Single Experience Starts */}
        <div className='resume-content'>
          <h6 className='uppercase'>
            <span>Web Developer - </span>Google
          </h6>
          <span className='date'>
            <i className='fa fa-calendar-o' /> 2011 - 2015
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className='separator' />
        {/* Single Experience Starts */}
        <div className='resume-content'>
          <h6 className='uppercase'>
            <span>Community Manager - </span>Adobe
          </h6>
          <span className='date'>
            <i className='fa fa-calendar-o' /> 2007 - 2011
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className='resume-card-header'>
      <div className='resume-card-name'>
        <i className='fa fa-graduation-cap' /> Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className='resume-card-body education'>
      <div className='resume-card-body-container second-font'>
        {/* Single Education Starts */}
        <div className='resume-content'>
          <h6 className='uppercase'>
            <span>Engineering Diploma - </span>Oxford University
          </h6>
          <span className='date'>
            <i className='fa fa-calendar-o' /> 2015 - 2023
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Education Ends */}
        <span className='separator' />
        {/* Single Education Starts */}
        <div className='resume-content'>
          <h6 className='uppercase'>
            <span>Masters Degree - </span>Paris University
          </h6>
          <span className='date'>
            <i className='fa fa-calendar-o' /> 2011 - 2015
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Education Ends */}
        <span className='separator' />
        {/* Single Education Starts */}
        <div className='resume-content'>
          <h6 className='uppercase'>
            <span>Bachelor Degree - </span>Berlin Higher Institute
          </h6>
          <span className='date'>
            <i className='fa fa-calendar-o' /> 2007 - 2011
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium orci sit amet mi ullamcorper
          </p>
        </div>
        {/* Single Education Ends */}
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className='resume-card-header'>
      <div className='resume-card-name'>
        <i className='fa fa-star' /> Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className='resume-card-body skills'>
      <div className='resume-card-body-container second-font'>
        <div className='row'>
          {/* Skills Row Starts */}
          <div className='col s6'>
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>html</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>javascript</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star-half-empty' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>css</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star-half-empty' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>php</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star-o' />{" "}
                <i className='fa fa-star-o' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>jquery</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>angular js</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star-o' />{" "}
                <i className='fa fa-star-o' />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className='col s6'>
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>wordpress</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star-half-empty' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>joomla</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' />{" "}
                <i className='fa fa-star-half-empty' />{" "}
                <i className='fa fa-star-o' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>magento</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star-o' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>drupal</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>Adobe Photoshop</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star-o' />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className='resume-content'>
              <h6 className='uppercase'>Adobe illustrator</h6>
              <p>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' />{" "}
                <i className='fa fa-star-half-empty' />{" "}
                <i className='fa fa-star-o' />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName='About'
      title={{ first: "About", last: "ME" }}
    >
      <div className='bl-content'>
        {/* Main Heading Starts */}
        <div className='container page-title custom-page-title'>
          <h2 className='center-align'>
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className='container infos'>
          {/* Divider Starts */}
          <div className='divider center-align'>
            <span className='outer-line' />
            <span className='fa fa-vcard' aria-hidden='true' />
            <span className='outer-line' />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className='row'>
            {/* Picture Starts */}
            <div className='col s12 m4 profile-picture show-on-medium-and-down section-padding'>
              <img
                src='images/men.jpg'
                className='responsive-img my-picture'
                alt='My Photo'
              />
            </div>
            {/* Picture Ends */}
            <div className='col s12 m8 l12 xl12 personal-info section-padding'>
              <h6 className='uppercase'>
                <i className='fa fa-user' /> Personal Info
              </h6>
              <div
                className='col m12 l12 xl9 p-none'
                style={{ marginBottom: "38px", width: "100%" }}
              >
                <p style={{ marginBottom: "16px" }} className='second-font'>
                  <span
                    style={{
                      textTransform: "capitalize",
                      fontSize: "24px",
                      fontWeight: "700",
                      display: "inline-block",
                      marginRight: "6px",
                    }}
                    className='my-name-is'
                  >
                    {" "}
                    <span style={{ fontSize: "32px" }}>M</span>ohammed Kilany
                  </span>
                  {"   "}
                  is an award-winning social entrepreneur with entrepreneurship
                  in his blood and DNA. He has founded six companies, with two
                  successful exits, and has been recognized as one of the best
                  22 social innovators in MENA by Synergos. He holds an MBA from
                  Kellogg School of Management and is an Ashoka fellow.
                </p>
                {/* <hr /> */}
                <p
                  style={{ marginBottom: "16px", marginLeft: "6px" }}
                  className='second-font'
                >
                  Kilany is the CEO of Fanera, the first social network for and
                  by football fans, with over 500K active users. The platform
                  was piloted in partnership with the host of the 2022 World
                  Cup, and Kilany's leadership has helped the company grow
                  rapidly.
                </p>
                {/* <hr /> */}
                <p
                  style={{ marginBottom: "16px", marginLeft: "6px" }}
                  className='second-font'
                >
                  In addition to Fanera, Kilany co-founded Souktel, a company
                  that connects job seekers and employers with jobs, and Sabbar,
                  a crowdfunding platform that helps disadvantaged people get
                  their projects funded through storytelling videos.
                </p>
                {/* <hr /> */}
                <p
                  style={{ marginBottom: "16px", marginLeft: "6px" }}
                  className='second-font'
                >
                  Kilany is also an active mentor and supporter of the
                  entrepreneurship community in MENA, having mentored over 100+
                  startups through programs such as Founder Institute, Hult
                  Prize, Startup Weekends, and Techween. He has judged 10+
                  competitions and published a series of startup videos on his
                  Facebook page, where he has over 90K followers. Kilany also
                  gave an inspirational TEDx speech entitled “Creativity loves
                  Constraints.”
                </p>
                {/* <hr /> */}
                <p
                  style={{ marginBottom: "16px", marginLeft: "6px" }}
                  className='second-font'
                >
                  Recently, Kilany was honored as one of Business Elite's "40
                  Under 40" in 2023, a prestigious award program that recognizes
                  outstanding young executives and entrepreneurs worldwide,
                  creating networking opportunities for up-and-coming leaders.
                </p>
                {/* <hr /> */}
                <p className='second-font' style={{ marginLeft: "6px" }}>
                  Connect with Mohammed Kilany to explore collaboration
                  opportunities and tap into his expertise in entrepreneurship,
                  business leadership, and driving impactful social change.
                </p>
              </div>
              {/* <div className='col s12 m12 l6 p-none'>
                <ul className='second-font list-1'>
                  <li>
                    <span className='font-weight-700'>First Name: </span>
                    Mohammed
                  </li>
                  <li>
                    <span className='font-weight-700'>Last Name: </span>
                    Kilany
                  </li>
                  <li>
                    <span className='font-weight-700'>Date of birth: </span>
                    21 june 1990{" "}
                  </li>
                  <li>
                    <span className='font-weight-700'>Nationality: </span>
                    Russian
                  </li>
                  <li>
                    <span className='font-weight-700'>Freelance: </span>
                    Available
                  </li>
                </ul>
              </div>
              <div className='col s12 m12 l6 p-none'>
                <ul className='second-font list-2'>
                  <li>
                    <span className='font-weight-700'>Phone: </span>+34 21 18 40
                    10
                  </li>
                  <li>
                    <span className='font-weight-700'>Address: </span>
                    Moscow, Russia
                  </li>
                  <li>
                    <span className='font-weight-700'>Email: </span>
                    you@yourwebsite.com
                  </li>
                  <li>
                    <span className='font-weight-700'>Spoken Langages: </span>
                    Arabic - English
                  </li>
                  <li>
                    <span className='font-weight-700'>Skype: </span>
                    mark.smith
                  </li>
                </ul>
              </div> */}
              <a href={resumeDownload} className='btn font-weight-700'>
                Download Resume <i className='fa fa-file-pdf-o' />
              </a>
              <Link href={`/blog-${dark ? "dark" : "light"}`}>
                <a className='btn btn-blog font-weight-700'>
                  My Blog <i className='fa fa-edit' />
                </a>
              </Link>
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className='resume-container'>
          <div className='container'>
            <p style={{ display: "none" }}>{width}</p>
            <div className='valign-wrapper row'>
              {/* Resume Menu Starts */}
              <div className='resume-list col l4 section-padding'>
                <div
                  className={`resume-list-item ${
                    activeState.active === 0 ? "is-active" : ""
                  }`}
                  data-index={0}
                  id='resume-list-item-0'
                >
                  <div
                    className='resume-list-item-inner'
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className='resume-list-item-title uppercase'>
                      <i className='fa fa-briefcase' /> Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? "is-active" : ""
                  }`}
                  data-index={1}
                  id='resume-list-item-1'
                >
                  <div
                    className='resume-list-item-inner'
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className='resume-list-item-title uppercase'>
                      <i className='fa fa-graduation-cap' /> Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? "is-active" : ""
                  }`}
                  data-index={2}
                  id='resume-list-item-2'
                >
                  <div
                    className='resume-list-item-inner'
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className='resume-list-item-title uppercase'>
                      <i className='fa fa-star' /> Skills
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className='col s12 m12 l8 resume-cards-container section-padding'>
                  <div className='resume-cards'>
                    <div className='resume-card resume-card-0'>
                      <Experience />
                    </div>
                    <div className='resume-card resume-card-1'>
                      <Education />
                    </div>
                    <div className='resume-card resume-card-2'>
                      <Skills />
                    </div>
                  </div>
                </div>
              ) : (
                <div className='col s12 m12 l8 resume-cards-container section-padding'>
                  <div className='resume-cards'>
                    {/* Experience Starts */}
                    <div
                      className={`resume-card resume-card-0 ${
                        activeState.active == 0
                          ? "front"
                          : activeState.active == 2
                          ? "back"
                          : "back-back"
                      }`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={`resume-card resume-card-1 ${
                        active == 1
                          ? "front"
                          : active == 0
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={`resume-card resume-card-2 ${
                        active == 2
                          ? "front"
                          : active == 1
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
        {/* Fun Facts Starts */}
        {/* <div className='container badges'> */}
        {/* <div className='row'> */}
        {/* Fact Badge Item Starts */}
        {/* <div className='col s12 m4 l4 center-align'>
              <h3>
                <i className='fa fa-briefcase' />
                <span className='font-weight-900'>4+</span>
              </h3>
              <h6 className='uppercase font-weight-700'>Years Experience</h6>
            </div> */}
        {/* Fact Badge Item Ends */}
        {/* Fact Badge Item Starts */}
        {/* <div className='col s12 m4 l4 center-align'>
              <h3>
                <i className='fa fa-handshake-o' />
                <span className='font-weight-900'>89+</span>
              </h3>
              <h6 className='uppercase font-weight-700'>Done Projects</h6>
            </div> */}
        {/* Fact Badge Item Ends */}
        {/* Fact Badge Item Starts */}
        {/* <div className='col s12 m4 l4 center-align'>
              <h3>
                <i className='fa fa-heart-o' />
                <span className='font-weight-900'>77+</span>
              </h3>
              <h6 className='uppercase font-weight-700'>Happy customers</h6>
            </div> */}
        {/* Fact Badge Item Ends */}
        {/* </div> */}
        {/* </div> */}
        {/* Fun Facts Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);

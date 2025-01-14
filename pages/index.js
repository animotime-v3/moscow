import { memo, useContext, useEffect } from "react";
import Portfolio from "../src/components/Portfolio";
import TypingAnimation from "../src/components/TypingAnimation";
import { Context } from "../src/context/context";

import dynamic from "next/dynamic";
import GetInTouch from "../src/components/GetInTouch";
import Layout from "../src/layout/Layout";

const ProjectDetails = dynamic(
  () => import("../src/components/ProjectDetails"),
  {
    ssr: false,
  }
);

const AboutUs = dynamic(() => import("../src/components/AboutUs"), {
  ssr: false,
});

const Index = () => {
  const { nav } = useContext(Context);
  useEffect(() => {
    document.querySelector("body").classList.remove("blog");
  }, []);
  return (
    <Layout>
      <div className='main-picture men hide-on-med-and-down'>
        <div className='socialMedia'>
          <ul className='list-inline social social-intro center-align p-none'>
            <li className='facebook'>
              <a
                href='http://facebook.com/kilanyworld'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-facebook' />
              </a>
            </li>
            <li className='twitter'>
              <a href='#'>
                <i className='fa fa-twitter' />
              </a>
            </li>
            <li className='google-plus instagram'>
              <a
                href='https://www.instagram.com/kilanyworld/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-instagram' />
              </a>
            </li>
            <li className='linkedin'>
              <a
                href='https://www.linkedin.com/in/kilany1982/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-linkedin' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id='bl-main'
        className={`bl-main ${nav !== null ? "bl-expand-item" : ""}`}
      >
        {/* Top Left Section Starts */}
        <section className='topleft'>
          <div className='bl-box row valign-wrapper'>
            <div className='row valign-wrapper mb-0'>
              <div className='title-heading'>
                <div className='selector uppercase' id='selector'>
                  <h3 className='ah-headline p-none m-none clip is-full-width'>
                    <span className='font-weight-400'>Hi There ! {`I'm`}</span>
                    <span className='my-name'>Mo Kilany</span>
                    <TypingAnimation />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutUs />
        <Portfolio />
        <GetInTouch />
        <ProjectDetails />
      </div>
    </Layout>
  );
};
export default memo(Index);

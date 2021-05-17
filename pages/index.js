import Head from 'next/head';
import React from 'react';
import { Mail, Twitter, Instagram } from "react-feather";
import { getDownloadURL } from '../internal/getDownloadURL';
import { DownloadChoiceModal } from '../components/DownloadChoiceModal';
import { Button } from 'react-bootstrap';

const home = () => {
  // Set up state for tracking download button modal visibility
  const [modalVisible, setModalVisible] = React.useState(false);
  // Get download URL (is false if not iOS/Android dev)
  const downloadURL = getDownloadURL();

  return (
    <div>
      <DownloadChoiceModal showing={modalVisible} onChange={(newValue) => setModalVisible(newValue)} />
      <Head>
        <title>MyBalance, supported by Abri</title>
        <link rel="shortcut icon" href="/assets/img/Web_Icon_1024px.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link> 
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
    
      {/* Navigation */}
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img
              src="/assets/img/Web_Icon_1024px.png"
              width="50"
              height="50"
              className="d-inline-block align-top pr-1"
              alt="MyBalance supported by Abri logo"
            />
            MyBalance
          </a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#help">Help</a></li>
              <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Masthead */}
      <header class="masthead">
        {/* Next doesn't like the style tag in the below div.  */}
        <div
          id="bg-vid-container"
        // style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;"
        // I've moved these stlyes to the globals.css file, line 413. 
        >
          <iframe
            id="bg-video"
            src="https://player.vimeo.com/video/291648067?background=1"
            frameborder="0"
            allow="autoplay;"
            allowfullscreen
          >
          </iframe>
        </div>
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
              <h1 class="text-uppercase text-white font-weight-bold">Low Carbon Living</h1>
              <hr class="divider my-4" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 font-weight-light mb-5">Act against Climate Change</p>
              {/* If download URL is not false, clicking download should go straight to store */}
              {downloadURL && <a class="btn btn-primary btn-xl js-scroll-trigger" href={downloadURL}>Download</a>}
              {/* If downloadURL is false, show DownloadChoiceModal on click */}
              {!downloadURL && <Button className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => setModalVisible(true)}>Download</Button>}
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section class="page-section bg-primary" id="climate-change">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center my-auto">
              <h2 class="text-white mt-0">Care about Climate Change?</h2>
              <hr class="divider light my-4" />
              <p class="text-white-50 mb-4">If you care about our planet and believe like we do that it should be
              here for future generations to enjoy then you likely need to make some lifestyle changes.
              MyBalance has been designed to help you take those steps to live a low or zero carbon life!</p>
              <a class="btn btn-light btn-xl js-scroll-trigger" href="#about">Get Started!</a>
            </div>
            <div class="col-lg-6 text-center my-4 video-border">
              <div style={{padding: "56.25% 0 0 0", position: 'relative'}}>
              <iframe src="https://player.vimeo.com/video/546426014?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} title="MyBalance.mov">
                </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step section */}
      <section class="page-section" id="about">
        <div class="container">

          {/* Start row */}
          <div class="row">

            <div class="col-sm-6 order-md-1">
              <div class="mt-5 mb-5">
                <div class="textbox">
                  <h3 class="step-number h4 mb-2"><i>Step 1</i></h3>
                  <h3 class="h4 mb-2">Let's get going, calculate your footprint</h3>
                  <p class="text-muted mb-0">Using MyBalance is easy, it starts with calculating your existing
                  carbon footprint which takes a couple of minutes to complete</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 order-md-2">
              <div class="text-center mt-5 mb-5">
                <img src="/SA_1.png" class="mockup-image SA-slides"
                  alt="Self Assessment"></img>
                <img src="/SA_2.png" class="mockup-image SA-slides"
                  alt="Self Assessment"></img>
                <img src="/SA_3.png" class="mockup-image SA-slides"
                  alt="Self Assessment"></img>
                <img src="/SA_4.png" class="mockup-image SA-slides"
                  alt="Self Assessment"></img>
                {/* Added closing img tags above. */}
              </div>
            </div>

            {/* End row */}
          </div>

          <hr class="divider my-4" />

          {/* Start row */}
          <div class="row">

            <div class="col-sm-6 order-md-2">
              <div class="mt-5 mb-5">
                <div class="textbox">
                  <h3 class="step-number h4 mb-2"><i>Step 2</i></h3>
                  <h3 class="h4 mb-2">Start making changes, get in shape</h3>
                  <p class="text-muted mb-0">Making changes do not need to be difficult, from stage 1
                  MyBalance will generate a unique list for you generated from your personal footprint to
                  highlight lifestyle changes you may wish to consider</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 order-md-1">
              <div class="text-center mt-5 mb-5">
                <img src="/ActNow_Options.png" class="mockup-image"
                  alt="Active Line Graph"></img>
              </div>
            </div>

            {/* End row */}
          </div>

          <hr class="divider my-4" />

          {/* Start row */}
          <div class="row">

            <div class="col-sm-6 order-md-1">
              <div class="mt-5 mb-5">
                <div class="textbox">
                  <h3 class="step-number h4 mb-2"><i>Step 3</i></h3>
                  <h3 class="h4 mb-2">Leave a zero carbon footprint</h3>
                  <p class="text-muted mb-0">Using MyBalance's carbon offsetting plans allows you to manage
                  the carbon you can not remove by taking lifestyle changes alone to achieve a zero carbon
                  footprint.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 order-md-2">
              <div class="text-center mt-5 mb-5">
                <img src="/Offsetting_Choices.png" class="mockup-image"
                  alt="SA Flights"></img>
              </div>
            </div>
            {/* End row */}
          </div>

          <hr class="divider my-4" />

          {/* Start row */}
          <div class="row">

            <div class="col-sm-6 order-md-2">
              <div class="mt-5 mb-5">
                <div class="textbox">
                  <h3 class="step-number h4 mb-2"><i>Step 4</i></h3>
                  <h3 class="h4 mb-2">Keep on track living a low carbon life</h3>
                  <p class="text-muted mb-0">Our unique active tools will help you keep on track and build a
                  weekly, monthly and annual picture of your progress as you reduce your carbon footprint
                </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 order-md-1">
              <div class="text-center mt-5 mb-5">
                <img src="/Active_LineGraph.png" class="mockup-image"
                  alt="Active Line Graph"></img>
              </div>
            </div>

            {/* End row */}
          </div>

          <hr class="divider my-4" />

        </div>
        
        <hr class="divider my-4" />
      
    </section>

    {/* help section */}
    <section class="page-section bg-primary" id="help">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0 text-white">Need a hand?</h2>
            <hr class="divider light my-4" />
            <p class="text-white-50 mb-5">We've developed lots of how-to guides, and might have answered some of your questions already! Check them out by clicking the button below.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mr-auto text-center">
          <a class="btn btn-light btn-xl"  target="_blank" href="https://mybalance.freshdesk.com">Support</a>
          </div>
        </div>
      </div>
    </section>

      {/* Spacing section */}
      <section class="page-section">
      </section>

    {/* Contact section */}
    <section class="page-section bg-primary" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h2 class="mt-0 text-white">Contact us!</h2>
            <hr class="divider my-4" />
            <p class="text-white-50 mb-5">Got any questions or queries?</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 mx-auto mb-5 text-center">
            <Twitter color="white" />
            {/* Make sure to change the email address in BOTH the anchor text and the link target below! */}
            <a class="d-block text-white" href="https://www.twitter.com/mycarbonbalance/" target="_blank">@mycarbonbalance</a>
          </div>
          <div class="col-sm-4 mx-auto mb-5 text-center">
            <Mail color="white" size={36}/> 
            {/* Pass in size as a prop to change the size. For example: size={30}  */}
            {/* Make sure to change the email address in BOTH the anchor text and the link target below! */}
            <a class="d-block text-white text-large" href="mailto:hello@mybalance.earth" target="_blank">hello@mybalance.earth</a>
          </div>
          <div class="col-sm-4 mx-auto mb-5 text-center">
            <Instagram color="white" />
            {/* Make sure to change the email address in BOTH the anchor text and the link target below! */}
            <a class="d-block text-white" href="https://www.instagram.com/mycarbonbalance" target="_blank">@mycarbonbalance</a>
          </div>
        </div>
      </div>
    </section>

      {/* Footer section */}
      <footer class="bg-light py-5">
        <div class="container">
          <div class="small text-center text-muted">Copyright © 2021 - Carbon Innovations</div>
          <div class="small text-center text-muted"><a href="./terms">Ts & Cs</a></div>
          <div class="small text-center text-muted"><a href="./privacy">Privacy Policy</a></div>
        </div>
      </footer>

      {/* Bootstrap core JS */}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>

      {/* Third party plugin JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

      <script src="js/scripts.js"></script>
      <script src="js/carousel.js"></script>

      {/* This div closes the component. */}
    </div>
  )
}

export default home;
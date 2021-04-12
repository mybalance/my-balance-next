import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import Image from "next/image";

const home = () => {
  return (
    <div>

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
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#businesses">Request a demo</a>
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
          <div class="col-lg-6 text-center my-4">
            <video width="270" height="546" controls>
              <source src="/public/MyBalanceRunThrough.mp4" type="video/mp4"/> 
            </video>
          </div>
        </div>
      </div>
    </section>

    {/* The video tag just above doesn't play the video, and the first image that I've tried to load in the team
    section is on line 223. */}    

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
              <img src="../assets/img/screenshots/SA_1.png" class="mockup-image SA-slides"
                alt="Self Assessment"></img>
              <img src="../assets/img/screenshots/SA_2.png" class="mockup-image SA-slides"
                alt="Self Assessment"></img>
              <img src="../assets/img/screenshots/SA_3.png" class="mockup-image SA-slides"
                alt="Self Assessment"></img>
              <img src="../assets/img/screenshots/SA_4.png" class="mockup-image SA-slides"
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
              <img src="../assets/img/screenshots/ActNow_Options.png" class="mockup-image"
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
              <img src="../assets/img/screenshots/Offsetting_Choices.png" class="mockup-image"
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
              <img src="../assets/img/screenshots/Active_LineGraph.png" class="mockup-image"
                alt="Active Line Graph"></img>
            </div>
          </div>
        
        {/* End row */}
        </div>
        
        <hr class="divider my-4" />
      
      </div>
    </section>

    {/* Business section */}
    <section class="page-section bg-primary" id="businesses">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h2 class="mt-0 text-white">For business?</h2>
            <hr class="divider light my-4" />
            <p class="text-white-50 mb-5">MyBalance has been designed to help businesses work with its customers
              and staff under your own branded Mybalance. To discuss your next steps, contact us</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 mr-auto text-center">
          {/* Make sure to change the email address in BOTH the anchor text and the link target below! */}
          <a class="btn btn-light btn-xl" href="mailto:hello@mybalance.earth">hello@mybalance.earth</a>
          </div>
        </div>
      </div>
    </section>

    {/* Spacing section */}
    <section class="page-section">
    </section>

    {/* Meet the team */}
    <section class="page-section bg-dark text-white" id="team">

      <div class="container">

        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-8 col-md-10 text-center">
            <div class="mb-3">
              <h2 class="text-white">Meet our team</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="team">
              <div class="team-avatar">
                <img class="w-100" src="/public/Sam.jpg" alt=""></img>
                {/* <Image src="/Sam.jpg" layout="fill" /> */}

                {/* Trying to get the images to behave here!  */}
              </div>
              <div class="team-content">
                <div class=" team-content-inner">
                  <div class="d-flex">
                    <div class="team-info">
                      <h5 class="mb-0"><a class="avatar-name">Sam Drew</a></h5>
                      <span class="team-position">Director</span>
                    </div>
                  </div>
                  <div class="team-contact mt-2">
                    A founding force in setting up MyBalance, Sam is passionate about his role to help us all achieve a lower carbon lifestyle, within the team Sam has taken the lead role in developing the software platform.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team">
              <div class="team-avatar">
                <img class="w-100" src=".public/Steve.jpg" alt=""></img>
              </div>
              <div class="team-content">
                <div class="team-content-inner">
                  <div class="d-flex">
                    <div class="team-info">
                      <h5 class="mb-0"><a class="avatar-name">Steve Drew</a></h5>
                      <span class="team-position">Director</span>
                    </div>
                  </div>
                  <div class="team-contact mt-2">
                    A founder of MyBalance with Sam, a chartered surveyor with 30 years experience improving the energy performance of the built environment. The missing piece for Steve was always finding the carbon solution for people and not the places they live in.
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="col-lg-4 col-md-6">
              <div class="team">
                <div class="team-avatar">
                  <img class="w-100" src="/assets/img/Raj.jpg" alt=""></img>
                </div>
                <div class="team-content">
                  <div class=" team-content-inner">
                    <div class="d-flex">
                      <div class="team-info">
                        <h5 class="mb-0"><a class="avatar-name">Raj Dhonoa</a></h5>
                        <span class="team-position">IT Infrastructure</span>
                      </div>
                    </div>
                    <div class="team-contact mt-2">
                      Raj builds and maintains the systems that our business runs on. Experienced in managing the latest software technologies, he ensures everything runs smoothly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team">
                <div class="team-avatar">
                  <img class="w-100" src="/assets/img/Jay.jpg" alt=""></img>
                </div>
                <div class="team-content">
                  <div class=" team-content-inner">
                    <div class="d-flex">
                      <div class="team-info">
                        <h5 class="mb-0"><a class="avatar-name">Jay Milne</a></h5>
                        <span class="team-position">Marketing</span>
                      </div>
                    </div>
                    <div class="team-contact mt-2">
                      Jay leads the marketing function at MyBalance, previously working in a number of startups. Jay brings her energy to making MyBalance the choice app for anybody wishing to lower their carbon footprint.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="team">
                <div class="team-avatar">
                  <img class="w-100" src="/assets/img/Leon.jpg" alt=""></img>
                </div>
                <div class="team-content">
                  <div class=" team-content-inner">
                    <div class="d-flex">
                      <div class="team-info">
                        <h5 class="mb-0"><a class="avatar-name">Leon Crisp</a></h5>
                        <span class="team-position">Consultant</span>
                      </div>
                    </div>
                    <div 
                      class="team-contact mt-2" 
                      // style="font-size: 80%;"
                    >
                      Leon is a serial entrepreneur and software specialist, developing software products for over 30 years. After graduating in science from Cambridge University (Natural Sciences) Leon went on to found several businesses and create many software applications, with a focus on business productivity and automation. He loves to always be learning, and is passionate about technology, nature, sustainability and human potential.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </section>

    {/* This div closes the component. */}
    </div>
  )
}

export default home;
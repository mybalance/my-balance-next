import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
                <source src="/assets/vid/MyBalanceRunThrough.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default home;
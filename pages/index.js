import Head from 'next/head'
import styles from '../styles/Home.module.css'

const home = () => {
  return (
    <div>

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
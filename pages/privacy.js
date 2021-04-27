import Head from 'next/head';

const privacy = () => {
  return (
    <div>

    <Head>
      <title>MyBalance, supported by Abri</title>
      <link rel="shortcut icon" href="/assets/img/Web_Icon_1024px.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link> 
      <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>

        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-3" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="../#page-top">MyBalance</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="../#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="../#businesses">For Businesses</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="../#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* Privacy policy */}
        <section class="page-section">
            <div class="container" id="first">
                <h2 class="display-4">Privacy Policy</h2>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>Carbon Innovations Ltd built the MyBalance app as a Commercial app. This SERVICE is provided by Carbon Innovations Ltd and is intended for use as is.</p>
                            <p>This Service is operated wholly by Carbon Innovations Ltd. Branding, colour, and logos are used with the express permission of Abri. Abri does not have access to any personal information as part of this Service, other than that specified in this Privacy Policy.</p>
                            <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>
                            <p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. we will not use or share your information with anyone except as described in this Privacy Policy.</p>
                            <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at MyBalance unless otherwise defined in this Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Information collection and use */}
            <div class="container">
                <h3 class="display-4">Information Collection and Use</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="px-5 pt-5 pb-2">
                            <p>If you choose to engage in carbon offsetting while using our Service, we will require you to provide us with certain personally identifiable information, including but not limited to Name, Email Address, Physical Address, Billing Information, Travel Location Data.</p>
                            <p>The lawful basis for our collection of this information is Contract, which you enter into when purchasing a carbon offsetting plan. We use this information to fulfil our duty in managing the purchase of appropriate carbon credits on your behalf, and to provide you with tools to better understand your carbon footprint. We may share anonymised information about your usage of our Service with specified third-party partners, you will be informed if this is the case.</p>
                            <p>This information will be kept for the length of time that you use the Service. If you choose to leave the Service, this information will be kept for a 30 day grace period such that it can be restored if you choose to return to the Service, and then deleted.</p>
                            <p>Carbon Innovations Ltd is the data controller for this Service.</p>
                            <p>If you do not choose to engage in carbon offsetting while using our Service (i.e. you only use the carbon self assessment portion of the service) we will not collect any personally identifiable information. We may, however, collect anonymised information about your use of the Service. We may share anonymised information about your usage of our Service with specified third-party partners, you will be informed if this is the case.</p>
                        </div>
                        <div class="px-5 py-2">
                            <h5 class="display-6">Processing a Payment</h5>
                            <p>Your payment will be processed by Stripe, who collect, use, and process your information, including billing information, in accordance with their privacy policies.</p>
                            <p>Stripe’s services in Europe are provided by a Stripe affiliate—Stripe Payments Europe Limited (“Stripe Payments Europe”)—an entity located in Ireland. In providing Stripe Services, Stripe Payments Europe transfers personal data to Stripe, Inc. in the US</p>
                            <p>Where applicable law requires Stripe to ensure that an international data transfer is governed by a data transfer mechanism, Stripe uses one or more of the following mechanisms: EU Standard Contractual Clauses with a data recipient outside the EEA or the UK, verification that the recipient has implemented Binding Corporate Rules, or verification that the recipient adheres to the EU-US and Swiss-US Privacy Shield Framework. More information can be found <a href="https://stripe.com/gb/privacy#international-data-transfers">here</a>.</p>
                        </div>
                        <div class="px-5 pb-5 pt-2">
                            <p>The app does use third party services that may collect information used to identify you.
                                <ul>
                                    <li><a href="https://policies.google.com/terms">Google Play Services</a></li>
                                    <li><a href="https://stripe.com/en-gb/privacy">Stripe</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Your data protection rights */}
            <div class="container">
                <h3 class="display-4">Your Data Protection Rights</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>Under data protection law, your rights include:</p>
                            <p><strong>Your right of access:</strong> You have the right to ask us for copies of your personal information.</p>
                            <p><strong>Your right to rectification:</strong> You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</p>
                            <p><strong>Your right to erasure:</strong> You have the right to ask us to erase your personal information in certain circumstances.</p>
                            <p><strong>Your right to restriction of processing:</strong> You have the right to ask us to restrict the processing of your personal information in certain circumstances.</p>
                            <p><strong>Your right to object to processing:</strong> You have the the right to object to the processing of your personal information in certain circumstances.</p>
                            <p><strong>Your right to data portability:</strong> You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</p> 
                            <p>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</p>
                            <p>Please contact us at <a href="mailto:hello@mybalance.earth">hello@mybalance.earth</a> if you wish to make a request.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <h3 class="display-4">Log Data</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilising our Service, the time and date of your use of the Service, and other statistics.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cookies */}
            <div class="container">
                <h3 class="display-4">Cookies</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
                            <p>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service providers */}
            <div class="container">
                <h3 class="display-4">Service Providers</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>We may employ third-party companies and individuals due to the following reasons:
                                <ul>
                                    <li>To facilitate our Service;</li>
                                    <li>To provide the Service on our behalf;</li>
                                    <li>To perform Service-related services; or</li>
                                    <li>To assist us in analysing how our Service is used.</li>
                                </ul>
                            </p>
                            <p>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security */}
            <div class="container">
                <h3 class="display-4">Security</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                            <p>These means include:</p>
                            <ul>
                                <li>Encryption of data,</li>
                                <li>Implementing safeguards to prevent malicious attacks on the Service,</li>
                                <li>Internal policies defining our approach to information security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Links to other sites */}
            <div class="container">
                <h3 class="display-4">Links to Other Sites</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Children's privacy */}
            <div class="container">
                <h3 class="display-4">Children's Privacy</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to complete necessary actions.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Changes to this privacy policy */}
            <div class="container">
                <h3 class="display-4">Changes to This Privacy Policy</h3>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                            <p>This policy is effective as of 2021-03-05</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact us */}
            <div class="container">
                <h2 class="display-4">Contact Us</h2>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>If you have any questions or suggestions regarding this Privacy Policy, or concerns about our use of your personal information, do not hesitate to contact us at <a href="mailto:hello@mybalance.earth?subject=PrivacyPolicyFeedback">hello@mybalance.earth</a>.</p>
                            <p>You can also complain to the ICO if you are unhappy with how we have used your data.</p>
                            <p>The ICO's address:</p>
                            <p>
                                Information Commissioner’s Office<br/>
                                Wycliffe House<br/>
                                Water Lane<br/>
                                Wilmslow<br/>
                                Cheshire<br/>
                                SK9 5AF
                            </p>
                            <p>Helpline number: 0303 123 1113</p>
                            <p>ICO website: <a href="https://www.ico.org.uk">https://www.ico.org.uk</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer class="bg-light py-5">
            <div class="container">
                <div class="small text-center text-muted">Copyright © 2021 - Carbon Innovations</div>
                <div class="small text-center text-muted"><a href="../terms">Ts & Cs</a></div>
                <div class="small text-center text-muted"><a href="../privacy">Privacy Policy</a></div>
            </div>
        </footer>

        {/* Bootstrap core JS */}
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        
        {/* Third party plugin JS */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

        {/* Core theme JS */}
        <script src="../js/scripts.js"></script>

    {/* This div closes the component. */}
    </div>
  )
}

export default privacy;




// <!-- Favicon-->
//         <link rel="icon" type="image/x-icon" href="../assets/img/favicon.ico" />
//         <!-- Font Awesome icons (free version)-->
//         <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
//         <!-- Google fonts-->
//         <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
//         <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
//         <!-- Third party plugin CSS-->
//         <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
//         <!-- Core theme CSS (includes Bootstrap)-->
//         <link href="../css/styles.css" rel="stylesheet" />
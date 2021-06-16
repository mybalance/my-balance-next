import Head from 'next/head';
import NavTwo from '../components/NavTwo';

const terms = () => {
  return (
    <div>

    <Head>
      <title>MyBalance | Low carbon living</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link> 
      <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
      
        {/* Navigation */}
        {/* <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-3" id="mainNav">
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
        </nav> */}

        <NavTwo />

        {/* Terms and conditions */}
        <section class="page-section">
            <div class="container" id="first">
                <h2 class="display-4">Terms and Conditions</h2>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Carbon Innovations Ltd.</p>
                            <p>Carbon Innovations Ltd is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.</p>
                            <p>The MyBalance app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the MyBalance app won’t work properly or at all.</p>
                            <p>The app does use third party services that declare their own Terms and Conditions.
                                <ul>
                                    <li><a href="https://policies.google.com/terms">Google Play Services</a></li>
                                </ul>
                            </p>
                            <p>You should be aware that there are certain things that Carbon Innovations Ltd will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Carbon Innovations Ltd cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.</p>
                            <p>If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.</p>
                            <p>Along the same lines, Carbon Innovations Ltd cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Carbon Innovations Ltd cannot accept responsibility.</p>
                            <p>With respect to Carbon Innovations Ltd’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Carbon Innovations Ltd accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.</p>
                            <p>At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Carbon Innovations Ltd does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Changes to these terms and conditions */}
            <div class="container">
                <h2 class="display-4">Changes to This Terms and Conditions</h2>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. we will notify you of any changes by posting the new Terms and Conditions on this page.</p>
                            <p>These terms and conditions are effective as of 2020-04-24</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <h2 class="display-4">Contact Us</h2>
                <div class="row align-items-center">
                    <div class="col-lg-9 order-lg-1">
                        <div class="p-5">
                            <p>If you have any questions or suggestions regarding this Terms and Conditions, do not hesitate to contact us at <a href="mailto:hello@mybalance.earth?subject=TermsFeedback">hello@mybalance.earth</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer class="bg-light py-5">
            <div class="container">
                <div class="small text-center text-muted">Copyright © 2020 - Carbon Innovations</div>
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
        {/* <script src="../js/scripts.js"></script> */}
  






    {/* This div closes the component */}
    </div>
  )
}

export default terms;




        // <!-- Favicon-->
        // <link rel="icon" type="image/x-icon" href="../assets/img/favicon.ico" />
        // <!-- Font Awesome icons (free version)-->
        // <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
        // <!-- Google fonts-->
        // <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
        // <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
        // <!-- Third party plugin CSS-->
        // <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
        // <!-- Core theme CSS (includes Bootstrap)-->
        // <link href="../css/styles.css" rel="stylesheet" />
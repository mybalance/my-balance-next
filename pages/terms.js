import Head from 'next/head';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "../styles/Privacy.module.css";

const terms = () => {
	return (
		<>
			<Head>
				<title>MyBalance | Low carbon living</title>
				<link rel="shortcut icon" href="/static/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			{/* Navigation component */}
			<Navigation />

			<section className={styles.mainContainer}>

				{/* Terms and conditions */}
				<h1 className={styles.headerMain}>Terms and conditions</h1>
				<p className={styles.text}>By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions.</p> 
				<p className={styles.text}>The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Carbon Innovations Ltd.</p>
				<p className={styles.text}>Carbon Innovations Ltd is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.</p>
				<p className={styles.text}>The MyBalance app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure.</p> 
				<p className={styles.text}>We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the MyBalance app won’t work properly or at all.</p>
				<p className={styles.text}>The app does use third party services that declare their own Terms and Conditions.</p>
				<ul>
					<li><p className={styles.text}><a href="https://policies.google.com/terms">Google Play Services</a></p></li>
				</ul>
		
				<p className={styles.text}>You should be aware that there are certain things that Carbon Innovations Ltd will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Carbon Innovations Ltd cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.</p>
				<p className={styles.text}>If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges.</p> 
				<p className={styles.text}>In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.</p>
				<p className={styles.text}>Along the same lines, Carbon Innovations Ltd cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Carbon Innovations Ltd cannot accept responsibility.</p>
				<p className={styles.text}>With respect to Carbon Innovations Ltd’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Carbon Innovations Ltd accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.</p>
				<p className={styles.text}>At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Carbon Innovations Ltd does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you.</p> 
				<p className={styles.text}>Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.</p>

				{/* Changes to these terms and conditions */}
				<h2 className={styles.header}>Changes to This Terms and Conditions</h2>
				<p className={styles.text}>We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>
				<p className={styles.text}>These terms and conditions are effective as of 2020-04-24.</p>
				<h2 className={styles.header}>Contact Us</h2>
				<p className={styles.text}>If you have any questions or suggestions regarding this Terms and Conditions, do not hesitate to contact us at <a href="mailto:hello@mybalance.earth?subject=TermsFeedback">hello@mybalance.earth</a>.</p>

			</section>

			{/* Footer component */}
			<Footer />
		</>
	)
}

export default terms;
import Head from 'next/head';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "../styles/Privacy.module.css";

const privacy = () => {
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

				{/* Privacy policy */}
				<h1 className={styles.headerMain}>Privacy policy</h1>
				<p className={styles.text}>Carbon Innovations Ltd built the MyBalance app as a Commercial app. This SERVICE is provided by Carbon Innovations Ltd and is intended for use as is.</p>
				<p className={styles.text}>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>
				<p className={styles.text}>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. we will not use or share your information with anyone except as described in this Privacy Policy.</p>
				<p className={styles.text}>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at MyBalance unless otherwise defined in this Privacy Policy.</p>

				{/* Information collection and use */}
				<h2 className={styles.header}>Information collection and use</h2>
				<p className={styles.text}>If you choose to engage in carbon offsetting while using our Service, we will require you to provide us with certain personally identifiable information, including but not limited to Name, Email Address, Physical Address, Billing Information, Travel Location Data.</p>
				<p className={styles.text}>The lawful basis for our collection of this information is Contract, which you enter into when purchasing a carbon offsetting plan. We use this information to fulfil our duty in managing the purchase of appropriate carbon credits on your behalf, and to provide you with tools to better understand your carbon footprint. We may share anonymised information about your usage of our Service with specified third-party partners, you will be informed if this is the case.</p>
				<p className={styles.text}>This information will be kept for the length of time that you use the Service. If you choose to leave the Service, this information will be kept for a 30 day grace period such that it can be restored if you choose to return to the Service, and then deleted.</p>
				<p className={styles.text}>Carbon Innovations Ltd is the data controller for this Service.</p>
				<p className={styles.text}>If you do not choose to engage in carbon offsetting while using our Service (i.e. you only use the carbon self assessment portion of the service) we will not collect any personally identifiable information. We may, however, collect anonymised information about your use of the Service. We may share anonymised information about your usage of our Service with specified third-party partners, you will be informed if this is the case.</p>

				{/* Processing a payment */}
				<h2 className={styles.header}>Processing a Payment</h2>
				<p className={styles.text}>Your payment will be processed by Stripe, who collect, use, and process your information, including billing information, in accordance with their privacy policies.</p>
				<p className={styles.text}>Stripe’s services in Europe are provided by a Stripe affiliate—Stripe Payments Europe Limited (“Stripe Payments Europe”)—an entity located in Ireland. In providing Stripe Services, Stripe Payments Europe transfers personal data to Stripe, Inc. in the United States.</p>
				<p className={styles.text}>Where applicable law requires Stripe to ensure that an international data transfer is governed by a data transfer mechanism, Stripe uses one or more of the following mechanisms: EU Standard Contractual Clauses with a data recipient outside the EEA or the UK, verification that the recipient has implemented Binding Corporate Rules, or verification that the recipient adheres to the EU-US and Swiss-US Privacy Shield Framework. More information can be found <a href="https://stripe.com/gb/privacy#international-data-transfers">on Stripe's privacy documentation</a>.</p>
				<p className={styles.text}>The app does use the following third party services that may collect information used to identify you:</p>
				<ul>
					<li><p className={styles.text}><a href="https://policies.google.com/terms">Google Play Services</a></p></li>
					<li><p className={styles.text}><a href="https://stripe.com/en-gb/privacy">Stripe</a></p></li>
				</ul>
				

				{/* Your data protection rights */}
				<h2 className={styles.header}>Your data protection rights</h2>
				<p className={styles.text}>Under data protection law, your rights include:</p>
				<ul>
					<li><p className={styles.text}><strong>Your right of access:</strong> You have the right to ask us for copies of your personal information.</p></li>	
					<li><p className={styles.text}><strong>Your right to rectification:</strong> You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</p></li>	
					<li><p className={styles.text}><strong>Your right to erasure:</strong> You have the right to ask us to erase your personal information in certain circumstances.</p></li>	
					<li><p className={styles.text}><strong>Your right to restriction of processing:</strong> You have the right to ask us to restrict the processing of your personal information in certain circumstances.</p></li>	
					<li><p className={styles.text}><strong>Your right to object to processing:</strong> You have the the right to object to the processing of your personal information in certain circumstances.</p></li>	
					<li><p className={styles.text}><strong>Your right to data portability:</strong> You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</p></li>	
				</ul>
				<p className={styles.text}>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</p>
				<p className={styles.text}>Please contact us at <a href="mailto:hello@mybalance.earth">hello@mybalance.earth</a> if you wish to make a request.</p>

				{/* Log data */}
				<h2 className={styles.header}>Log data</h2>
				<p className={styles.text}>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilising our Service, the time and date of your use of the Service, and other statistics.</p>

				{/* Cookies */}
				<h2 className={styles.header}>Cookies</h2>
				<p className={styles.text}>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
				<p className={styles.text}>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>

				{/* Service providers */}
				<h2 className={styles.header}>Service providers</h2>
				<p className={styles.text}>We may employ third-party companies and individuals due to the following reasons:</p>
				<ul>
					<li><p className={styles.text}>To facilitate our Service;</p></li>
					<li><p className={styles.text}>To provide the Service on our behalf;</p></li>
					<li><p className={styles.text}>To perform Service-related services; or</p></li>
					<li><p className={styles.text}>To assist us in analysing how our Service is used.</p></li>
				</ul>
				
				<p className={styles.text}>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

				{/* Security */}
				<h2 className={styles.header}>Security</h2>
				<p className={styles.text}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
				<p className={styles.text}>These means include:</p>
					<ul>
						<li><p className={styles.text}>Encryption of data,</p></li>
						<li><p className={styles.text}>Implementing safeguards to prevent malicious attacks on the Service,</p></li>
						<li><p className={styles.text}>Internal policies defining our approach to information security.</p></li>
					</ul>

				{/* Links to other sites */}
				<h2 className={styles.header}>Links to other sites</h2>
				<p className={styles.text}>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

				{/* Children's privacy */}
				<h2 className={styles.header}>Children's privacy</h2>
				<p className={styles.text}>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to complete necessary actions.</p>

				{/* Changes to this privacy policy */}
				<h2 className={styles.header}>Changes to this privacy policy</h2>
				<p className={styles.text}>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
				<p className={styles.text}>This policy is effective as of 2021-03-05.</p>

				{/* Contact us */}
				<h2 className={styles.header}>Contact us</h2>
				<p className={styles.text}>If you have any questions or suggestions regarding this Privacy Policy, or concerns about our use of your personal information, do not hesitate to contact us at <a href="mailto:hello@mybalance.earth?subject=PrivacyPolicyFeedback">hello@mybalance.earth</a>.</p>
				<p className={styles.text}>You can also complain to the ICO if you are unhappy with how we have used your data.</p>
				<p className={styles.text}>The ICO's address:</p>
				<p className={styles.text}>
					Information Commissioner’s Office<br />
					Wycliffe House<br />
					Water Lane<br />
					Wilmslow<br />
					Cheshire<br />
					SK9 5AF
				</p>
				<p className={styles.text}>Helpline number: 0303 123 1113</p>
				<p className={styles.text}>ICO website: <a href="https://www.ico.org.uk">https://www.ico.org.uk</a></p>

			</section>

			{/* Footer component */}
			<Footer />
		</>
	)
}

export default privacy;
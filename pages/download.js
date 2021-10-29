import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import { getDownloadURL } from "../internal/getDownloadURL";

export default function Download(props) {
    const downloadURL = getDownloadURL();

    if (downloadURL !== false) {
        Router.push(downloadURL)
    };
    
    return (
        <>
            <Head>
                <title>MyBalance | Low carbon living</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href='https://play.google.com/store/apps/details?id=earth.mybalance.mybalance&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                        <img width="200px" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                    </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href='https://apps.apple.com/gb/app/mybalance/id1501751263'>
                        <img width="175px" alt='Download from the App Store' src='/assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' />
                    </a>
                </div>
            </div>
        </>
    )
}
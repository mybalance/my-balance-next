// internal/getDownloadURL.js
// This function determines the type of device that the visitor is using, and
// returns the relevant URL to redirect them to in order to download the app.
// I.e. Play Store if Android, App Store if iOS.
import { isAndroid, isIOS } from 'react-device-detect';


export function getDownloadURL() {
    // If the device is neither iOS or Android, return false so that the page
    // knows to render a choice modal.
    if ( isAndroid ) {
        return 'https://play.google.com/store/apps/details?id=earth.mybalance.mybalance';
    } else if ( isIOS ) {
        return 'https://apps.apple.com/gb/app/mybalance/id1501751263';
    } else {
        return false;
    }
}
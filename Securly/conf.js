///////////////////////////////
//    Config File            //
///////////////////////////////

// Literally just config.



// Big Brother is watching.



////// Begin Code //////

// Probably something that contains all the blocked pages
var checkClusterURL = "https://www.securly.com";

// Also probably useful in the future, this seems to be some dev's email that could be haxed
var DEBUG_userEmail = "amar@securlyqa1.com";
var forceUserEmail = false;

// Might be useful in the future...
var DEBUG_clusterUrl = "https://stagwww.securly.com/crextn";
var forceClusterUrl = false;

// IDK
var iwfEncodeStep = 3;

var iframeResp = "";
var iframeBlockUrl = ""; 

var lastKnownState = "unknown";
// Tabs to check for explicit content / block outright (veeery long list)
const tabCheck = [
    'netflix.com',
    'spotify.com',
    'soundcloud.com',
    'disneyplus.com',
    'hulu.com',
    'soundtrap.com',
    'viewpure.com',
    'pandora.com',
    'dailymotion.com',
    'soap2day.is',
    'instagram.com',
    'pinterest.com',
    'vimeo.com',
    'tiktok.com',
    'reddit.com',
    'buzzfeed.com',
    'medium.com',
    'quotev.com',
    'weebly.com',
    'tumblr.com',
    'facebook.com',
    'twitter.com',
    'linkedin.com',
    'plus.google.com',
    'apps.facebook.com',
    'touch.facebook.com',
    'socialblade.com',
    'viki.com',
    'myanimelist.net',
    'mymodernmet.com',
    'coolmathgames.com',
    'scratch.mit.edu',
    'nitrotype.com',
    'roblox.com',
    'poki.com',
    'twitch.tv',
    'crazygames.com',
    'hoodamath.com',
    'krunker.io',
    'friv.com',
    'epicgames.com',
    'sites.google.com',
    'amazon.com/Amazon-Video',
    'amazon.com/gp/video/'
];

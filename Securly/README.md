# Main Folder
This is the main folder. It contains all of the source files extracted from the public .CRX file. I have throuroughly commented the code and formatted it. However, it WILL NOT BUILD AS-IS! The checksum will not match, so DON'T EVEN THINK ABOUT IT! This project is for research purposes only!

### Some important links:
 - blocked.html - The page that appears when a site gets blocked on you.
 - blocked.js - The script that runs on the blocked page
 - conf.js - The config file for all of Securly.
 - content.min.js - The script that runs on Youtube
 - content2.min.js - The script that runs on Google Maps (for some weird reason)
 - content3.min.js - The script that runs when you search for something in Google, Bing, or Yahoo.
 - content4.min.js - The script that runs on ALL SITES! BIG NO-NO!
 - content5.min.js - Literally just Jquery. Wow.
 - content5.min.js - Literally just stalks what google meet you're on.
 - manifest.json - Contains the regex for all the background and content scripts and what sites they're loaded on, as well as checksums for the original version.
 - securly.min.js - The MAIN file. It runs in the background, stalks you, fetches data from all the content files, etc, etc. To be documented.
# Title: Unstable Universe: Given one Chance, What Life will You Choose to Live? 
--------------------------------------------------------

### Short Description: 
- Unstable SMP is a hardcore minecraft server where you are given only one life, in which 4 main characters (Parrot, Spoke, Wemmbu and Flame) go on their own adventures throughout the world, dealing with different enemies, making allies and telling their own story. 
--------------------------------------------------------

### Header: Logo (top corner left), same line navigation bar (Home| Characters | Episodes | Minigames | The Creators)
   ![Uploading image.png…]()

- Body Section: Changes each page (check wireframe below)
- Footer: Copyright © 2025 Unstable Universe | Credits to ParrotX2, SpokeIsHere, Wemmbu, and FlameFrags
- Social media icons (YouTube, Twitter, Discord) using image sprites
- Citation links for images, audio, and clips
--------------------------------------------------------

### Home Page
- Hero section with animated banner (prioritize JS to make slideshow type background)
- Synopsis paragraph
- Button that links to “Characters” and “Episodes”
--------------------------------------------------------

### Characters Page
- 4-column layout with images of the characters
- Hover animation effect on cards which expands showing short bios and stats
--------------------------------------------------------

### Episodes Page
- Vertical list layout with thumbnails on the left and summary paragraphs on the right
- “View More” button which toggles detailed summaries
--------------------------------------------------------

### Minigames Page
- Quiz area with question boxes and JS-generated results to know which character are you most like
- “Try Again” button which resets game dynamically
--------------------------------------------------------

### The Creators Page
- Profile sections layout with photo, name, and short paragraph info for each
- Embedded videos or links to their channels
--------------------------------------------------------

### Navigation Design
- Sticky navbar seen across all pages
- Active page is highlighted
- Smooth transition animations when changing pages
--------------------------------------------------------



# 3rd Qtr Update Proposal

### What kind of HTML will we use and how will we use it?

- Our website will use a Login/Sign-up HTML Form that appears automatically as you open the website
- This form is for users to be able to access the website and to customize their profile later on
- There will also be a choice for users to check the “Remember Me” box to save login information.
--------------------------------------------------------

### Purpose of the HTML Form:
- Identify users who are using the website.
- Save the user’s information on their computer.
- Enable users to customize their profile and be on the leaderboard for the minigames.
--------------------------------------------------------

### What information will the HTML Form collect?
- Username
- Password
- Email
- Favorite Unstable Universe Character
--------------------------------------------------------

### How will the data be saved?
- The user’s data will be saved on their computer using JavaScript: localStorage
- When the user logs in, their username, password, and email address will be stored locally
- One thing to note is that since this website is made by us (simply Grade 9 Students), we do not have the capacity to create a website that can securely store passwords
- So the way these information are stored are for educational purposes only, and show how these data will be used across other pages.
- The login page will no longer reappear unless the user logs out or the user does not press the “Remember Me” box.
--------------------------------------------------------

### How will the data be used?
- Display the user’s information on the Profile Page.
- Show the user’s username and ranking on the Leaderboard Page.
--------------------------------------------------------


<img width="1920" height="1080" alt="Home" src="https://github.com/user-attachments/assets/6774ebdc-9c0e-4b2a-9d1d-ff0bf7495226" />

## 1. Login Page (Form Page & Data Collection)
- Appears automatically after opening the website.
- Contains the HTML Form.
- Saves the user’s data in localStorage.
- Redirects the user to the home page after login/sign-up.
--------------------------------------------------------

Profile Picture Pop Up:
<img width="1920" height="1080" alt="Home (3)" src="https://github.com/user-attachments/assets/919b11ab-0cdf-4374-b63e-586e814fe8ea" />

Profile Editor:
<img width="1920" height="1080" alt="Home (1)" src="https://github.com/user-attachments/assets/3938a773-284f-4b08-91ee-ea70d5d40539" />

## 2. Profile Page (Uses the collected data)
- Opens in a new tab.
- First shows choices of profile pictures (that can be changed in the future).
- Once saved, website uses saved user data to display their username, favorite unstable universe character, and let the user customize their profile (profile picture, display name, user biography).
--------------------------------------------------------


<img width="1920" height="1080" alt="Home (2)" src="https://github.com/user-attachments/assets/6600cf2c-fbb2-4289-a3ad-752bee2c5a19" />

## 3. Leaderboard Page (Uses collected data)
- Can be accessed by hovering over the Minigames tab.
- Displays a leaderboard with the user’s username and ranking.
--------------------------------------------------------

### Order of how the user will see the webpages:
- Login/Sign-up Page
- Pick your profile picture
- Profile editing page
- (The leaderboard page will only appear once you finished the quiz).
--------------------------------------------------------


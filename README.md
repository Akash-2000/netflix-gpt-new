# Netflix GPT

- create react app
- added tailwind css
  - install tailwind as dev dependency
    ## `npm install -D tailwindcss`
  - initialize tailwing config
    ## `npx tailwindcss init`
  - changed the config
  - add the tailwind directive to main css file
  - Header
  - sign up and sign in form
  - validation
  - use ref
  - firebase setup
  - deployed our app to production
  - Firebase authentication
  - sigin and sign up user
  - created redux store
  - create user slice
  - BugFix - changed the OnAuth enables to navigate instead we statically given
  - BugFix - clean onauthstate changes while unmount
  - Add hard coded values to the constant files
  - Registered TMDB and got acces token and API kwey
  - Add api options
  - create custom hook
  - creted main and secondary cotnainers
  - created videoTitle
  - fetched the movie trailer
  - Build secondary Page
  - secondary page added
  - added different movie categroies
  - browse page completed
  - GPT search Page started
  - GPT search lanaguage based changes added
  - OPEN AI API Ditched me so i hookup with CLOUDFLARE (FEATURE) irritates me at first but it is my charm now
  - suggestion page completed
  - memoization added
  - responsiveness added
  - deployed the backend with zoho catalyst Im very new to zoho catalyst it makes me to pull my hair a little but it worth spending time with
    - Install catalyst cli
    - catalyst init
    - catalyst serve (to test)
    - catalyst deploy (to deploy)
    - add domain in authentication to avoid CORS
    - add env files in config to avoid unexpected errors

# Features

- Login /Sign up
  - Sign In / Sign up form
  - redirect to Browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - title and description
    - Movie suggestion
      - MovieList \* N
- NetflixGpt

  - search Bar
  - Movie suggestions

  ## Add Routing to app

  - Install react router dom
    ### `npm i -D react-router-dom`
  - use createBrowser router to create configuration
  - use Router provider to provide the routes

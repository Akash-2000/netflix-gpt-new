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

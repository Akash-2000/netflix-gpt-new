const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWMyYzBiMGE4YWVkNWIwZWQ5OGFlOTk1NDI0N2Y2YiIsIm5iZiI6MTczNTM1NjgwMS43NTIsInN1YiI6IjY3NmY3MTgxZmI4YTIyOWM2NzkyODUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmSr2LM00p0g4c0d9inhogDGwQa8h6FYv4Yr_-OHWe0'
    }
  };
const IMAGE_CDN = "https://image.tmdb.org/t/p/w500/"
const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
const LANGUAGE_OPTIONS = [
  {
    idenitfier:"en", value:"English",
  },
  { 
    idenitfier:"tamil", value:"தமிழ்",
},
{ 
    idenitfier:"spanish", value:"española"
}
]

const MODEL_NAME="@cf/meta/llama-3-8b-instruct"

export  {
    LOGO,
    USER_AVATAR,
    API_OPTIONS,
    IMAGE_CDN,
    BACKGROUND_IMAGE,
    LANGUAGE_OPTIONS,
    MODEL_NAME,
}
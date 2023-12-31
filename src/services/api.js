//kon se link pr call krne jana h --> end points / paths
const BASE_URL = process.env.REACT_APP_BASE_URL;

//AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RRESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
};

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
};

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEGDATA_API: BASE_URL + "/course/getCategoryPageDetails",
};

//CONTACT - US API
export const contactUsEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
};

//SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API : BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API : BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
import axios from 'axios';

// Set the base URL for every axios request. In production this value will be injected
// via an environment variable you configure on Vercel.
// Example: https://drivemate-backend.onrender.com
axios.defaults.baseURL = process.env.REACT_APP_API_URL || '';

export default axios;

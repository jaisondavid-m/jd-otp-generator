/**
 * Generates a random OTP (One-Time Password) of specified length
 * @param {number} length - The number of digits in the OTP (default: 6)
 * @returns {string} - The generated OTP as a string
 */

function generateOTP(length = 6) {
  if (typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a positive number');
  }
  
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

export default generateOTP
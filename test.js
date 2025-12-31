import generateOTP from "./index.js";

console.log('Testing OTP Generator...\n');

console.log('6-digit OTP:', generateOTP());
console.log('4-digit OTP:', generateOTP(4));
console.log('8-digit OTP:', generateOTP(8));
console.log('10-digit OTP:', generateOTP(10));

try {
  console.log('\nTesting invalid input:');
  generateOTP(-1);
} catch (error) {
  console.log('Error caught:', error.message);
}

console.log('\nAll tests completed successfully!');

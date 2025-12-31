# Simple OTP Generator

A lightweight npm package to generate random OTP (One-Time Password) with customizable digit length.

## Installation

```bash
npm install @jaison07/otp-generator
```

## Usage

```javascript
const generateOTP = require('simple-otp-generator');

// Generate a 6-digit OTP (default)
const otp = generateOTP();
console.log(otp); // Example: "482915"

// Generate a 4-digit OTP
const otp4 = generateOTP(4);
console.log(otp4); // Example: "7293"

// Generate an 8-digit OTP
const otp8 = generateOTP(8);
console.log(otp8); // Example: "18475629"
```

## API

### `generateOTP(length)`

Generates a random OTP of the specified length.

**Parameters:**
- `length` (number, optional): The number of digits in the OTP. Default is 6.

**Returns:**
- (string): The generated OTP as a string.

**Throws:**
- Error if length is not a positive number.

## Examples

```javascript
const generateOTP = require('simple-otp-generator');

// Default 6-digit OTP
console.log(generateOTP()); // "482915"

// Custom length
console.log(generateOTP(4)); // "7293"
console.log(generateOTP(8)); // "18475629"
```

## License

MIT

## Author

Your Name

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

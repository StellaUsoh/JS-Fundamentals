const arg = process.argv[2];

// Try to convert to integer using parseInt
const num = parseInt(arg, 10);

// Check if parseInt returned a valid number (not NaN) and arg is not undefined
if (arg !== undefined && !isNaN(num)) {
  console.log("My number:", num);
} else {
  console.log("Not a number");
}

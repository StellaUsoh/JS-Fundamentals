const num = Number(process.argv[2]);

if (!Number.isInteger(num) || num <= 0) {
  if (num <= 0) {
    // For zero or negative, do nothing (print nothing)
  } else {
    console.log("Missing number of occurrences");
  }
} else {
  let i = 0;
  while (i < num) {
    console.log("C is fun");
    i++;
  }
}

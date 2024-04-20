// Import the path module
const path = require('path');

// Function to join two file path segments
function joinPaths(segment1, segment2) {
    // Join the two segments using the path module
    const joinedPath = path.join(segment1, segment2);
    return joinedPath;
}

// Accept two command-line arguments
const segment1 = process.argv[2];
const segment2 = process.argv[3];

// Check if both command-line arguments are provided
if (segment1 && segment2) {
    // Call the joinPaths function with the provided segments
    const result = joinPaths(segment1, segment2);
    console.log('Joined Path:', result);
} else {
    console.log('Please provide two file path segments.');
}

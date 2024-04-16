// Import axios for making HTTP requests
const axios = require('axios');

// Function to make HTTP request
async function getStarWarsCharacter(characterId) {
  try {
    // Construct the API URL
    const apiUrl = `https://swapi.info/api/people/${characterId}/`;
    // Execute the API request
    const response = await axios.get(apiUrl);
    // Extract data from response
    const data = response.data;
    // Log formatted JSON of data
    // console.log('API response data:', JSON.stringify(data, null, 2));
    // Return the character's name
    return data.name;
  } catch (error) {
    // Log any errors that occur during the HTTP request
    console.error('Request failed:', error.message);
    throw new Error('Request failed');
  }
}

// Get character ID from command line arguments
const characterId = process.argv[2];

// Ensure a character ID was provided
if (!characterId) {
  console.log('Usage: node script.js <characterId>');
  process.exit(1);
}

// Execute the function and handle the returned promise
getStarWarsCharacter(characterId)
  .then(name => {
    console.log('Character Name:', name);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

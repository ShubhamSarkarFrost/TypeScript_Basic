import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

// Read the query from the JSON file located in the 'data' folder
const getQueryFromFile = (): string => {
    const filePath = path.join(__dirname, 'data', 'query.json');  // Construct the file path
    const data = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(data);
    return json.searchQuery;
};

// Function to send the request to TVMaze API
const getShowDetails = async (): Promise<void> => {
    const query = getQueryFromFile();
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;

    try {
        const response = await axios.get(url);
        console.log('Show details:', response.data);
        console.log("Medium Image URL:", response.data.image.medium);
        console.log("Summary:", response.data.summary);
        console.log("Premiered:", response.data.premiered);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Execute the function
getShowDetails();
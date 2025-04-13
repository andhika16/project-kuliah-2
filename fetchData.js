const fetch = require('cross-fetch');

module.exports = async (resource, id = '') => {
    try {
        // Gunakan http:// bukan https://
        const baseUrl = 'http://localhost:8000'; // Pastikan port sesuai (8000)
        const url = id ? `${baseUrl}/${resource}/${id}` : `${baseUrl}/${resource}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
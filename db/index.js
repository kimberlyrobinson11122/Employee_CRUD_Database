// Import the necessary modules
const db = require('./db');
const getConnection = require('./connection.js');

// // Function to fetch roles
// async function fetchRoles() {
//   try {
//     // Get the database connection
//     const connection = await db.getConnection();
    
//     // Use the connection to fetch roles
//     const roles = await connection.query('SELECT * FROM roles');
    
//     // Return the fetched roles
//     return roles;
//   } catch (error) {
//     console.error('Error fetching roles:', error);
//     throw error;
//   }
// }

// // Call the fetchRoles function
// fetchRoles()
//   .then(roles => {
//     console.log('Fetched roles:', roles);
//   })
//   .catch(error => {
//     console.error('Error fetching roles:', error);
//   });

// //   // rest of methods to query tables 
// // }
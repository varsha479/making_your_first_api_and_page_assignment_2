const express = require('express');
const app = express();

// Map status codes to their descriptions
const statusCodes = {
  200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
  201: "Created: The request has been fulfilled and resulted in a new resource being created.",
  204: "No Content: The server successfully processed the request, but is not returning any content.",
  400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
  401: "Unauthorized: The client must authenticate itself to get the requested response.",
  403: "Forbidden: The server understands the request, but it refuses to authorize it.",
  404: "Not Found: The server can’t find the requested resource. This could be due to a missing page or resource.",
  405: "Method Not Allowed: The method specified in the request is not allowed for the resource.",
  429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
  500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: The server is temporarily unable to handle the request, usually due to being overloaded or under maintenance.",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};

// Define the GET endpoint '/status-info'
app.get('/status-info', (req, res) => {
  // Extract the code query parameter from the URL
  const code = parseInt(req.query.code);

  // Check if the code is valid and map it to the description
  if (statusCodes[code]) {
    res.status(code).json({
      status: code,
      message: statusCodes[code]
    });
  } else {
    // If the status code is not valid, return 400 (Bad Request)
    res.status(400).json({
      status: 400,
      message: "Bad Request: The status code provided is invalid or missing."
    });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});

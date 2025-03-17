import express from "express";
import bodyParser from "body-parser";
import { filterImageFromURL, deleteLocalFiles } from "./util/util.js";

// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

/**************************************************************************** */

//! END @TODO1

// Root Endpoint
// Displays a simple message to the user
app.get("/", async (req, res) => {
  res.status(200).send("try GET /filteredimage?image_url={}");
});

// filteredimage Endpoint
// Filter an image from a public URL
app.get("/filteredimage", async (req, res) => {
  // Check that the image parameter exists and that the file extension is valid
  let { image_url } = req.query;
  if (!image_url) {
    return res.status(400).send(`Image URL is required, used "${image_url}"`);
  }
  //if (!["bmp", "gif", "jpg", "png"].includes(image_url.split(".").pop())) {
  //  return res.status(401).send(`Image must be of type bmp, gif, jpg, or png. Found ${image_url.split(".")} instead`);
  //}

  // Filter the image and send it back, deleting the file after sending and
  // handling errors
  try {
    let filteredpath = await filterImageFromURL(image_url);
    res
      .status(200)
      .sendFile(filteredpath, () => deleteLocalFiles([filteredpath]));
  } catch (error) {
    res.status(422).send(`Error processing : ${error}`);
  }
});

// Default endpoint for invalid requests
app.use(async (req, res) => {
  res.status(404).send("try GET /filteredimage?image_url={}");
});

// Start the Server
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});

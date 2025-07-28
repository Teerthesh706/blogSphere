import grid from 'gridfs-stream';
import mongoose from 'mongoose';
import express from "express";
const router = express.Router();

const url = 'http://localhost:8000';


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

router.post("/upload", (req, res) => {
  // Handle image upload and save to database
  const file = req.file;
  const upload = gfs.upload(file);
  upload.on("error", (err) => {
    console.error(err);
    res.status(500).send({ message: "Error uploading file" });
  });
  upload.on("finish", () => {
    res.send({ message: "File uploaded successfully" });
  });
});


export const uploadImage = (request, response) => {
    if(!request.file){ 
        return response.status(404).json("File not found");
    }
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);    
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}

export default router;
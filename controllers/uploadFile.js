import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import {asyncQuery} from "../config/database.js"

const allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];
const imageDirectory = '../public/img';
const MAX_FIELD_SIZE = 20 * 1024 * 1024;
const sql = " INSERT INTO pictures (url, product_id, caption) WHERE product_id = ?"

const form = formidable({
  multiples: false,
  keepExtensions: true,
  encoding: 'utf-8',
  maxFieldsSize: MAX_FIELD_SIZE,
});

const checkAcceptedExtensions = (file) => {
    const type = file.mimetype.split('/').pop();
    return allowedExtensions.includes(type);
};

const uploadFile = async (req, res) => {
    form.parse(req, async (err, fields, files) => {
        if (err) {
            if (err.code === 'LIMIT_FIELD_SIZE') {
                return res.status(400).json({ error: `Le fichier dépasse la taille maximum autorisée de ${MAX_FIELD_SIZE / 1024 / 1024} Mo.` });
            }
            return res.status(500).json({ error: 'Le fichier ne peut pas être traité.' });
        }
        
        const {username} = fields
        
        const file = files.files;
        if (!file || file.size === 0) {
            return res.status(400).json({ error: 'Aucun fichier n\'a été téléchargé.' });
        }

        if (!checkAcceptedExtensions(file)) {
            return res.status(400).json({ error: 'Type de fichier non valide.' });
        }
    
        const newFilename = `${file.newFilename}`;
        const newPath = path.join(imageDirectory, newFilename);

        if (!fs.existsSync(imageDirectory)) {
            return res.status(500).json({ error: `Le dossier ${imageDirectory} n'existe pas.` });
        }

        try {
            await fs.promises.copyFile(file.filepath, newPath);
            asyncQuery(sql,[newFilename])
            return res.json({ success: true });
        } catch (e) {
            return res.status(500).json({ error: 'Le fichier ne peut pas être enregistré.' });
        }
    });
};

export default uploadFile;



//version Chat 20022023

/*import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const UploadFiles = () => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop a file here, or click to select a file</p>
      {file && <p>Selected file: {file.name}</p>}
      <button onClick={onSubmit} disabled={!file}>Upload</button>
    </div>
  );
};

export default UploadFiles;
*/
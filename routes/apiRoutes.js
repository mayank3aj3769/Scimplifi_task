const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

try {
    router.post('/create-session', sessionController.createSession);

    // The upload.array('file') middleware is used to handle file uploads. 'file' is the name of the form-data field.
    router.post('/upload-file/:sessionId', upload.array('files', 15), sessionController.uploadFile);

    // api endpoint to delete an entire session
    router.delete('/session/:session_id', sessionController.deleteSession);

    // end point to delete a specific file of a given session.
    router.delete('/session/:session_id/file/:fileName', sessionController.deleteFile);

} catch(error){
    throw new Error(` Error: ${error}`);
}

module.exports = router;

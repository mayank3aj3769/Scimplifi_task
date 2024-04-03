const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { generateSessionId,evaluateExpression } = require('../utils/apiUtils');

let sessions = {};

// Create a new session
exports.createSession = (req, res) => {
  const sessionId = generateSessionId();
  sessions[sessionId] = { files: [], total: 0 }; // a new session contains an empty list of files and total sum
  res.json({ session_id: sessionId });
};

// Upload files to a session
exports.uploadFile = (req, res) => {
    const sessionId = req.params.sessionId;
    const session = sessions[sessionId];
    
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
  
    let newTotal = session.total;

    req.files.forEach(file => {
      if (session.files.length >= 15) {
        session.files.shift(); // Remove the oldest file if max count of 15 is reached
      }
  
      const equation = require('fs').readFileSync(file.path, 'utf8');
      const result = evaluateExpression(equation);
      newTotal += result;
  
      session.files.push({ fileName: file.originalname, result });
    });
  
    session.total = newTotal;
  
    res.json({ Result: session.total });
  };

// Delete a session
exports.deleteSession = (req, res) =>  {
    const sessionId = req.params.session_id;
    if (sessions[sessionId]) {
      delete sessions[sessionId];
      res.json({ message: 'Session deleted' });
    } else {
      res.status(404).json({ message: 'Session not found' });
    }
  };

// Delete a specific file from a session
exports.deleteFile = (req, res) => {
    const sessionId = req.params.session_id;
    const fileName = req.params.fileName;
    const session = sessions[sessionId];
  
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
  
    const fileIndex = session.files.findIndex(file => file.fileName === fileName);
    if (fileIndex !== -1) {
      const file = session.files[fileIndex];
      session.total -= file.result; // Adjust total after file deletion
      session.files.splice(fileIndex, 1); // Remove the file
      res.json({ Result: session.total });
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  };
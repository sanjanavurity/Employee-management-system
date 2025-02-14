import express from 'express';
import con from '../utils/db.js'; // Update the path if needed
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/adminlogin', (req, res) => {
  const sql = "SELECT * FROM employee WHERE username = ? AND password = ?";
  con.query(sql, [req.body.username, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const username = result[0].username;
      const token = jwt.sign(
        { role: 'admin', username: username },
        'jwt_secret_key',
        { expiresIn: '1d' }
      );
      res.cookie('token', token);
      return res.json({ loginStatus: true,  role: result[0].role});
    } else {
      return res.json({ loginStatus: false, Error: "wrong credentials" });
    }
  });
});

export { router as adminRouter };
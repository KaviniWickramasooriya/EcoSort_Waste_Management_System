// routes/paymentRoutes.js
const express = require('express');
const multer = require('multer');
const { createPayment, getPaymentsForUser, uploadReceipt, reviewPayment,getPayments,getReceipt } = require('../controllers/paymentController');

const router = express.Router();
const upload = multer({ dest: 'uploads/receipts/' });  // Multer configuration for file upload

// Admin creates a payment for a request
router.post('/payments', createPayment);

// Get payments for a specific user
router.get('/payments/:id', getPaymentsForUser);
router.get('/allpayments', getPayments);
router.get('/payments/:paymentId/receipt', getReceipt);





// User uploads a receipt for a payment
router.post('/payments/:paymentId/receipt', upload.single('receiptFile'), uploadReceipt);

// Admin reviews a payment receipt
router.post('/payments/:paymentId/review', reviewPayment);

module.exports = router;

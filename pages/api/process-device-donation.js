import { StatusCodes } from 'http-status-codes';
import admin from 'firebase-admin';

import db from '../../firebase.config';

export default async function processDeviceDonation(req, res) {
  console.log(req.method);

  const data = {
    city: req.body.city || '',
    country: req.body.country || '',
    description: req.body.description || '',
    email: req.body.email || '',
    name: req.body.name || '',
    originalPurchasePrice: req.body.originalPurchasePrice || '0',
    phone: req.body.phone || '',
    postalCode: req.body.postalCode || '',
    state: req.body.state || '',
    streetAddress: req.body.streetAddress || '',
    streetAddress2: req.body.streetAddress2 || '',
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    debug: req.method === 'GET',
  };

  const result = await db.collection('DeviceDonations').add(data);
  // TODO send email per https://github.com/margaritahumanitarian/helpafamily/issues/166
  res.status(StatusCodes.OK).json({ receiptNumber: result.id, data });
}

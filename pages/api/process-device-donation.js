import { StatusCodes } from 'http-status-codes';

import db from "../../firebase.config";


export default async function processDeviceDonation(req, res) {

  const data =  {
    city: req.body.city || "Palmdale",
    country: req.body.country || "USA",
    description: req.body.description || "Do good works",
    email: req.body.email || "joe@example.com",
    name: req.body.name || "Joe Example",
    originalPurchasePrice: req.body.originalPurchasePrice || "$2000",
    phone: req.body.phone || "+1-123-456-7890",
    postalCode: req.body.postalCode || "54321",
    state: req.body.state || "CA",
    streetAddress: req.body.streetAddress || "1234 Main Street"
  };
  
  const result = await db.collection('DeviceDonations').add(data);

  res.status(StatusCodes.OK).json({ receiptNumber: result.id, data });
}

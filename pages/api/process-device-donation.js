import { StatusCodes } from 'http-status-codes';

import db from "../../firebase.config";


export default async function processDeviceDonation(req, res) {

  const data =  {
    city: req.body.city || "",
    country: req.body.country || "",
    description: req.body.description || "",
    email: req.body.email || "",
    name: req.body.name || "",
    originalPurchasePrice: req.body.originalPurchasePrice || "0",
    phone: req.body.phone || "",
    postalCode: req.body.postalCode || "",
    state: req.body.state || "",
    streetAddress: req.body.streetAddress || ""
  };
  
  const result = await db.collection('DeviceDonations').add(data);

  res.status(StatusCodes.OK).json({ receiptNumber: result.id, data });
}

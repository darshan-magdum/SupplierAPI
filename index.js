const express = require('express');
const app = express();
const PORT = 3000;

const suppliers = [
  { supplierName: "Star Traders", vatNumber: 12345, companyCode: 123, status: "Available" },
  { supplierName: "Audi", vatNumber: 98765, companyCode: 1245, status: "Available" },
  { supplierName: "Green Foods", vatNumber: 45678, companyCode: 3456, status: "Blocked" },
  { supplierName: "CodeWave Solutions", vatNumber: 11223, companyCode: 8894, status: "Deleted" },
  { supplierName: "Speed Cargo", vatNumber: 33445, companyCode: 8785, status: "Unavailable" },
  { supplierName: "BMW", vatNumber: 66789, companyCode: 456, status: "Available" },
  { supplierName: "VisionCore Ltd", vatNumber: 77890, companyCode: 4657, status: "Blocked" },
  { supplierName: "Hardex Solutions", vatNumber: 88991, companyCode: 238, status: "Deleted" },
  { supplierName: "BrightPath Systems", vatNumber: 99012, companyCode: 549, status: "Unavailable" },
  { supplierName: "Solar Tech", vatNumber: 22334, companyCode: 4565, status: "Available" },
  { supplierName: "Alpha O2 Ltd", vatNumber: 55667, companyCode: 5611, status: "Blocked" }
];




app.get('/suppliers', (req, res) => {
  res.json({ suppliers });
});


const inputData = {
  "intents": [
    { "name": "vendor_lookup", "Source_System": "SAP-MDGBP", "confidence": 0.94 },
    { "name": "create_vendor_request", "Source_System": "ARIBA", "confidence": 0.88 }
  ],
  "entities": [
    { "type": "vendor_name", "value": "Nihi Ltd" },
    { "type": "country", "value": "India" }
  ]
};

app.get("/api/getData", (req, res) => {
  res.json({
    success: true,
    data: inputData
  });
});

app.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});

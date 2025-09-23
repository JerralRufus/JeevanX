import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); 

app.get("/geocode", async (req, res) => {
  const { city } = req.query;
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${city}`,
      {
        headers: {
          "User-Agent": "disease-tracker-app/1.0", 
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch from Nominatim" });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching coordinates" });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));

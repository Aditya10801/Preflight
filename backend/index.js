const express = require("express");
const cors = require("cors");
const zod = require("zod");
require("dotenv").config();
const PORT = process.env.PORT || 3000;


const app = express();
app.use(cors());
app.use(express.json());

const icaoSchema = zod.object({
  icao: zod.string().length(4)
});

app.get("/data", async (req, res) => {
  let payload = req.body;
  if (!payload || Object.keys(payload).length === 0) {
    payload = { icao: req.query.icao }; 
  }
  const validatedPayload = icaoSchema.safeParse(payload);

  if (!validatedPayload.success) {
    res.status(411).json({
      msg: "Please Verify Inputs ",
    });
  }
  const icao = payload.icao;
  const response = await fetch(
    `https://aviationweather.gov/api/data/metar?ids=${icao}&format=json`
  );
  const jsonResponse = await response.json();
  if (jsonResponse.length == 0 || !jsonResponse) {
    res.status(401).json({
      msg: "No METAR found, please check the inputs",
    });
    return;
  }
  const metar = jsonResponse[0];
  const stationName = metar.name;
  const rawMetar = metar.rawOb;
  const temp = metar.temp;
  const vis = metar.visib;
  const alt = metar.altim;
  const clouds = metar.clouds
  const wind = `${metar.wdir}@${metar.wspd}`;
  const fltCat = metar.fltCat;

  const runwayResponse = await fetch(
    `https://aviationweather.gov/api/data/airport?ids=${icao}&format=json`
  );
  const jsonRunwayResponse = await runwayResponse.json();
  if (jsonRunwayResponse.length == 0 || !jsonRunwayResponse) {
    res.status(401).json({
      msg: "No data found, please check the inputs",
    });
    return;
  }
  const info = jsonRunwayResponse[0];
  const lat = info.lat;
  const long = info.long;
  const runways = info.runways;

  res.status(200).json({
    stationName,
    rawMetar,
    temp,
    vis,
    alt,
    clouds,
    wind,
    lat,
    long,
    runways,
    fltCat
  });

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
//const axios = require("axios");
require("dotenv").config();
let app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Set EJS as templating engine
app.set("view engine", "ejs");

const assets_english = {
  selectedLang: "english",
  title_ObjectURL: "./assets/models/golam title.glb",
  title_image_url: "./assets/icons/Golam_logo.png",
  font_size: "2.5vw",
  page2_text_1: "For the best AR viewing experience please follow these steps.",
  page2_step_1:
    "Stand at the center of your living room with 4 feet of empty space in front & back.",
  page2_step_2:
    "Place a textured object in front of you & scan it when prompted by the app for accurate & robust camera tracking.",
  page2_step_3: "Enjoy. Have a GOLAM time.",
  //asp_sandeep_voice_url: "./assets/audio/Eng A.wav",
  asp_sandeep_video_url: "./assets/video/English.mp4",
};

const assets_malayalam = {
  selectedLang: "malayalam",
  title_ObjectURL: "./assets/models/golam malayalam title.glb",
  title_image_url: "./assets/icons/Golam_Malyalam_logo.png",
  page2_text_1:
    "AR കാണാനും നല്ല അനുഭവം ആസ്വദിക്കുന്നതിനായി ദയവായി ഈ ഘട്ടങ്ങൾ പാലിക്കുക.",
  page2_step_1:
    "നിങ്ങളുടെ ലിവിംഗ്‌ റൂമിന്റെ മധ്യത് നല്‍കുക. നിങളുടെ മുന്നിലും പിന്നിലും 4 അടി ഡിസ്റ്റൻസ് ഇടുവാൻ ശ്രെദ്ധിക്കുക.",
  page2_step_2:
    "ടെക്സ്ചർ ചെയ്ത ഒരു വസ്തു മുന്നിൽ വയ്ക്കുക, ശേഷം ക്രിത്യമായി സ്കാനിങ്ങും കാമറ സ്‌ട്രെക്കിങ്ങും ചെയ്യുക.",
  page2_step_3: "ഒരു നല്ല GOLAM സമയം നേരുന്നു",
  //asp_sandeep_voice_url: "./assets/audio/Mal A.wav",
  asp_sandeep_video_url: "./assets/video/Malayalam.mp4",
};

//asp_sandeep
const textureData_asp_sandeep = {
  width: 1.125,
  height: 2,
  repeatx: 1,
  repeaty: 1,
  offsetx: 0,
  offsety: 0,
};
const renderingParams_asp_sandeep = {
  //character: "shreeram",
  //videoURL: "./assets/video/Shreeram_4_small.mp4",
  textureData: textureData_asp_sandeep,
};

//barroz_assets
const assets_barroz = {
  front_video_url: "./assets/video/Clip_01.mp4",
  rear_video_url: "./assets/video/Clip_02_00.mp4",
};

const textureData_barroz = {
  width: 2,
  height: 2,
  repeatx: 1,
  repeaty: 1,
  offsetx: 0,
  offsety: 0,
};

const renderingParams_barroz = {
  textureData: textureData_barroz,
};

//king james assets
//barroz_assets
const assets_king_j = {
  front_video_url: "./assets/video/JamesVI_eyesCorrect.mp4",
  //rear_video_url: "./assets/video/Clip_02_00.mp4",
};

const textureData_assets_king_j = {
  width: 1.125,
  height: 2,
  repeatx: 1,
  repeaty: 1,
  offsetx: 0,
  offsety: 0,
};

const renderingParams_assets_king_j = {
  textureData: textureData_assets_king_j,
};

//golam root
// app.get("/", function (res, res) {
//   res.render("landingPage.ejs", {});
// });
//golam language
// app.get("/english", function (res, res) {
//   res.render("hit_test.ejs", {
//     ...renderingParams_asp_sandeep,
//     ...assets_english,
//   });
// });
//golam language
// app.get("/malayalam", function (res, res) {
//   res.render("hit_test.ejs", {
//     ...renderingParams_asp_sandeep,
//     ...assets_malayalam,
//   });
// });

//barroz
// app.get("/", function (res, res) {
//   res.render("barroz.ejs", {
//     ...renderingParams_barroz,
//     ...assets_barroz,
//   });
// });

//barroz
app.get("/", function (res, res) {
  res.render("king_james_vi.ejs", {
    ...renderingParams_assets_king_j,
    ...assets_king_j,
  });
});

// app.get("/2", function (res, res) {
//   res.render("page2.ejs", {
//     ...renderingParams_asp_sandeep,
//   });
// });

// app.get("/qr", function (res, res) {
//   res.render("qrCodePage.ejs", {});
// });

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Connected on port: " + port);
});

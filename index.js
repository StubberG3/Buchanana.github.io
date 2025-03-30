/* global $ */

"use strict";

$(document).ready(function () {
  // event listeners for when cartridges are clicked
  setEvents();
});

function setEvents() {
  const $gallery3D = document.getElementById("gallery-3D");
  const gallery3D = window.lightGallery($gallery3D, {
    dynamic: true,
    preload: 1,
    plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
    mobileSettings: "showCloseIcon: true",
    galleryId: "3D-Works",
    download: false,
    zoom: false,
    autoplayVideoOnSlide: true,
    dynamicEl: [
      {
        src: "images/3Dart/book.png",
        thumb: "images/3Dart/book.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Tome of Poorly Thought Puns</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/3Dart/staff.png",
        thumb: "images/3Dart/staff.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Unused Staff Looted From My First Dungeon <small>(+10 Nostalgia)</small></h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/3Dart/jars.png",
        thumb: "images/3Dart/jars.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Jars Lost in Space <small>(The only space they would fit)</small></h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/3Dart/merlinsRoom.png",
        thumb: "images/3Dart/merlinsRoom.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Merlin's Forgotten Attic</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/3Dart/pen.png",
        thumb: "images/3Dart/pen.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Pen Dissection</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/3Dart/stillLife.png",
        thumb: "images/3Dart/stillLife.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Be the Mischievous Citrus</h4>
                      <p></p>
                  </div>`,
      },
      {
        video:
          '{"source": [{"src":"images/3Dart/roboPhone.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}',
        thumb: "images/3Dart/roboPhoneThumb.jpg",
        subHtml: `<div class="lightGallery-captions">
                      <h4>We Would Have More Free-Time if Our Phones Used Themselves</h4>
                      <p></p>
                  </div>`,
      },
    ],
  });
  $gallery3D.addEventListener("click", () => {
    gallery3D.openGallery(0);
  });

  const $galleryVA = document.getElementById("gallery-VA");
  const galleryVA = window.lightGallery($galleryVA, {
    dynamic: true,
    plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
    mobileSettings: "showCloseIcon: true",
    galleryId: "VectorArt",
    download: false,
    zoom: false,
    autoplayVideoOnSlide: true,
    dynamicEl: [
      {
        src: "images/VectorArt/caterpillarRancher.png",
        thumb: "images/VectorArt/caterpillarRancher.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Caterpillar Rancher</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/allEnemies.png",
        thumb: "images/VectorArt/allEnemies.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Lightmare Enemy Design</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/chubbyGuppyLevels.png",
        thumb: "images/VectorArt/chubbyGuppyLevels.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Chubby Guppy Level Selection</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/clipBoard.png",
        thumb: "images/VectorArt/clipBoard.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Clip Board</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/compassCharacter.png",
        thumb: "images/VectorArt/compassCharacter.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Northy Norton! <small>(He has a good sense of direction)</small></h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/digiPort.png",
        thumb: "images/VectorArt/digiPort.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Me, but Now With More Pixels</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/DNA.png",
        thumb: "images/VectorArt/DNA.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Why are the Police Always Suspicious of DNA? <small>They find it at every crime scene.</small></h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/GooseGoofin.png",
        thumb: "images/VectorArt/GooseGoofin.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Goose Goofin'</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/gsLogo.png",
        thumb: "images/VectorArt/gsLogo.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>I Have More Girl Scout Cookies Than Cabinet Space</h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/lightWeightAssets.png",
        thumb: "images/VectorArt/lightWeightAssets.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>LightWeight Game Assets <small>(His name could've been Curby)</small></h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/Phytoplankton.png",
        thumb: "images/VectorArt/Phytoplankton.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>What Kind of Plankton Win the Most Battles? <small>Phytoplankton</small></h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/QuizRPG.png",
        thumb: "images/VectorArt/QuizRPG.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Quiz RPG Game Assets <small>(The Adventure for knowledge!)</small></h4>
                      <p></p>
                  </div>`,
      },
      {
        src: "images/VectorArt/TumorCellDeath.png",
        thumb: "images/VectorArt/TumorCellDeath.png",
        subHtml: `<div class="lightGallery-captions">
                      <h4>Tumor Cell Death</h4>
                      <p></p>
                  </div>`,
      },
    ],
  });

  $galleryVA.addEventListener("click", () => {
    galleryVA.openGallery(0);
  });

  // const $galleryDP = document.getElementById("gallery-DP");
  // const galleryDP = window.lightGallery($galleryDP, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "DigitalPainting",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       src: "images/DigiPaint/CaterpillarCrawl.png",
  //       thumb: "images/DigiPaint/CaterpillarCrawl.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Crawl</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/around.jpg",
  //       thumb: "images/DigiPaint/around.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Around</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/maggotcat.png",
  //       thumb: "images/DigiPaint/maggotcat.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Maggot Cat</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/monch.jpg",
  //       thumb: "images/DigiPaint/monch.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Monch</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/Basket.png",
  //       thumb: "images/DigiPaint/Basket.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>I Don't Do Delivery Quests Anymore</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/HeadClouds.png",
  //       thumb: "images/DigiPaint/HeadClouds.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Head in the Clouds</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/MilkHoney.png",
  //       thumb: "images/DigiPaint/MilkHoney.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Milk & Honey</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/PlanktonCollection.png",
  //       thumb: "images/DigiPaint/PlanktonCollection.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Phytoplankton? Should be Hugoplankton</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/Rot.png",
  //       thumb: "images/DigiPaint/Rot.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Root Rot</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/Starborne.jpg",
  //       thumb: "images/DigiPaint/Starborne.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>StarBorne</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/dragons.png",
  //       thumb: "images/DigiPaint/dragons.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>My Friend is Small, but Strong</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/DigiPaint/coffee.jpg",
  //       thumb: "images/DigiPaint/coffee.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Another Sip Before I Go</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //   ],
  // });
  // $galleryDP.addEventListener("click", () => {
  //   galleryDP.openGallery(0);
  // });

  // const $galleryTA = document.getElementById("gallery-TA");
  // const galleryTA = window.lightGallery($galleryTA, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "TechnicalArt",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       src: "images/TechArt/ampules.png",
  //       thumb: "images/TechArt/ampules.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Medical Ampules</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/TechArt/EndoscopeCabinets.png",
  //       thumb: "images/TechArt/EndoscopeCabinets.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Endoscope Cabinets</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/TechArt/EndoscopeFig.png",
  //       thumb: "images/TechArt/EndoscopeFig.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Endoscope Diagram</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/TechArt/LeakTester.png",
  //       thumb: "images/TechArt/LeakTester.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Leak Tester</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/TechArt/NasalSurgeryTools.png",
  //       thumb: "images/TechArt/NasalSurgeryTools.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Nasal Surgery Tools</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/TechArt/Post-FESSdebridement.png",
  //       thumb: "images/TechArt/Post-FESSdebridement.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Post-FESS Debridement</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/TechArt/RigidEndoscope.png",
  //       thumb: "images/TechArt/RigidEndoscope.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Rigid Endoscope</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/TechArt/SynovialJoints.png",
  //       thumb: "images/TechArt/SynovialJoints.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Synovial Joints</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //   ],
  // });

  // const $galleryGD = document.getElementById("gallery-GD");
  // const galleryGD = window.lightGallery($galleryGD, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "GraphicDesign",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       src: "images/GraphicDesign/DesignPosters_1.png",
  //       thumb: "images/GraphicDesign/DesignPosters_1.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Design Posters Series <small>(Part 1)</small></h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/DesignPosters_2.png",
  //       thumb: "images/GraphicDesign/DesignPosters_2.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Design Posters Series <small>(Part 2)</small></h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/GameJam_Logo.png",
  //       thumb: "images/GraphicDesign/GameJam_Logo.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Game Jam Logo</h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/HackingGame.png",
  //       thumb: "images/GraphicDesign/HackingGame.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Cyber Security Game Promotion Mockup</h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/CyberGamePhone.png",
  //       thumb: "images/GraphicDesign/CyberGamePhone.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Cyber Security Game Phone Mockup</h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/BipolarScreens.png",
  //       thumb: "images/GraphicDesign/BipolarScreens.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Bipolar E-learning Module</h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/BrainModule.png",
  //       thumb: "images/GraphicDesign/BrainModule.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Brain E-learning Module</h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/PrintLayout.png",
  //       thumb: "images/GraphicDesign/PrintLayout.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Educational Lung Module Layout</h4>
  //                         <p></p>
  //                     </div>`,
  //     },

  //     {
  //       src: "images/GraphicDesign/WoolyBear.png",
  //       thumb: "images/GraphicDesign/WoolyBear.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                         <h4>Woollington's Halloween Costume Contest</h4>
  //                         <p></p>
  //                     </div>`,
  //     },
  //   ],
  // });
  // $galleryGD.addEventListener("click", () => {
  //   galleryGD.openGallery(0);
  // });

  // const $galleryLD = document.getElementById("gallery-LD");
  // const galleryLD = window.lightGallery($galleryLD, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "Life",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       src: "images/LifeDrawing/CostumedModel.png",
  //       thumb: "images/LifeDrawing/CostumedModel.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Friends In Every Frame</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/LifeDrawing/Gregg.png",
  //       thumb: "images/LifeDrawing/Gregg.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Gregg</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/LifeDrawing/PurpleHair.jpg",
  //       thumb: "images/LifeDrawing/PurpleHair.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Purple Suits Me</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/LifeDrawing/AnimalSketch.png",
  //       thumb: "images/LifeDrawing/AnimalSketch.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>I Go to the Zoo To See the Dog</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/LifeDrawing/RhinoZooModel.png",
  //       thumb: "images/LifeDrawing/RhinoZooModel.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>The Rhino Was Cool Too</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/LifeDrawing/mouseSketches.png",
  //       thumb: "images/LifeDrawing/mouseSketches.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Rescued Mouse <small>(True story!)</small></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //   ],
  // });
  // $galleryLD.addEventListener("click", () => {
  //   galleryLD.openGallery(0);
  // });

  // $galleryTA.addEventListener("click", () => {
  //   galleryTA.openGallery(0);
  // });

  // const $galleryPM = document.getElementById("gallery-PM");
  // const galleryPM = window.lightGallery($galleryPM, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "Pyramid",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       iframe: true,
  //       src: "pyramid.html",
  //       thumb: "images/Projects/Pyramid/pyraProjIMG.png",
  //     },
  //     {
  //       src: "images/Projects/Pyramid/desktop_1.jpg",
  //       thumb: "images/Projects/Pyramid/desktop_1.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/desktop_2.jpg",
  //       thumb: "images/Projects/Pyramid/desktop_2.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/desktop_3.jpg",
  //       thumb: "images/Projects/Pyramid/desktop_3.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/desktop_4.jpg",
  //       thumb: "images/Projects/Pyramid/desktop_4.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/desktop_5.jpg",
  //       thumb: "images/Projects/Pyramid/desktop_5.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/desktop_6.jpg",
  //       thumb: "images/Projects/Pyramid/desktop_6.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/mobile_1.jpg",
  //       thumb: "images/Projects/Pyramid/mobile_1.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/mobile_2.jpg",
  //       thumb: "images/Projects/Pyramid/mobile_2.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/mobile_3.jpg",
  //       thumb: "images/Projects/Pyramid/mobile_3.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/mobile_4.jpg",
  //       thumb: "images/Projects/Pyramid/mobile_4.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/mobile_5.jpg",
  //       thumb: "images/Projects/Pyramid/mobile_5.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Pyramid/mobile_6.jpg",
  //       thumb: "images/Projects/Pyramid/mobile_6.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //   ],
  // });
  // $galleryPM.addEventListener("click", () => {
  //   galleryPM.openGallery(0);
  // });

  // const $galleryCG = document.getElementById("gallery-CG");
  // const galleryCG = window.lightGallery($galleryCG, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "ChubbyGuppy",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       iframe: true,
  //       src: "chubbyguppy.html",
  //       thumb: "images/Projects/ChubbyGuppy/ChubbyGuppyProject.png",
  //     },
  //     {
  //       video:
  //         '{"source": [{"src":"images/Projects/ChubbyGuppy/ChubbyTrailer.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}',
  //       thumb: "images/Projects/ChubbyGuppy/ChubbyTrailerThumb.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Chubby Guppy Trailer</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/ChubbyGuppy/ChubbyGuppyWallpaper.png",
  //       thumb: "images/Projects/ChubbyGuppy/ChubbyGuppyWallpaper.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Chubby Guppy Wallpaper</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/ChubbyGuppy/chubbyScreen.png",
  //       thumb: "images/Projects/ChubbyGuppy/chubbyScreen.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Chubby Guppy Screen</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/ChubbyGuppy/crab.gif",
  //       thumb: "images/Projects/ChubbyGuppy/crab.gif",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Crab Walkin'</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/ChubbyGuppy/eel.gif",
  //       thumb: "images/Projects/ChubbyGuppy/eel.gif",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Eelectrifying Eel</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/ChubbyGuppy/shrimp.gif",
  //       thumb: "images/Projects/ChubbyGuppy/shrimp.gif",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Shrimp <small>(Love at first sight)</small></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //   ],
  // });

  // $galleryCG.addEventListener("click", () => {
  //   galleryCG.openGallery(0);
  // });

  // const $galleryHC = document.getElementById("gallery-HC");
  // const galleryHC = window.lightGallery($galleryHC, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "HEMOCRAFT",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       iframe: true,
  //       src: "HEMOCRAFT.html",
  //       thumb: "images/Projects/HEMOCRAFT/HEMOCRAFTProject.png",
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Infusion_Kit.png",
  //       thumb: "images/Projects/HEMOCRAFT/Infusion_Kit.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Infusion Kit</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Minecraft_Infusion_Items.png",
  //       thumb: "images/Projects/HEMOCRAFT/Minecraft_Infusion_Items.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Infusion Kit Items</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Custom_Characters.png",
  //       thumb: "images/Projects/HEMOCRAFT/Custom_Characters.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Custom Characters</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Hospital.png",
  //       thumb: "images/Projects/HEMOCRAFT/Hospital.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Hospital</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Hospital_Lab.png",
  //       thumb: "images/Projects/HEMOCRAFT/Hospital_Lab.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Hospital Lab</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Syringe_Crafting.png",
  //       thumb: "images/Projects/HEMOCRAFT/Syringe_Crafting.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Syringe Crafting</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Hospital_Library.png",
  //       thumb: "images/Projects/HEMOCRAFT/Hospital_Library.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Hospital Library</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Library_Book.png",
  //       thumb: "images/Projects/HEMOCRAFT/Library_Book.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Library Book</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/Empty_Market.png",
  //       thumb: "images/Projects/HEMOCRAFT/Empty_Market.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Empty Market</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //     {
  //       src: "images/Projects/HEMOCRAFT/house.png",
  //       thumb: "images/Projects/HEMOCRAFT/house.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Village of Vale House</h4>
  //                     <p></p>
  //                     </div>`,
  //     },
  //   ],
  // });

  // $galleryHC.addEventListener("click", () => {
  //   galleryHC.openGallery(0);
  // });

  // const $galleryLM = document.getElementById("gallery-LM");
  // const galleryLM = window.lightGallery($galleryLM, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "Lightmare",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       iframe: true,
  //       src: "lightmare.html",
  //       thumb: "images/Projects/Lightmare/LightmareIMG.png",
  //     },
  //     {
  //       video:
  //         '{"source": [{"src":"images/Projects/Lightmare/LightmareTrailer.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}',
  //       thumb: "images/Projects/Lightmare/LightmareTrailerThumb.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Lightmare Trailer</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Lightmare/daughterCharacterConcept.png",
  //       thumb: "images/Projects/Lightmare/daughterCharacterConcept.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Lightmare Player Character Concept (Desktop)</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Lightmare/mobilePlayerConcept.png",
  //       thumb: "images/Projects/Lightmare/mobilePlayerConcept.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Lightmare Player Character Concept (Mobile)</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Lightmare/DesktopCharacterVector.png",
  //       thumb: "images/Projects/Lightmare/DesktopCharacterVector.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Lightmare Player Character (Desktop)</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Lightmare/MobileCharacterVector.png",
  //       thumb: "images/Projects/Lightmare/MobileCharacterVector.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Lightmare Player Character (Mobile)</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Lightmare/phases.png",
  //       thumb: "images/Projects/Lightmare/phases.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>5 Stages of Grief</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/Lightmare/lightmareEnemies.png",
  //       thumb: "images/Projects/Lightmare/lightmareEnemies.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Lightmare Enemies</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       iframe: true,
  //       src: "https://angelabuchanan.me/CharacterAnimationExample_v2/index.html",
  //       thumb: "images/Projects/Lightmare/playerexampleThumb.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                 <h4>Interactive Character Example</h4>
  //                 <p>!! Example takes time to load !!</p>

  //             </div>`,
  //     },
  //     {
  //       iframe: true,
  //       src: "https://angelabuchanan.me/LightmareEnemyExamples_v3/index.html",
  //       thumb: "images/Projects/Lightmare/enemyexampleThumb.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                 <h4>Interactive Enemy Example</h4>
  //                 <p>!! Example takes time to load !!</p>
  //             </div>`,
  //     },
  //   ],
  // });

  // $galleryLM.addEventListener("click", () => {
  //   galleryLM.openGallery(0);
  // });

  // const $galleryAA = document.getElementById("gallery-AA");
  // const galleryAA = window.lightGallery($galleryAA, {
  //   dynamic: true,
  //   preload: 1,
  //   plugins: [lgZoom, lgVideo, lgThumbnail, lgHash],
  //   mobileSettings: "showCloseIcon: true",
  //   galleryId: "AlienArcade",
  //   download: false,
  //   zoom: false,
  //   autoplayVideoOnSlide: true,
  //   dynamicEl: [
  //     {
  //       iframe: true,
  //       src: "alienarcade.html",
  //       thumb: "images/Projects/AlienArcade/AlienArcadeLogo.png",
  //     },
  //     {
  //       video:
  //         '{"source": [{"src":"images/Projects/AlienArcade/AlienArcade.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}',
  //       thumb: "images/Projects/AlienArcade/TrailerThumb.jpg",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Alien Arcade Trailer</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/shootoutconcept.png",
  //       thumb: "images/Projects/AlienArcade/shootoutconcept.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Alien Arcade Shootout Game Concept</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/StelloSays.png",
  //       thumb: "images/Projects/AlienArcade/StelloSays.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Alien Arcade Stello Says Game Concept</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/aliensconcept.png",
  //       thumb: "images/Projects/AlienArcade/aliensconcept.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Alien Arcade Concept Characters</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/Alien_Orthagraphics.png",
  //       thumb: "images/Projects/AlienArcade/Alien_Orthagraphics.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Alien Character Design</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/Alien.png",
  //       thumb: "images/Projects/AlienArcade/Alien.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>The Alien Character Design <small>(That the aliens wanted)</small></h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/AlienExample.png",
  //       thumb: "images/Projects/AlienArcade/AlienExample.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Alien Character Model</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/DanceOff.png",
  //       thumb: "images/Projects/AlienArcade/DanceOff.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Dance Off Mini-game</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/DrawAtNoon.gif",
  //       thumb: "images/Projects/AlienArcade/DrawAtNoon.gif",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Draw at Noon Mini-game</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //     {
  //       src: "images/Projects/AlienArcade/WhackAnAlien.png",
  //       thumb: "images/Projects/AlienArcade/WhackAnAlien.png",
  //       subHtml: `<div class="lightGallery-captions">
  //                     <h4>Whack-An-Alien Mini-game</h4>
  //                     <p></p>
  //                 </div>`,
  //     },
  //   ],
  // });

  // $galleryAA.addEventListener("click", () => {
  //   galleryAA.openGallery(0);
  // });
}

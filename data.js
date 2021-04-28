var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-left",
      "name": "Front-Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07768981696443866,
        "pitch": 0.9918328004604575,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.2032949946989131,
          "pitch": 0.3301007229397612,
          "rotation": 0,
          "target": "2-back"
        },
        {
          "yaw": -0.8829460462677172,
          "pitch": 0.31684549021205655,
          "rotation": 0,
          "target": "1-front-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-right",
      "name": "Front-Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5777701768647265,
        "pitch": 1.0347014999950925,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.0134060902825581,
          "pitch": 0.29118066023213274,
          "rotation": 0,
          "target": "0-front-left"
        },
        {
          "yaw": -0.47302683027855963,
          "pitch": 0.3849797877165173,
          "rotation": 0,
          "target": "2-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-back",
      "name": "Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.03537947930170304,
        "pitch": 0.6141765707451903,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.5056177465334315,
          "pitch": 0.14585235711200895,
          "rotation": 0,
          "target": "1-front-right"
        },
        {
          "yaw": 0.6035146859262976,
          "pitch": 0.14631297892850625,
          "rotation": 0,
          "target": "0-front-left"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SentroNgKabataan",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

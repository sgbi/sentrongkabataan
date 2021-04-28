var APP_DATA = {
  "scenes": [
    {
      "id": "0-sk-front-left",
      "name": "SK Front Left",
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
        "yaw": 0.03490912606880592,
        "pitch": 0.7046389096249399,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.16903639870443854,
          "pitch": 0.2587815711374475,
          "rotation": 0,
          "target": "2-sk-back"
        },
        {
          "yaw": -0.8791602227199036,
          "pitch": 0.16980390352023988,
          "rotation": 0,
          "target": "1-sk-front-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sk-front-right",
      "name": "SK Front Right",
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
        "yaw": 0.04030143602880365,
        "pitch": 0.7403233944079819,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.5198487400694454,
          "pitch": 0.4209198801883165,
          "rotation": 0,
          "target": "2-sk-back"
        },
        {
          "yaw": 0.9528889229367987,
          "pitch": 0.23660612499394595,
          "rotation": 0,
          "target": "0-sk-front-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sk-back",
      "name": "SK Back",
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
        "yaw": -0.006296861653673602,
        "pitch": 0.4152607015185339,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.6588377538350887,
          "pitch": -0.07074957850971053,
          "rotation": 0,
          "target": "1-sk-front-right"
        },
        {
          "yaw": -0.6227369875023108,
          "pitch": -0.07752070826371948,
          "rotation": 0,
          "target": "0-sk-front-left"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sentro ng Kabataan",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

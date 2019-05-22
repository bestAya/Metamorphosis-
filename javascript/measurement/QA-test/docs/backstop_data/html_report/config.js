report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\kred_map_0_document_0_phone.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20190522-093803\\kred_map_0_document_0_phone.png",
        "selector": "document",
        "fileName": "kred_map_0_document_0_phone.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "2.07",
          "analysisTime": 16
        },
        "diffImage": "..\\..\\..\\backstop_data\\bitmaps_test\\20190522-093803\\failed_diff_kred_map_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\kred_map_0_document_1_ipad.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20190522-093803\\kred_map_0_document_1_ipad.png",
        "selector": "document",
        "fileName": "kred_map_0_document_1_ipad.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "ipad",
        "error": "Reference file not found C:\\Users\\Admin\\Desktop\\新建文件夹\\Metamorphosis-\\javascript\\measurement\\QA-test\\backstop_data\\bitmaps_reference\\kred_map_0_document_1_ipad.png"
      },
      "status": "fail"
    }
  ],
  "id": "kred"
});
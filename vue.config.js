module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.mzm.estream_player",
        "linux": {
          "maintainer": "Zeyad Obaia",
          "executableName": "Estream-Player",
          "category": "Utility",
          "desktop": "Estream-Player",
          "target": "deb",
        },
        "mac": {
          "target": "dmg"
        },
        "win": {
          "target": [
            {
              "target": "nsis",
              "arch": [
                "ia32"
              ]
            }
          ]
        },
        "asarUnpack": [
          "**/exe/*"
        ],
        publish: ['github']
      }
    }
  }
}



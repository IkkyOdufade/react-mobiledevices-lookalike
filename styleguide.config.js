const path = require("path");





module.exports = {
webpackConfig:{
    module:{
        rules:[
            {
                "test":/\.jsx?$/,
                "exclude":/node_modules/,
                "loader": "babel-loader"
            }
        ]
    }
},
title: "React MobilePhones Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "react-mobilephones-components-library": path.resolve(__dirname, "src")
  }
}
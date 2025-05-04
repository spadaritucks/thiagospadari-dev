const babelConfig = {
    "presets": ["@babel/preset-typescript"],
    "plugins": [["babel-plugin-styled-components", {
        "ssr" : true
    }]]
}

export default babelConfig
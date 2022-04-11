const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		juru_pungut: "./src/juru_pungut/index.js",
		zona: "./src/Zona/index.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
					},
				],
			},
		],
	},
	optimization: {
		minimize: true,
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			Popper: ["popper.js", "default"],
		}),
	],
};

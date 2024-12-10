import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "dmhpj-ui",
			formats: ["cjs", "es", "umd"],
			fileName: (format) => `dmhpj-ui.${format}.js`,
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	plugins: [
		vue({
			include: [/\.vue$/],
		}),
		dts({
			tsconfigPath: 'tsconfig.app.json',
			insertTypesEntry: true,
			copyDtsFiles: true,
			include: ["src/**/*.d.ts", "src/**/*.vue", "src/**/*.ts"],
		}),
	],
});

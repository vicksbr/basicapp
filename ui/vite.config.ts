export default {
  build: {
    outDir: '../backend/dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
}
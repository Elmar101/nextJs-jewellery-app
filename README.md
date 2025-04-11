# HUSKY (https://www.youtube.com/watch?v=Z-ZeBrZ6f5U) HUSKY+ lint-staged => (https://www.youtube.com/watch?v=bL5GaBjKAAw)

npm i -D husky
npx husky init
entered .husky folder and pre-commit add this line (npm run lint | bun run lint )
npm install lint-staged -D
npm install @commitlint/cli @commitlint/config-conventional --save-dev

# Static Assets in `public`

Next.js can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/).

For example, the file public/avatars/me.png can be viewed by visiting the /avatars/me.png path. The code to display that image might look like

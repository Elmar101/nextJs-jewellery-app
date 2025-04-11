- ESLINT => https://eslint.org/
- ESLINT STYLE => https://eslint.style/packages/ts
- PRETTIER => https://prettier.io/
- PRE-COMMIT => https://prettier.io/docs/precommit
- LINT STAGED => https://github.com/lint-staged/lint-staged

# ESLINT + PRETTIER (https://www.youtube.com/watch?v=F0IrHtPo-Ec&list=PL1TrjkMQ8UbVjig1BXDBo1oMzMgVc5I_a)

# ESLINT configuration

1. npm install eslint --save-dev
2. npx eslint --init (some question we will answer)
3. npx eslint . (check all files we can use . instead of file name ex: npx eslint src/index.js) we dont download eslint global thats why dont run "eslint" command (eslint --init -> dont work) now we use npx eslint --init if we want to check one file we can use "npx eslint (file-name)"
4. open "package.json" and add "lint": "eslint . --ext .js, .ts, .jsx, .tsx, .json, .cjs, .vue" in "scripts" ext -> extension (fayl uzantisi) now we can use "npm run lint" -> check all files because we add "eslint ." ex: "lint": "eslint src --ext .js, .ts, .jsx, .tsx, .json, .cjs, .vue" "lint": "eslint (directory-name) --ext .js, .ts, .jsx, .tsx, .json, .cjs, .vue --fix" => "lint": "eslint . --ext .js, .ts, .jsx, .tsx, .json, .cjs, .vue"

## NEW VERSION WE DONT NEED TO ADD EXTENSIONS IN package.json SCRIPTS ("lint": "eslint ." or "lint" : "eslint src" )

5. we need display eslint errors in vscode or editor tools that why we need to install eslint plugin(Extensions) in vscode or other editor tools opening Extension and search ESLint and install -> we chhose ESLint (microsift)
6. create .eslintignore => we need to some folder dont show eslint errors in vscode or editor tools that why we need to create .eslintignore file and add folder name in .eslintignore
7. "lint:fix": "eslint . --ext .js, .ts, .jsx, .tsx, .json, .cjs, .vue --fix" (we can use "npm run lint:fix" command) fixed all eslint errors added this "lint:fix": "eslint . --ext .js, .ts --fix" script in scripts of "package.json" . - is directory name (directory name is "src", pages, components, utils, etc) --ext .js, .ts, .jsx, .tsx, .json, .cjs, .vue => we can add extension name

## NEW VERSION WE DONT NEED TO ADD EXTENSIONS IN package.json SCRIPTS ("lint:fix": "eslint . --fix" or "lint:fix" : "eslint src --fix" )

8. we open "settings.json" -> "editor.codeActionsOnSave": { "source.fixAll.eslint": true } this is for save and fix all eslint errors

# PRETTIER configuration

1. npm install --save-dev --save-exact prettier | bun add --dev --exact prettier | pnpm add --save-dev --save-exact prettier | yarn add --dev --exact prettier
2. Then, create an empty config file to let editors and other tools know you are using Prettier: epen terminal and run following script node --eval "fs.writeFileSync('.prettierrc','{}\n')"
3. Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example: node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
4. Now, format all files with Prettier: => npx prettier . --write | bun exec prettier . --write | pnpm exec prettier . --write | yarn exec prettier . --write . - is directory name (directory name is "src", pages, components, utils, etc) ex: prettier --write app/components/Button.js prettier --write . is great for formatting everything, but for a big project it might take a little while. You may run prettier --write app/ to format a certain directory, or prettier --write app/components/Button.js to format a certain file. Or use a glob like prettier --write "app/\*_/_.test.js" to format all tests in a directory (see fast-glob for supported glob syntax). If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues! npx prettier . --check --check is like --write, but only checks that files are already formatted, rather than overwriting them. prettier --write and prettier --check are the most common ways to run Prettier.
5. Git hooks In addition to running Prettier from the command line (prettier --write), checking formatting in CI, and running Prettier from your editor, many people like to run Prettier as a pre-commit hook as well. This makes sure all your commits are formatted, without having to wait for your CI build to finish. For example, you can do the following to have Prettier run before each commit: npm install --save-dev husky lint-staged npx husky init node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')" or bun add --dev husky lint-staged bunx husky init bun --eval "fs.writeFileSync('.husky/pre-commit','bunx lint-staged\n')"
6. Add the following to your package.json: "lint-staged": { "\*_/_": "prettier --write --ignore-unknown" } prettier --write faylları avtomatik formatlaşdırır. prettier --check isə sadəcə formatlama vəziyyətini yoxlayır və CI mühitlərində istifadə üçün idealdır.

# (https://github.com/prettier/eslint-config-prettier)

## eslint-config-prettier - is used to prevent conflicts when using ESLint and Prettier in the same project.

ESLint ilə Prettier-i eyni layihədə istifadə edərkən yaranan konfliktlərin qarşısını almaq üçün istifadə olunur.

ESLint and Prettier sometimes conflict when used together, as both try to apply stylistic rules to the code at the same time. ESLint və Prettier birlikdə istifadə edilərkən bəzən konfliktlər yaradır, çünki hər ikisi eyni vaxtda kodun formatlama (stylistic) qaydalarını tətbiq etməyə çalışır.

Since Prettier does the formatting automatically, ESLint's formatting rules are no longer needed and conflicting. Prettier avtomatik formatlama etdiyi üçün, ESLint-in formatlama qaydaları artıq lazımsız və konfliktə səbəb olur.

eslint-config-prettier prevents these conflicts and automatically disables all ESLint formatting rules. eslint-config-prettier isə bu konfliktlərin qarşısını alır və ESLint-in formatlama ilə bağlı bütün qaydalarını avtomatik söndürür.

1. npm i -D eslint-config-prettier | bun add -D eslint-config-prettier | bun add -D eslint-config-prettier | yarn add -D eslint-config-prettier

## eslint-plugin-prettier - is used to integrate Prettier into ESLint.

ESLint-in Prettier-ə inteqrasiya etmək üçün istifadə olunur.

1. npm install --save-dev eslint-plugin-prettier eslint-config-prettier -D | bun add -D eslint-plugin-prettier eslint-config-prettier | pnpm add -D eslint-plugin-prettier eslint-config-prettier | yarn add -D eslint-plugin-prettier eslint-config-prettier
2. npm install --save-dev --save-exact prettier | bun add --save-dev --save-exact prettier | pnpm add --save-dev --save-exact prettier | yarn add --save-dev --save-exact prettier

3. add "plugin:prettier/recommended" in extends from eslintConfig (extends: ["next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"]) old wersion of eslintConfig new version we add -> import eslintConfigPrettier from "eslint-config-prettier/flat"; and add eslintConfigPrettier this line to extends in eslint.config.js
4. "format": "prettier src --write \"\*_/_.{ts,tsx,js,jsx,json,md,css,scss}\"", add this line to package.json of scripts or "format": "prettier . --write" dont need extension "format": "prettier . --write" . is for all files (we can write folder name like src)' now we can remove "source.fixAll.eslint": true this line in "editor.codeActionsOnSave" from settings.json
5. npm run format | bun run format | pnpm run format | yarn run format

6. we can download Prettier extension in VSCode or other tools after we add "editor.defaultFormatter": "esbenp.prettier-vscode" and "editor.formatOnSave: true in settings.json

# HUSKY (https://www.youtube.com/watch?v=Z-ZeBrZ6f5U) HUSKY+ lint-staged => (https://www.youtube.com/watch?v=bL5GaBjKAAw)

1. npm i -D husky npx husky init entered
2. .husky folder and pre-commit add this line (npm run lint | bun run lint )
3. npm install lint-staged -D AND npm install @commitlint/cli @commitlint/config-conventional --save-dev npm install -D @commitlint/config-conventional @commitlint/cli create commitlint.config.js file and add this line module.exports = { extends: ['@commitlint/config-conventional'] }

# Static Assets in `public`

Next.js can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/).

For example, the file public/avatars/me.png can be viewed by visiting the /avatars/me.png path. The code to display that image might look like

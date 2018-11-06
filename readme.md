#Empty Gulp project
This package contains empty project that is ready to be deployed.

## Requirements

1. Node.js
2. Git

## Quick Start

1. Install EGP to your local project directory

```
git clone git@github.com:PsykeSPB/egp.git .
```

2. Install all needed dependencies

```
npm install
```

3. Test it with `gulp` command. If it executes without errors, you are ready to start development.

## Usage

Source files should be stored at `src/` folder in any structure of subfolders.
After gulp process files it stores it in a assert folder.

1. Use `gulp` to run all set of tasks.
2. Use `gulp watch` to start auto update. (Watcher updates only specific part of the default task, not all at once).
3. Use `gulp clean` to delete assets directory.

## Dependencies

1. Task Managment
   - Gulp4
2. JS Preprocessing
   - gulp-babel
   - gulp-uglify
   - gulp-concat
3. CSS Preprocessing
   - gulp-sass
   - gulp-clean-css
   - gulp-concat-css
4. Images optimization
   - gulp-imagemin
5. Utilites
   - Del

install:
	npm install

start:
	npm run gulp-serve

compile:
	npm run gulp-pug
	npm run gulp-style
	npm run bundle

lint:
	npm run eslint js/*.js

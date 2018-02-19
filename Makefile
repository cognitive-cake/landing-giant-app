install:
	npm install

server:
	npm run serve

compile:
	npm run pug
	npm run style
	npm run js-bundle

lint:
	npm run eslint js/*.js

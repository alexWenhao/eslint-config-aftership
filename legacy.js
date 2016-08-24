'use strict';

const extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb/legacy',
		'eslint-config-aftership/rules/main'
	],
	rules: {
		/*++++++++++++++
		 + Strict Mode +
		 ++++++++++++++*/
		// http://eslint.org/docs/rules/strict
		strict: [2, 'global'],

		/*+++++++++++++++
		 + ECMAScript 6 +
		 +++++++++++++++*/
		// http://eslint.org/docs/rules/no-var
		'no-var': 0,
		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': [2, 'never']
	}
});

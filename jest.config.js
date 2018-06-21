module.exports = {
	setupFiles: ['./jest.setup.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
};

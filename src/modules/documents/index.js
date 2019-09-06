const { Router } = require('express');

const router = new Router();

// get all documents
router.get('/', () => {});

// get a document by id
router.get('/:id', () => {});

// save document, the route should be protected (check token)
router.post('/', () => {});

// delete document, the route should be protected (check token)
router.post('/', () => {});

module.exports = app => app.use('/documents', router);

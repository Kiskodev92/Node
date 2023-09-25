const {Router} = require("express");
const router = Router();
const bookCtrl = require("../controller/book.controller");

router.get('/', bookCtrl.getStart);
router.get('/libro', bookCtrl.getBook);
router.post('/libro', bookCtrl.postBook);
router.put('/libro', bookCtrl.putBook);
router.delete('/libro', bookCtrl.deleteBook);

module.exports = router;
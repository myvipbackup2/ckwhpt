/**
 * Created by 35031 on 2016/5/23.
 */
var express = require('express');
var router = express.Router();

var multiparty = require('connect-multiparty');


var multipartMiddleware = multiparty({uploadDir:'', keepExtensions:true});


var admin = require('../controllers/admin');


router.get('/', admin.login);
router.post('/getAdmin',admin.checkAdmin);      //这个是登录的接口？

router.get('/admin-404', admin.findNull);
router.get('/admin-form', admin.form);
router.get('/admin-gallery', admin.gallery);
router.get('/admin-help', admin.help);
router.get('/admin-index', admin.index);
router.get('/admin-log', admin.log);
router.get('/admin-table', admin.table);
router.get('/admin-article',admin.article);
router.get('/admin-comment',admin.comment);
router.get('/admin-user', admin.user);
router.post('/admin-form',multipartMiddleware, admin.saveArticle);
router.get('/select-img', admin.selectArticle);
router.post('/deleteActileImg',admin.deleteImg);
router.get('/getImageCount',admin.showImages);
router.get('/getAllimages',admin.pageImages);
router.post('/updateAdmins',admin.updateAdmin);
router.get('/select-message',admin.selectMessage);
router.get('/getMessageCount',admin.showMessage);
router.get('/getAllMessage',admin.pageMessage);
router.get('/select-comment',admin.selectComment);
router.get('/getCommentCount',admin.showComment);
router.get('/getAllComment',admin.pageComment);
router.get('/select-article',admin.selectArticle);
router.get('/getArticleCount',admin.showArticle);
router.get('/getAllArticle',admin.pageArticle);

//


module.exports = router;

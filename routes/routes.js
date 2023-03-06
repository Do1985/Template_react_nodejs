import express from "express";


import register from "../controllers/register.js";
import middleware from "../controllers/middleware.js";
import login from "../controllers/login.js" ;


import getUsersController from "../controllers/getUsersController.js";
import addUserController from "../controllers/addUserController.js";
import articleGetController from "../controllers/articleGetController.js";
import editArticleController from "../controllers/editArticleController.js";
import getArticleByIdController from "../controllers/getArticleByIdController.js";

import deleteUserByIdController from "../controllers/deleteUserByIdController.js";
import editUserByIdController from "../controllers/editUserByIdController.js";
import getUserByIdController from "../controllers/getUserByIdController.js";
import addCommentaryController from '../controllers/addCommentaryController.js';
import getProfilDataController from '../controllers/getProfilDataController.js';

import deleteArticle from "../controllers/deleteArticle.js";


import addArticleController from "../controllers/addArticleController.js";
import formuController from "../controllers/formuController.js";

// import uploadFile from "../controllers/uploadFile.js";
import stockUploadFile from "../controllers/stockUploadFile.js";
import middlewareUploadFile from "../controllers/middlewareUploadFile.js";
/*import caddieController from "../controllers/caddieController.js";*/

import addProductController from "../controllers/addProductController.js";
import deleteProduct from "../controllers/deleteProduct.js";
import editProduct from "../controllers/editProduct.js";
import getProductByIdController from "../controllers/getProductByIdController.js";
import getArticleDetailController from "../controllers/getArticleDetailController.js";
import getArticleDetailByIdController from "../controllers/getArticleDetailByIdController.js";
import allProductsController from "../controllers/allProductsController.js";
import checkToken from '../controllers/checkToken.js'


/*import middleWareUploadFile from '..controllers/middleWareUploadFile.js'
import testUpload from '../controllers/testUpload.js';*/



const router = express.Router();

router.post("/deleteArticle", deleteArticle)
router.post("/register", middleware, register);
router.post("/AddUser", addUserController);

router.get("/getUsers", getUsersController);
router.get("/getArticle", articleGetController);
router.post("/editArticle", editArticleController);

router.post("/getArticleByID", getArticleByIdController);

router.post("/deleteUserById", deleteUserByIdController);
router.post("/editUserById", editUserByIdController);
router.post("/getUserById", getUserByIdController);

router.post("/articleDetail", getArticleDetailController);
router.post("/addCommentary", addCommentaryController);
router.post("/getProfilData", getProfilDataController);

router.post("/login", middleware, login) ;
// router.post("/uploadFile", uploadFile);
router.post("/addProduct", middlewareUploadFile, addProductController);

router.get ("/AllProducts", allProductsController);
router.get ("/AllArticles", getArticleDetailController);




router.get ("/Article", getArticleDetailController,articleGetController);
router.post ("/Article", getArticleDetailByIdController);





router.post("/AddArticle", addArticleController);
router.post ("/formu", formuController);
router.post("/stockUploadFile", middlewareUploadFile, stockUploadFile);
/*router.get("/caddie", caddieController);*/
router.post("/deleteProduct", deleteProduct)
router.post("/editProduct", editProduct)
router.post("/getProductById", getProductByIdController)

router.get("/relogged", checkToken)
/*router.post("/middleWareUploadFile", middleWareUploadFile)
router.post("/testUpload", testUpload)*/



export default router;
const express=require('express')
const userController=require('../Controller/userController')
const packageController=require('../Controller/packageController')
const agencyController=require('../Controller/agencyController')
const jwtMiddleware=require('../Middleware/jwtMiddleware')
const bookingController=require('../Controller/bookingController')
const wishlistController=require('../Controller/wishlistController')
const router=new express.Router()
// user register
router.post('/user/sighnup',userController.userSighnup)
// user login
router.post('/user/login',userController.userLogin)
// package add
router.post('/package/add',packageController.Addpackage)
// get all packages
router.get('/packages/all',packageController.getAllpackages)
// getA project

router.get('/a/package/:_id',packageController.getApackage)

router.post('/agency/sighnup',agencyController.registeragency)

router.post('/agency/login',agencyController.agencyLogin)

router.post('/package/agency',packageController.getAgencyPackage)

router.get('/agency/all',agencyController.getAllAgencies)

router.post('/add/wishlist',jwtMiddleware,wishlistController.addtowishlist)

router.get('/get/wishlist',jwtMiddleware,wishlistController.getUserWishlist)

router.delete('/delete/wishlist/:id',jwtMiddleware,wishlistController.removeWishlist)

router.post('/book/package',jwtMiddleware,bookingController.BookaPackage)

router.get('/get/book/package',jwtMiddleware,bookingController.getbookedPackages)

router.post('/get/agency/book',bookingController.getAgencybookedPackage)

router.delete('/delete/package/:_id',packageController.deletePackage)

router.put('/edit/package',packageController.editPackage)

router.delete('/delete/booking/:_id',bookingController.deleteBooking)

module.exports=router

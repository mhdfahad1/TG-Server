const wishlists = require('../Models/wishlistSchema')

exports.addtowishlist = async (req, res) => {
    const { _id, packagename, description, image, foodimage, foodDescription, stayimage, stayDescription, activityimages, activityDescription, placename, price, custId } = req.body;
    const userId = req.payload
    // console.log(userId);
    try {
        const existingPackage = await wishlists.findOne({ _id })
        if (existingPackage) {
            res.status(406).json("Package already Added to your Wishlist ")
        } else {
            const wishPackage = new wishlists({
                _id, packagename, description, image, foodimage, foodDescription, stayimage, stayDescription, activityimages, activityDescription, placename, price, custId, userId
            })
            await wishPackage.save()
            res.status(200).json(wishPackage)
        }
    } catch (err) {
        res.status(401).json(`error transaction failed :${err}`)

    }
}

exports.getUserWishlist = async (req, res) => {
    const userId = req.payload
    try {
        const result = await wishlists.find({ userId })
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json(`error transaction failed :${err}`)
    }
}


exports.removeWishlist = async (req, res) => {
    const { id } = req.params;
    // console.log(id);

    try {
        const deletedWishlist = await wishlists.findByIdAndDelete({ _id: id });
        if (!deletedWishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json({ deletedWishlistId: deletedWishlist._id });
    } catch (err) {
        res.status(500).json({ error: `Error in transaction: ${err.message}` });
    }
};

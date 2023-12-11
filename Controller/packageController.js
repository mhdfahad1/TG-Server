const packages = require('../Models/PackageSchema');

exports.Addpackage = async (req, res) => {
    console.log('inside addproject');
    const { packagename, description, image, foodimage, foodDescription, stayimage, stayDescription, activityimages, activityDescription, placename, price, custId } = req.body;
    // console.log(packagename, description, image, foodimage,foodDescription, stayimage,stayDescription, activityimages,activityDescription, placename);
    // console.log('Request Body:', req.body);
    // console.log('Sending request...');
    // ... (other code)
    // console.log('Response:', res)
    try {
        // Code that might throw an error
        const newPackage = new packages({
            packagename,
            description,
            image,
            foodimage,
            foodDescription,
            stayimage,
            stayDescription,
            activityimages,
            activityDescription,
            placename,
            price,
            custId
        });

        await newPackage.save();
        res.status(200).json(newPackage);
    } catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }


};

exports.getAllpackages = async (req, res) => {
    try {
        const result = await packages.find()
        res.status(200).json(result)

    } catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.getApackage = async (req, res) => {
    const { _id } = req.params
    // console.log(_id);
    try {
        const result = await packages.findOne({ _id })
        res.status(200).json(result)

    } catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

exports.getAgencyPackage = async (req, res) => {
    const { custId } = req.body
    // console.log(custId);
    try {
        const result = await packages.find({ custId })
        res.status(200).json(result)

    } catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}
// delete package
exports.deletePackage = async (req, res) => {
    const { _id } = req.params
    try {
        const result = await packages.findByIdAndDelete({ _id })
        res.status(200).json(result)
    } catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}

// edit package
exports.editPackage = async (req, res) => {
    const {_id,packagename,description,image,foodimage,foodDescription,stayimage,stayDescription,activityimages,activityDescription,placename,price,custId}=req.body
    // console.log(_id);
    try {
        const result = await packages.updateOne({ _id },{packagename,description,image,foodimage,foodDescription,stayimage,stayDescription,stayimage,stayDescription,activityimages,activityDescription,placename,price,custId})
        res.status(200).json(result)
    } catch (err) {
        // Code to handle the error
        console.error('Error!! Transaction failed:', err);
        res.status(500).json({ error: `Internal Server Error: ${err.message}` });
    }
}


const router = require("express").Router();
const DetailsModel=require('../model/DetailsSchema')

router.post('/',async(req,res)=>{
    try{
       const details=await DetailsModel.create(req.body)
        res.json({data:details})
    }catch(err){
        res.json({err:err})
    }
})


router.get('/',async (req, res) => {
    try {
      var limit = 5;
      var page = 1;
      let sortvalue='updatedAt'
      if (req.query.page) {
        page = req.query.page;
      }
      if (req.query.sortvalue) {
        sortvalue = req.query.sortvalue;
      }
      var search = "";
      if (req.query.search) {
        search = req.query.search;
      }
      let detailsinfo = await DetailsModel.find({
        $or: [
          {
            username: { $regex: ".*" + search + ".*", $options: "i" },
          },
          {
            email: { $regex: ".*" + search + ".*", $options: "i" },
          }
        ],
      })
        .sort({ sortvalue: 1 })
        .limit(8)
        .skip((page - 1) * limit)
        .exec();

        res.json({data:detailsinfo})
    }catch(err){
res.json({err:err})
    }  
})

module.exports = router;

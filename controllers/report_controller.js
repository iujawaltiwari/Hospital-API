const Report = require('../models/report');

//generate report bases on status
//status: Postive Negative Quarantine Travelled
module.exports.status = async (req, res) =>{

  try{
    let report = await Report.find({status: req.params.status})
    .populate({
      path: 'patient',
      select: 'name city phone'
    })
    .populate({
      path: 'doctor',
      select: 'name _id'
    });

    //console.log(report);
    if(report && report.length !== 0){
      return res.status(200).json({
        message:`List of all the reports with ${req.params.status}`,
        reports: report,
      });
    }else{
      return res.status(422).json({
        message: `There are no such patients with ${req.params.status} status`
      })
    }

  }catch(err){
    console.log(err.message);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}
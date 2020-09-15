const shortid = require('shortid')
const Url = require('../model/url')
const dns = require('dns')
exports.urlShortenner = (req , res , next) => {
  const input_url = req.body.url;
  dns.lookup(input_url , (result => {
    if(!result){
      res.send({"error" : "invalid URL"})
    }else{
      const shortId = shortid.generate()
      const updatedArray = [shortId]
      console.log('shortId',updatedArray)
      const url = new Url({
        original_url : input_url,
        short_url : updatedArray
      })
      url.save().then(result => {
        console.log(result)
        res.send({
          original_url : result.original_url,
          short_url : result.short_url.length
        })
      })
    }
  }) )
}
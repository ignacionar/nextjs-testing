import nc from "next-connect";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something failed :(");
  }
}).get((req, res) => {
  res.status(200).json({products: ['p1', 'p2']});
}).post((reqe, res) => {
  res.json({messages: 'Post made'})
})

export default handler;
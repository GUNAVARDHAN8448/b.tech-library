const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dbURI = 'mongodb+srv://TechReads:techreads1230@cluster0.zfnlavi.mongodb.net/techreadsmern?retryWrites=true&w=majority'

const mongodbc= async  function main(){
  await mongoose.connect(dbURI,{ useNewUrlParser: true},async(err,result) => {
     if(err)console.log("---",err)
     else{
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("booksdata");
      fetched_data.find({}).toArray(async function(err,data){
        const BranchNames = await mongoose.connection.db.collection("branchnames");
        BranchNames.find({}).toArray(function(err,branchData){
          if(err)console.log(err);
          else{
            global.books_items = data;
            global.branch_names = branchData;
          }
        })
        // if(err)console.log(err);
        // else{
        //   global.books_items =data;
        // }
      })
     }
  });
}
module.exports = mongodbc;
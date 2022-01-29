/**
 * 仅适用于 lowdb 1.0.0 版本，后续 已改为 esmodule
 */
 const low = require('lowdb');
 const FileSync = require('lowdb/adapters/FileSync');
 
 const adapter = new FileSync('db.json');
 const db = low(adapter);

 const fs = require('fs');

 
 
function fn () : void {

    console.time('-----------fs read');
 
    const data = fs.readFileSync('./db.json');
    const s  = JSON.parse(data.toString());
    // const s1 = new Set(s.posts);

    console.log(typeof s, s.posts.length);

    console.timeEnd('-----------fs read');
    // console.log('--------');
    // console.log(data.toString());

   console.time('-----------read');
 
//    console.log(process.memoryUsage());
 
   const arr = db.get('posts').value();
   console.log(arr.length);
 
//    const set = new Set(db.get('posts').value());
 
   console.timeEnd('-----------read');
 
//    console.log(process.memoryUsage());
 
 
   
//    console.log(set.size);
 }
 
fn();

//  main();
 // Set some defaults (required if your JSON file is empty)
 // db.defaults({ posts: [], user: {}, count: 0, agent_prepay: [] })
 //   .write();
 
 // Add a post
 // db.get('posts')
 //   .push({ id: 1, title: 'lowdb is awesome'})
 //   .write();
 
 // Set a user using Lodash shorthand syntax
 // db.set('user.name', 'typicode')
 //   .write();
   
 // Increment count
 // db.update('count', n => n + 1)
 //   .write();
 
 
 // const p = db.get('posts')
 //   .find({ id: 1 })
 //   .value();
 
 // console.log(p);
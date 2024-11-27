 
 const Api = "https://jsonplaceholder.typicode.com/posts";

 const Lista = document.getElementById("lista");
 fetch(Api)
   .then(responde => responde.json()) 
   .then(posts => {
     
     posts.forEach(post => {
       const li = document.createElement("li"); 
       li.textContent = post.title; 
       Lista.appendChild(li); 
     });
   })
   
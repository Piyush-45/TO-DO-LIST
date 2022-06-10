let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")

// step 1 click button => submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
   
});

// step 2 form validation

let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "Nothing to post, Post cannot be blanked";
        console.log("faliure");

        
    }else{
        msg.innerHtml = ""
        console.log("success")
        acceptData();
       
    }
};
// step 3 Storing Data

let data = {}         //we can also store data in array but object is more useful when we are adding data of many types
let acceptData = ()=>{
    data["text"] = input.value
    console.log(data);
    createPost();
};

// step 4 upload on screen
let createPost = ()=>{
    posts.innerHTML +=
    `<div>
          <p>${ data.text}</p>
          <span class="options">
            <i  onClick ="editPost(this)" class="fas fa-edit"></i>
            <i onClick ="deletePost(this)" class="fas fa-trash-alt"></i>
          </span>
        </div`;
        
        // to make input area black after post
        input.value = "";
    
    

};

// step -4 (a) delete

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
};

let editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
     e.parentElement.parentElement.remove();
    
}
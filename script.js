var heading = document.getElementById('heading');
var description = document.getElementById('description');
var post_btn = document.getElementById('post-btn');
var multipost = document.getElementById('multipost');

var arr = [{ head : `It’s spring cleaning time for Blogger`,
desc : `To make room for some exciting updates coming soon to Blogger, we’re simplifying the platform to enhance the blogging experience for all of our users. Changes to existing features in Blogger *(rolling out over the next few months)*: - *Google+ Integrations:* Throughout the next few months, Blogger will transform Google+ widget integrations into HTML widgets to give you more flexibility in how you share and see your followers. - *OpenID:* Blogger previously allowed users to comment on blogs using an existing third party OpenID identity provider and has also acted as ..`,
},
{
    head : `A better Blogger experience on the web`,
    desc : `Since 1999, millions of people have expressed themselves on Blogger. From detailed posts about almost every apple variety you could ever imagine to a blog dedicated to the art of blogging itself, the ability to easily share, publish and express oneself on the web is at the core of Blogger’s mission. As the web constantly evolves, we want to ensure anyone using Blogger has an easy and intuitive experience publishing their content to the web. That’s why we’ve been slowly introducing an improved web experience for Blogger.`
},
{
    head : `An update on Google+ and Blogger`,
    desc : `Following the announcement of Google+ API deprecation scheduled for March 2019, a number of changes will be made to Blogger’s Google+ integration on 4 February 2019. *Google+ widgets:* Support for the “+1 Button”, “Google+ Followers” and “Google+ Badge” widgets in Layout will no longer be available. All instances of these widgets will be removed from all blogs. *+1 buttons:* The +1/G+ buttons and Google+ share links below blog posts and in the navigation bar will be removed. Please note that if you have a custom template that includes Google+ features, you may need to update.`,

}];
displayPost();
post_btn.addEventListener('click', addPost)

function addPost(){

    if(heading.value == "" || description.value == "")
    {
        alert("You can't have Null Post");
        console.log(heading.value,description.value);
    }
    else{
        let obj = { head : heading.value,
            desc : description.value,
        }
        arr.push(obj);
        console.log(arr);
        heading.value= "";
        description.value = "";
        displayPost();
    }
    
}

function displayPost(){
    multipost.innerHTML = "";
    document.getElementById('status').innerText = "Want to post something?";
    for(let i = arr.length-1; i >= 0 ; i--) 
    {
        let div = `<main id="main">
        <div id="post">
            <h3>Blogger Buzz</h3>
        </div>
        <div id="post-add">
            <h3 id="head">${arr[i].head}</h3>
            <p id="desc">${arr[i].desc}</p>
        </div>
        <button id="edit-btn" onclick="edit('${arr[i].head}');">Edit Post</button>
        <button id="delete-btn" onclick="Delete('${arr[i].head}');">Delete Post</button>
    </main>`
        multipost.innerHTML += div;
    }
}

function Delete(item) {
    let index;
    for (let i = 0 ; i< arr.length; i++) {
        if (arr[i].head == item){
            index = i;
        }
    }
    arr.splice(index, 1);
    displayPost();
}
function edit(item){
    let index;
    for (let i = 0 ; i< arr.length; i++) {
        if (arr[i].head == item){
            index = i;
        }
    }
    heading.value = arr[index].head;
    description.value = arr[index].desc;
    Delete(arr[index].head);
    document.getElementById('status').innerText = 'Edit';
    document.getElementById('canvas').scrollIntoView() ;
}
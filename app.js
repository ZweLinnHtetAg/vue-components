var createPost = {
    template: `
        <div>
            <input type="text" v-model="title" placeholder="Enter Title">  <br> <br>
            <input type="text" v-model="content" placeholder="Enter Content">  <br> <br>

            <button v-on:click="createPost" type="submit" > Add </button>
        </div>
                `,
    data () {

        return {
            title : "",
            content : ""
        }
    },
    methods : {
        createPost(){
            this.$emit('create-post',{
                title : this.title,
                content : this.content
            });
            this.title = "";
            this.content = ""
        }
    }
};

var post = {
    template : `
        <div> 
            <h1> {{title}}</h1>
            <p> {{content}} </p>
        </div>
    `,
   props : {
       title : {
           type : String,
       },
       content : String
   }
};


new Vue({
    el : "#app",
    data : {
       posts :[
           {title : "Title 1" , content : "Content 1"},
           {title : "Title 2" , content : "Content 2"},
           {title : "Title 3" , content : "Content 3"},
       ]
    },
    components : {
        'create-post' : createPost,
        'post' : post
    },
    methods : {
        insertData(post)
        {
            this.posts = [...this.posts,post]
        }
    }
});
/*
    Akintola tech Javascript Documentation
    Desc: Creating Objects in Javascript using a function template and constructors
    All right reserved Akintola Technologies Aug 2024
*/

"use strict"

function BlogPost (name, body, link) {
    // define properties using the this key word
    this.name = name;
    this.body = body;
    this.link = link;

    this.returnInfo = function() {
        return [this.name, this.body, this,link];
    }
};


let article = "Deepface is a lightweight faccial recognition frmaework ..";

// Create an instance of the object
let deepface = new BlogPost("Learning Deepface", article, "blogger.com");
// access methods
console.log(deepface.returnInfo()[0]);
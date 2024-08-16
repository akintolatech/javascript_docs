alert("Hello Javscript in the Browser");

/*

The following function scans a document for text nodes containing
a given string and returns true when it has found one:

*/

function talksAbout(node, string) {
    if (node.nodeType == Node.ELEMENT_NODE){
        for (let i = 0; i < node.childNodes.length; i++){
            if (talksAbout(node.childNodes[i], string)) {
                return true;
        }
    }
    return false;
    } else if (NamedNodeMap.nodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}

let _link = document.body.getElementsByTagName("p"[0])
console.log(_link);


// traditional
let object = document.getElementById("#object");
// mordern
// let object = document.querySelector("#object");
console.log(object);


// function to replace image
function replaceImg() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >- 0; i--) {
        let image = images[i]
        if (image.alt) {
            let text = document.createTextNode(image.getElementsByTagName.alt);
            image.parentNode.replaceChild(text, image);
        }

    }
}

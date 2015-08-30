function Content(text) {
    this.post = [];
}

Content.prototype.setPost = function (text) {
    post = this.post.push(text);
};
Content.prototype.deletePost = function () {
    if (post != []) {
        this.post.pop();
    }
};
Content.prototype.clearPost = function () {
    if (post != []) {
        this.post = [];
    }
}

module.exports = Content;

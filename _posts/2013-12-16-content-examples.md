---
layout: post
title: "Post Content Examples And Stuff"
date: December 16th, 2013
---

If you’re reading this and wondering what kind of post this is, it’s just a reference post for others forking this site and wondering what kind of post content is supported. There’s nothing too fancy, just enough implemented to cover my own needs. If you'd like it to function in some other way, you’re more than welcome, encouraged even, to edit your own fork. Here we have some common elements, all written as [Markdown](http://daringfireball.net/projects/markdown/) and styled for future posts. Let’s start with some lists, shall we? Let’s add some order to this post:

1. This is the initial list item.
2. Here’s a second item in the list.
3. Why not, a third item here.

With the ordered list covered, let’s try something a little more unruly.

- I hyphened these items.
- Just because I could.
- But a plus or asterisk would do too.

> “A smart man once said something that was worth quoting
> but unfortunately, the guy writing this isn’t quite that smart
> and couldn’t remember who it was or what they said.”

Let’s see how some code will look now when written using various options such as line numbers and different languages so we can make sure it covers our needs. I’m using redcarpet for this which now supports some nice features of GFM and Highlight.js for syntax highlighting. This means we can do `<a href="#">link</a>` and `body { background: blue; }` as well as fenced code blocks.

```
body {
    background: #0C3D68;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5;
}
```

Images are covered too. Small images should scale down whilst not going larger than their original resolutions and large images, those larger than our 1400px maximum wrapper width, will be scaled down to 100% wrapper width and will scale down with browser changes with auto height. Responsive all the things.

![Small Image Preview]({{site.url}}/postimg/small_sample.jpg)

![Large Image Preview]({{site.url}}/postimg/full_sample.jpg)
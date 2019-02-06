# CanWork Blog

A simple blog website built upon Gatsby.js

## Blog-Writing

To write a blog post :
1. Navigate to files -> src -> posts, and then click the '+' icon and choose 'Create new file.' 
2. Create a file with a .md extension, e.g. `blog-post-1.md`
3. You can now start writing your blog. note that you MUST add these block of text at the VERY TOP of your file before adding any text.
```
---
title: 'Your Blog Title'
date: '2019-02-01'
image: 'Image Url'
---
```
4. Write the blog as usual, follow [this](https://guides.github.com/features/mastering-markdown/) guide if you need to.
5. To upload an image, upload them to the hosting of your choice first, then add the image using the following syntax :
```![image name](image-url) ```
for example, ```![sent](https://i.imgur.com/rIru4Br.png)``` will look like :
![sent](https://i.imgur.com/rIru4Br.png)
6. Once you're done writing the blog, fill in the commit message and click the 'commit change' button.
7. Once commited, Gitlab's CI will do the rest for you.

### Image upload via gitlab

1. Navigate to files -> src -> posts, and then click the '+' icon and choose 'Upload new file.' 
2. Drag and drop / choose the image, enter your commit message and click 'upload file'
3. Right click on the image, then choose 'copy image location' and paste it into your blog using the syntax `![image-name](image-url)`

## Development

1. Download Gatsby CLI

Run `npm i gatsby-cli` in the terminal

2. Project setup 

Clone the repository and navigate to the project's folder, then run

`npm install`

Once everything is installed you can then run

`gatsby develop`

To run a local development server. You can then access it by opening `https://localhost:8000` in your browser.

3. Compiling production-ready files

Run `gatsby build`




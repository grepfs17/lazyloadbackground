# lazyloadbackground
Make lazy your images and backgrounds.

Simple script that loads your images and backgrounds only when they are visible to improve the speed of your site.

Examples:
- Background:
```html
<div class="bg-lazy" data-src="path_to_image"></div>
```

- Image:
```html
<img class="img-lazy"
     src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
     data-src="path_to_image">
```
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" .

We use that because src attribute can't be empty. This is the most little gif in base64.

* New
In order to detect elements in horitzontal scroll you will need to add the class "overflowxx" to the overflow:scroll div

```html
<div class="overflowxx">...</div>
```

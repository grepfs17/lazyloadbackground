# lazyloadbackground
Make lazy your images and backgrounds.
Simple script that loads your images and backgrounds only when they are visible to improve the speed of your site.

Examples:
- Background:
```
<div class="bg-lazy" data-src="path_to_image"></div>
```

- Images:
```
<img class="img-lazy"
			src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
			data-src="path_to_image">
```
src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" .
We use that because img tag needs to be completed with a src. This is the most little gif in base64.

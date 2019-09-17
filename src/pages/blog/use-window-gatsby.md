---
path: "/blog/use-window-with-gatsby"
title: "How to Use Document and Window with Gatsby"
date: 2019-08-08
quote: "Whenever you want to use the `window` or `document` variables in Gatsby, you have to check whether or not they exist."
thumbnail: '../../images/blog/use-window-gatsby.png'
---
In the last couple weeks, I started experimenting with Gatsby, an awesome static site generator to build websites with React. While I was very happy with the overall use of Gatsby, there was one thing that I found really annoying, namely the use of `document` and `window`.

Whenever you want to use the `window` or `document` variables in Gatsby, you have to check whether or not they exist. In case you forgot to do this, you won’t be able to build your website since these variables are not available within the build process. Whenever you want to use them, you have to include this pretty ugly check — every single time.

    if (typeof window !== ‘undefined’) {
    console.log(`Location: ${window.location.href}`);
    }

## Solution: use browser-monads
That’s why I started to dig in the internet for a solution and luckily found **[browser-monads](https://www.npmjs.com/package/browser-monads)** which provides an interface for the `document` and `window` variables. In case the variables don’t exist, they will be instances of `nothing`. Now your scripts can run outside the browser and the build process of Gatsby won’t crash.

## Bottom Line
So in case you hated these checks too, know that this small library can fix this problem. Note that the use of **[browser-monads](https://www.npmjs.com/package/browser-monads)** is not limited to Gatsby, but it was primarily created it for this purpose.


Thanks for reading and good luck with Gatsby!
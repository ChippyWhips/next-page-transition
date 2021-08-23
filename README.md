# Next.js page transition example

This example shows a way to gracefully transition between pages with Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`.

Using `next/link` will perform a client side transition between these 2 pages, however the page change will be as fast as Next is able to perform it. Most of the time, it's almost instant feeling. Though great performance, it can often feel quite jarring as an experience, so this experiment shows how to slow things down a little for a smoother experience, without losing any of the benefits of `next/link`.

By wrapping `next/link` inside of your own custom link component, you can prevent the client side navigation, perform your exit transition, then continue with the navigation.

This example uses `gsap` for transitions, but this is not a requirement, once the client side navigation is prevented, you're free to do whatever you like before continuing the navigation, the concept is the same.
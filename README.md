# Racing Ants for Stadium Goods

### `npm install`

Before you start gambling on some ants, be sure to install all of your dependencies.

### `npm start`

After your install, simply type 'npm start' to launch the app

## Recap

There wasn't much to decide as far as development tools so I'll just talk about my challenges. I satisfied all of the requirements but to be honest, it's with a bit of spaghetti code. I was finding it difficult to balance running odds one an individual ant and running them on all the ants. I really brute forced my way into getting the function of all odds running and I think I kind of dug myself a whole and ran into a time issue.

I know for a fact that I could refactor my current code to accomplish two major priorities:

1. Refactor for more reusable code. The code to handle an individual ant's odds could easily be trashed and probably with just a slight tweak and possiblying writing a custom hook or two, the code for generating all the odds could be used for an indivdual ant. Much of it is already being reused for both scenarios.
2. Secondly, my useEffect to handle the sorting after odds get updated is completely not optimized. I believe I'm doing a couple different sorts and loops. Also, something weird was happening that I couldn't figure out, which is why I am using a useEffect hook. I tried to do all the sorting functionality in a helper function that gets called after every time odds are generated but it was getting hung up. I think I know why and am pretty sure again a small tweak could manage it. Either way, the useEffect is getting reused by both odds generating so I'm not too concerned about that aspect.

# Gang Name Generator 

Make some cool gang names.

![The Esoteric Mongoose Lads](screenshot1.jpg)![The Fresno Scarcity Gang](screenshot2.jpg)

## Notes

The generator sources data from the lovely [corpora](https://github.com/dariusk/corpora/tree/master) and uses expert pluralization rules from [pluralize](https://github.com/blakeembrey/pluralize).

The text style is based on an example from [this pen](http://codepen.io/boldfacedesign/pen/EoGgD), which unfortunately only works in Chrome. Cross-browser support (for Firefox, at least) was inspired by the technique in [this pen](http://codepen.io/giana/pen/RPdLaQ?editors=0100).


## Installing

Corpora is referenced as a submodule in this repo. To pull down the correct version locally, clone this repo with

```
git clone --recursive https://github.com/lostfictions/gangnams
```

or, if you've already cloned the repo, initialize the submodules with

```
git submodule update --init --recursive
```

from the repo directory.

Then grab the dependencies with `npm install`.

## Building

Use `npm run build` to bundle everything up for use in a browser. By default the resulting `bundle.js` and `bundle.js.map` are output to the `dist/` folder.

If you've forked this repo and would like to deploy to your own Github Pages site, you can run `npm run deploy` to push everything in `dist/` to your `gh-pages` branch.

## Running

Just run `node index.js` to print a single run of the generator to the console.

# NameFake API client

![Codecov](https://img.shields.io/codecov/c/gh/WalkingPizza/namefake)
![NPM](https://img.shields.io/npm/l/namefake)
![npm](https://img.shields.io/npm/dw/namefake)

:star: If you like this project, star it!

Generate fake profiles using [NameFake](https://namefake.com/) APIs.

### Installation

Using yarn

`yarn add namefake`

Using NPM

`npm install --save namefake`

## Usage

CommonJS

```js
const Client = require("namefake");

const client = new Client("english-united-states", "male");

const profile = await client.generate();
```

ES6

```js
import Client from "namefake";

const client = new Client("english-united-states", "male");

const profile = await client.generate();
```

If any of the two parameters is missing upon initialization, it is defaulted to `random`.

## Supported Languages

- Random (`random`)
- Arabic, Jordan (`arabic-jordan`)
- Bulgarian, Bulgaria (`bulgarian-bulgaria`)
- Bengali, Bangladesh (`bengali-bangladesh`)
- Czech, Czech Republic (`czech-czech-republic`)
- Danish, Denmark (`danish-denmark`)
- German, Austria (`german-austria`)
- German, Germany (`german_germany`)
- Greek, Greece (`greek-greece`)
- English, Australia (`english-australia`)
- English, Canada (`english-canada`)
- English, United Kingdom (`english-united-kingdom`)
- English, New Zealand (`english-new-zealand`)
- English, Philippines (`english-philippines`)
- English, Uganda (`english-uganda`)
- English, United States (`english-united-states" selected="`)
- English, South Africa (`english-south-africa`)
- Spanish, Argentina (`spanish-argentina`)
- Spanish, Spain (`spanish-spain`)
- Spanish, Peru (`spanish-peru`)
- Spanish, Venezuela (`spanish-venezuela`)
- Persian, Iran (`persian_Iran`)
- Finnish, Finland (`finnish-finland`)
- French, Belgium (`french-belgium`)
- French, Canada (`french-canada`)
- French, France (`french-france`)
- Hungarian, Hungary (`hungarian-hungary`)
- Armenian, Armenia (`armenian-armenia`)
- Indonesian, Indonesia (`indonesian-indonesia`)
- Icelandic, Iceland (`icelandic-iceland`)
- Italian, Italy (`italian-italy`)
- Japanese, Japan (`japanese-japan`)
- Georgian, Georgia (`georgian-georgia`)
- Kazakh, Kazakhstan (`kazakh-kazakhstan`)
- Korean, South Korea (`korean-south-korea`)
- Latvian, Latvia (`latvian-latvia`)
- Montenegro, Montenegrin (`montenegro-montenegrin`)
- Nepali, Nepal (`nepali-nepal`)
- Dutch, Belgium (`dutch-belgium`)
- Dutch, Netherlands (`dutch-netherlands`)
- Norwegian, Norway (`norwegian-norway`)
- Polish, Poland (`polish-poland`)
- Portuguese, Brazil (`portuguese-brazil`)
- Portuguese, Portugal (`portuguese-portugal`)
- Romanian, Moldova (`romanian-moldova`)
- Romanian, Romania (`romanian-romania`)
- Russian, Russia (`russian-russia`)
- Slovak, Slovakia (`slovak-slovakia`)
- Slovenian, Slovenia (`slovenian-slovenia`)
- Serbian, Cyrillic, Serbia (`serbian-cyrillic-serbia`)
- Serbian, Latin, Serbia (`serbian-latin-serbia`)
- Serbian, Serbia (`serbian-serbia`)
- Swedish, Sweden (`swedish-sweden`)
- Turkish, Turkey (`turkish-turkey`)
- Ukrainian, Ukraine (`ukrainian-ukraine`)
- Vietnamese, Vietnam (`vietnamese-vietnam`)
- Chinese, China (`chinese-china`)
- Chinese, Taiwan (`chinese-taiwan`)

## Supported Genders

- Random (`random`)
- Male (`male`)
- Female (`female`)

## Credits

For more information on how NameFake works and what kind of data it returns, check the [NameFake APIs](https://en.namefake.com/api).
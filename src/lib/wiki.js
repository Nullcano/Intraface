export const wiki = {
  name: 'Wiki',
  slug: 'wiki',
  categories: [
    {
      name: 'Embedding',
      slug: 'embedding',
      items: [
        {
          name: 'area',
          desc: 'The area element defines sections in an image map. Image maps let you create clickable links within an image.',
          code: `<img src="../port.webp" width="640" usemap="#image-map">\n\n<map name="image-map">\n    <area target="" alt="Intraface.io" title="Intraface.io" href="/" coords="448,277,625,315" shape="rect">\n    <area target="" alt="Prefab Port" title="Prefab Port" href="/port" coords="22,151,219,227" shape="rect">\n</map>`
        }, {
          name: 'audio',
          desc: 'Allows to embed an audio clip into a web page.',
          code: `<audio src="https://htmlreference.io/assets/Hal.mp3" controls></audio>`
        }, {
          name: 'canvas',
          desc: 'Defines an element where you can draw graphics.',
          code: `<canvas>\n    Fallback text for non-supported browsers\n</canvas>`
        }, {
          name: 'embed',
          desc: 'Defines a container for external application.',
          code: `<embed src="https://www.youtube.com/embed/8dVQ0813KVM" width="640" height="320">`
        }, {
          name: 'iframe',
          desc: 'Defines a container for a nested browsing context: you can include a web page within another web page.',
          code: `<iframe src="https://theuselessweb.com" width="480" height="640">\n    Fallback text for non-supported browsers\n</iframe>`
        }, {
          name: 'img',
          desc: '',
          code: `<img src="https://picsum.photos/200/200" alt="Random image">`
        }, {
          name: 'map',
          desc: '',
          code: `<img src="https://htmlreference.io/images/world-continents.png" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">\n<map name="world-continents">\n    <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">\n    <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">\n    <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">\n    <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">\n    <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">\n    <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">\n</map>`
        }, {
          name: 'object',
          desc: '',
          code: ``
        }, {
          name: 'param',
          desc: '',
          code: ``
        }, {
          name: 'source',
          desc: '',
          code: ``
        }, {
          name: 'video',
          desc: 'Allows to embed an video clip into a page.',
          code: `<video src="http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" controls></video>`
        }
      ]
    }, {
      name: 'Forms',
      slug: 'forms',
      items: [
        {
          name: 'button',
          desc: 'Defines a clickable button.',
          code: `<button>\n    Submit form\n</button>`
        }, {
          name: 'datalist',
          desc: 'Defines a list of autocomplete options when using an <a href="/wiki/input">input</a> with list type.',
          code: `<label>South American countries</label>\n<input list="countries" placeholder="Type a country">\n\n<datalist id="countries">\n    <option value="Argentina">\n    <option value="Bolivia">\n    <option value="Brazil">\n    <option value="Chile">\n    <option value="Colombia">\n    <option value="Ecuador">\n    <option value="Guyana">\n    <option value="Paraguay">\n    <option value="Peru">\n    <option value="Suriname">\n    <option value="Uruguay">\n    <option value="Venezuela">\n</datalist>`
        }, {
          name: 'fieldset',
          desc: 'Defines a group of controls within a <a href="/wiki/form">form</a>.',
          code: `<form action="/reference/fieldset">\n    <fieldset>\n        <legend>Subscribe to nothing</legend>\n        <input type="email" name="email">\n        <button>Ok</button>\n    </fieldset>\n</form>`
        }, {
          name: 'form',
          desc: 'Defines an interactive form with controls.',
          code: `<form action="/reference/form">\n    <fieldset>\n        <legend>Employment</legend>\n        <label>\n            <input type="radio" name="title" value="unemployed">\n            Unemployed\n        </label>\n        <label>\n            <input type="radio" name="title" value="part-time">\n            Part-time\n        </label>\n        <label>\n            <input type="radio" name="title" value="full-time">\n            Full-time\n        </label>\n    </fieldset>\n    <fieldset>\n        <legend>Contact info</legend>\n        <fieldset>\n            <label>First name</label>\n            <input type="text" name="first_name">\n            <label>Last name</label>\n            <input type="text" name="last_name">\n        </fieldset>\n        <fieldset>\n            <label>Email</label>\n            <input type="email" name="email" required>\n            <label>Phone number</label>\n            <input type="tel" name="phone">\n        </fieldset>\n        <label>Country</label>\n        <select>\n            <option>China</option>\n            <option>India</option>\n            <option>United States</option>\n            <option>Indonesia</option>\n            <option>Brazil</option>\n        </select>\n    </fieldset>\n    <fieldset>\n        <label>Password</label>\n        <input type="password" name="password">\n        <label>\n            <input type="checkbox" value="terms">\n            I have read <a href="#">the documents</a>\n        </label>\n        <fieldset>\n            <button type="submit">Sign up</button>\n            <button type="reset">Reset form</button>\n        </fieldset>\n    </fieldset>\n</form>`
        }, {
          name: 'input',
          desc: 'Defines an interactive control within a <a href="/wiki/form">form</a>.',
          code: `<input type="text" placeholder="Type something..."><br>\n<input type="date" placeholder="Select Date"><br>\n<input type="time" placeholder="Select Time"><br>\n<input type="datetime-local" placeholder="Select Date and Time">`
        }, {
          name: 'label',
          desc: '',
          code: ``
        }, {
          name: 'legend',
          desc: 'Defines a caption for a parent\'s content.',
          code: `<fieldset>\n    <legend>Personal details</legend>\n    <input type="text" placeholder="Full name">\n</fieldset>`
        }, {
          name: 'meter',
          desc: 'Defines a horizontal meter.',
          code: `<meter min="0" low="16" value="71" high="92" max="100">Alex</meter>\n<meter min="0" low="16" value="16" high="92" max="100">Brandon</meter>\n<meter min="0" low="16" value="40" high="92" max="100">Charlotte</meter>\n<meter min="0" low="16" value="92" high="92" max="100">Sam</meter>`
        }, {
          name: 'optgroup',
          desc: '',
          code: ``
        }, {
          name: 'option',
          desc: '',
          code: ``
        }, {
          name: 'output',
          desc: '',
          code: ``
        }, {
          name: 'progress',
          desc: '',
          code: ``
        }, {
          name: 'select',
          desc: '',
          code: ``
        }, {
          name: 'textarea',
          desc: 'Defines a multi-line text control within a <a href="/wiki/form">form</a>.',
          code: `<textarea rows="3" placeholder="Type something...">`
        }
      ]
    }, {
      name: 'Grouping',
      slug: 'grouping',
      items: [
        {
          name: 'blockquote',
          desc: 'Defines a long quotation.',
          code: `<blockquote cite="https://en.wikiquote.org/wiki/Marie_Curie">\n    Be less curious about people and more curious about ideas.\n</blockquote>`
        }, {
          name: 'dd',
          desc: 'Defines an item in a definition list.',
          code: `<dl>\n    <dt>Web</dt>\n    <dd>The part of the Internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n</dl>`
        }, {
          name: 'div',
          desc: '',
          code: `<div>Hello world.</div>`
        }, {
          name: 'dl',
          desc: 'Defines a definition list.',
          code: `<dl>\n    <dt>Web</dt>\n    <dd>The part of the Internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n</dl>`
        }, {
          name: 'dt',
          desc: 'Defines a definition term.',
          code: `<dl>\n    <dt>Web</dt>\n    <dd>The part of the Internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n</dl>`
        }, {
          name: 'figcaption',
          desc: 'Defines the caption of a <a href="/wiki/figure">figure</a>.',
          code: `<figure>\n    <img src="https://picsum.photos/200/200" alt="Random image">\n    <figcaption>This is a random image from an API. Only you know what it is.</figcaption>\n</figure>`
        }, {
          name: 'figure',
          desc: 'Defines a single self-contained element, usually an <a href="/wiki/img">image</a>.',
          code: `<figure>\n    <img src="https://picsum.photos/200/200" alt="Random image">\n</figure>`
        }, {
          name: 'hr',
          desc: '',
          code: `<hr>`
        }, {
          name: 'li',
          desc: 'Defines a list item within an ordered list <ol> or unordered list <ul>.',
          code: `<ol>\n    <li>Step one</li>\n    <li>Step two</li>\n</ol>\n\n<br>\n\n<ul>\n    <li>Milk</li>\n    <li>Eggs</li>\n</ul>`
        }, {
          name: 'main',
          desc: 'Defines the main content of a web page. Can be displayed with a sidebar.',
          code: `<main>\n    <h1>My blog post</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n    <p>etc.</p>\n</main>\n<aside>\n    <h3>About the author</h3>\n    <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>\n</aside>`
        }, {
          name: 'ol',
          desc: 'Defines an ordered list.',
          code: `<ol>\n    <li>Step one</li>\n    <li>Step two</li>\n</ol>`
        }, {
          name: 'p',
          desc: '',
          code: `<p>Hello world.</p>`
        }, {
          name: 'pre',
          desc: '',
          code: `<pre>Hello world.</pre>`
        }, {
          name: 'ul',
          desc: 'Defines an unordered list.',
          code: `<ul>\n    <li>Milk</li>\n    <li>Eggs</li>\n</ul>`
        }
      ]
    }, {
      name: 'Interactive',
      slug: 'interactive',
      items: [
        {
          name: 'details',
          desc: 'Defines a toggable block of content with a <a href="/wiki/summary">summary</a> and additional details.',
          code: `<details>\n    <summary>Read more</summary>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n</details>`
        }, {
          name: 'dialog',
          desc: 'Defines a dialog box that can be opened and closed with JavaScript.',
          code: `<dialog open>\n    <p>This is the dialog</p>\n    <form method="dialog">\n        <button>OK</button>\n    </form>\n</dialog>`
        }, {
          name: 'summary',
          desc: 'Defines the summary of the <a href="/wiki/details">details</a> element.',
          code: `<details>\n    <summary>Read more</summary>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n</details>`
        }
      ]
    }, {
      name: 'Sections',
      slug: 'sections',
      items: [
        {
          name: 'address',
          desc: 'Defines a block for contact information.',
          code: `<address>\n    <dd>Wealthy Corp</dd>\n    <dd>Large City Street 42</dd>\n    <dd>Somewhere, Universe</dd>\n</address>`
        }, {
          name: 'article',
          desc: 'Defines a self-contained block of content that can exist in any context. It can have its own header, footer, sections... Useful for a list of blog posts.',
          code: `<article>\n    <header>\n        <h3>\n            <a href="/my-blog-post">My blog post</a>\n        </h3>\n    </header>\n    <section>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n    </section>\n    <footer>\n        <small>\n            Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a>\n        </small>\n    </footer>\n</article>`
        }, {
          name: 'aside',
          desc: 'Defines a block of content that is related to the main content. Displayed as a sidebar usually.',
          code: `<main>\n    <h1>My blog post</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n    <p>etc.</p>\n</main>\n<aside>\n    <h3>About the author</h3>\n    <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>\n</aside>`
        }, {
          name: 'body',
          desc: 'The container for a page\'s content. Must be a direct child of <html>, and must be an ancestor of all HTML elements (except where noted).',
          code: `<body>Hello world.</body>`
        }, {
          name: 'footer',
          desc: 'Defines the footer of a page or section.',
          code: `<footer>\n    Intraface - A free reference to all HTML5 elements and attributes\n</footer>`
        }, {
          name: 'h1',
          desc: 'Defines a section heading of level one: the highest level.',
          code: `<h1>Heading Level 1</h1>\n<p>This is a normal paragraph for scale.</p>`
        }, {
          name: 'h2',
          desc: 'Defines a section heading of level two.',
          code: `<h2>Heading Level 2</h2>\n<p>This is a normal paragraph for scale.</p>`
        }, {
          name: 'h3',
          desc: 'Defines a section heading of level three.',
          code: `<h3>Heading Level 3</h3>\n<p>This is a normal paragraph for scale.</p>`
        }, {
          name: 'h4',
          desc: 'Defines a section heading of level four.',
          code: `<h4>Heading Level 4</h4>\n<p>This is a normal paragraph for scale.</p>`
        }, {
          name: 'h5',
          desc: 'Defines a section heading of level five.',
          code: `<h5>Heading Level 5</h5>\n<p>This is a normal paragraph for scale.</p>`
        }, {
          name: 'h6',
          desc: 'Defines a section heading of level six: the lowest level.',
          code: `<h6>Heading Level 6</h6>\n<p>This is a normal paragraph for scale.</p>`
        }, {
          name: 'hgroup',
          desc: 'The hgroup element represents the heading block of a section, and usually groups consecutive headings (h1 to h6). ',
          code: `<hgroup>\n    <h1>Alien</h1>\n    <h2>In space, no one can hear you scream</h2>\n</hgroup>\n<p>The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.</p>`
        }, {
          name: 'header',
          desc: 'Defines the header of a page or section.',
          code: `<header>\n    <h1>Intraface</h1>\n    <nav>\n        <a>Home</a>\n        <a>About</a>\n        <a>Contact</a>\n    </nav>\n</header>`
        }, {
          name: 'nav',
          desc: 'Defines a section with navigation links.',
          code: `<nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n    <a href="/contact">Contact</a>\n</nav>`
        }, {
          name: 'section',
          desc: 'Defines a section within a page.',
          code: `<section>\n    <h2>Section title</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n</section>`
        },
      ]
    }, {
      name: 'Tabular Data',
      slug: 'tabular-data',
      items: [
        {
          name: 'caption',
          desc: '',
          code: ``
        }, {
          name: 'col',
          desc: '',
          code: ``
        }, {
          name: 'colgroup',
          desc: 'The colgroup element represents a group of one or more columns in a table.',
          code: `<table>\n    <colgroup span="1"></colgroup>\n    <colgroup>\n        <col>\n        <col span="1" style="background:orangered">\n    </colgroup>\n    <thead>\n        <tr>\n            <th>Destination</th>\n            <th>Departure</th>\n            <th>Delays</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Bergen</td>\n            <td>14:40</td>\n        <td>>3 minutes</td>\n        </tr>\n        <tr>\n            <td>Oslo</td>\n            <td>16:38</td>\n        <td>>6 minutes</td>\n        </tr>\n        <tr>\n            <td>Trondheim</td>\n            <td>18:14</td>\n            <td>-</td>\n        </tr>\n    </tbody>\n</table>`
        }, {
          name: 'table',
          desc: 'The table element represents a table. These allow authors to represent tabular data in a document.',
          code: `<table>\n    <tr>\n        <td>Bergen</td>\n        <td>14:40</td>\n    </tr>\n    <tr>\n        <td>Oslo</td>\n        <td>16:38</td>\n    </tr>\n    <tr>\n        <td>Trondheim</td>\n        <td>18:14</td>\n    </tr>\n</table>`
        }, {
          name: 'tbody',
          desc: 'The tbody element contains a block of rows (tr) representing the body section of a table.',
          code: `<table>\n    <tbody>\n        <tr>\n            <td>Bergen</td>\n            <td>14:40</td>\n        </tr>\n        <tr>\n            <td>Oslo</td>\n            <td>16:38</td>\n        </tr>\n        <tr>\n            <td>Trondheim</td>\n            <td>18:14</td>\n        </tr>\n    </tbody>\n</table>`
        }, {
          name: 'td',
          desc: '',
          code: ``
        }, {
          name: 'tfoot',
          desc: '',
          code: ``
        }, {
          name: 'th',
          desc: '',
          code: ``
        }, {
          name: 'thead',
          desc: 'The thead element contains a block of rows (tr) representing the header section of a table, where header cells (th) can usually be found.',
          code: `<table>\n    <thead>\n        <tr>\n            <th>Destination</th>\n            <th>Departure</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Bergen</td>\n            <td>14:40</td>\n        </tr>\n        <tr>\n            <td>Oslo</td>\n            <td>16:38</td>\n        </tr>\n        <tr>\n            <td>Trondheim</td>\n            <td>18:14</td>\n        </tr>\n    </tbody>\n</table>`
        }, {
          name: 'tr',
          desc: '',
          code: ``
        }
      ]
    }, {
      name: 'Text Content',
      slug: 'text-content',
      items: [
        {
          name: 'a',
          desc: 'Creates a link to a URL: a web page, a section within a page, an email address... Also called the anchor element, where the a comes from.',
          code: `<a href="https://intraface.io">Intraface</a>`
        }, {
          name: 'abbr',
          desc: 'Defines an abbreviation, and usually includes its full description.',
          code: `<abbr title="HyperText Markup Language">HTML</abbr>`
        }, {
          name: 'b',
          desc: 'Makes an element bold.',
          code: `Hello <b>World</b>`
        }, {
          name: 'bdi',
          desc: 'Allows to display part of a text in the opposite direction. Stands for bidirectional isolation.',
          code: `The word <bdi>مرحبا</bdi> means "Hello" in Arabic`
        }, {
          name: 'bdo',
          desc: 'Allows to override the direction of text.',
          code: `The word <bdo dir="rtl">Hello</bdo> is "Hello" spelled backwards.`
        }, {
          name: 'br',
          desc: 'Defines a line break within a text.',
          code: `Lorem ipsum dolor sit<br>amet, consectetur adipiscing elit. Donec viverra<br>nec<br>nulla vitae mollis.`
        }, {
          name: 'cite',
          desc: 'Defines the source of a creative work.',
          code: `If you want to learn HTML and CSS, go read <cite>MarkSheet.io</cite>!`
        }, {
          name: 'code',
          desc: 'Defines a snippet of code within a block of text.',
          code: `Type <code>npm install</code> in your terminal to install a project's dependencies.`
        }, {
          name: 'data',
          desc: 'Defines content linked to machine-readable output.',
          code: `<p>Computers</p>\n<ul>\n    <li>\n        <data value="499">Mini PC</data>\n    </li>\n    <li>\n        <data value="899">Small laptop</data>\n    </li>\n    <li>\n        <data value="1399">Large laptop</data>\n    </li>\n    <li>\n        <data value="2099">Desktop PC</data>\n    </li>\n</ul>`
        }, {
          name: 'dfn',
          desc: 'Defines where a term is defined within a web page.',
          code: `The <dfn>World Wide Web</dfn> is the part of the Internet that uses the HTTP protocol.`
        }, {
          name: 'em',
          desc: 'Defines emphasis on text. Is usually rendered as italic text.',
          code: `HTML should only be used to write <em>content</em>, and keep CSS for <em>styling</em> the web page.`
        }, {
          name: 'i',
          desc: 'Makes an element italic.',
          code: `Hello <i>World</i>`
        }, {
          name: 'kbd',
          desc: '',
          code: ``
        }, {
          name: 'mark',
          desc: 'Defines highlighted text.',
          code: `We use HTML5 to write <mark>content</mark> on the Web.`
        }, {
          name: 'q',
          desc: '',
          code: ``
        }, {
          name: 'rp',
          desc: '',
          code: ``
        }, {
          name: 'rt',
          desc: '',
          code: ``
        }, {
          name: 'ruby',
          desc: '',
          code: ``
        }, {
          name: 's',
          desc: '',
          code: ``
        }, {
          name: 'samp',
          desc: '',
          code: ``
        }, {
          name: 'small',
          desc: '',
          code: ``
        }, {
          name: 'span',
          desc: '',
          code: ``
        }, {
          name: 'strong',
          desc: 'Defines strong importance on text.',
          code: `HTML should only be used to write <strong>content</strong>, and keep CSS for <strong>styling</strong> the web page.`
        }, {
          name: 'sub',
          desc: 'Defines text that should be displayed lower.',
          code: `The formula of carbon dioxide is CO<sub>2</sub>.`
        }, {
          name: 'sup',
          desc: 'Defines text that should be displayed higher.',
          code: `The "power of two" is 2<sup>n</sup> where n is an integer.`
        }, {
          name: 'time',
          desc: 'Defines a time on a 24h clock.',
          code: `The game starts at <time datetime="2023-08-08T19:00">19:00</time>.`
        }, {
          name: 'u',
          desc: 'Makes an element\'s text underlined.',
          code: `Hello <u>World</u>`
        }, {
          name: 'var',
          desc: 'Defines a variable in a mathematical or programming expression.',
          code: `The value of <var>x</var> is 12.`
        }, 
      ]
    }, {
      name: 'Text Edits',
      slug: 'text-edits',
      items: [
        {
          name: 'del',
          desc: 'The del element represents content that has been removed from the document.',
          code: `<p>...The client can access a server thourgh SSH and FTP.</p>\n<del cite="#removed-content-45" datetime="2010-12-11 16:00:41">\n<p>For backward compatibility, you can also enable the telnet protocol.</p>\n</del>`
        }, {
          name: 'ins',
          desc: 'The ins element represents content that has been added to the document.',
          code: `<p>...The program supports the formats wav, mp3, and wma.</p>\n<ins cite="#update4" datetime="2014-04-01 02:15:11">\n<p>Note: from version 2 and forth, the ogg format is also suported.</p>\n</ins>`
        }, 
      ]
    }
  ]
}
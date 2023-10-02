export const data = [
  {
    section: 'Components',
    slug: 'components',
    categories: [
      {
        name: 'Layout',
        slug: 'layout',
        items: [
          {
            name: 'Aspect Ratio',
            slug: 'aspect-ratio',
            desc: 'Fixed and responsive resolutions for media and other elements.',
            variants: [
              {
                name: '1x1',
                desc: '',
                code: `<div class="ar ar-1x1 mw-10">\n    <img class="of-cov" src="https://random.imagecdn.app/100/200">\n</div>`
              }, {
                name: '4x3',
                desc: '',
                code: `<div class="ar ar-4x3 mw-11">\n    <img class="of-cov" src="https://random.imagecdn.app/200/200">\n</div>`
              }, {
                name: '16x9',
                desc: '',
                code: `<div class="ar ar-16x9 mw-12">\n    <img class="of-cov" src="https://random.imagecdn.app/300/200">\n</div>`
              }
            ]
          }, {
            name: 'Center',
            slug: 'center',
            desc: 'Centers child elements within itself.',
            variants: [
              {
                name: 'Centered text content',
                desc: '',
                code: `<div class="grid place-center h-4 bg-purple-1">The center of the universe</div>`
              }, {
                name: 'Centered icon',
                desc: 'Centering an icon',
                code: `<div class="grid place-center bg-red-1 h-3 w-3">\n    <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2V14H14V2ZM0 0V16H16V0H0Z" fill="white"/>\n        <path d="M4 4H12V12H4V4Z" fill="white"/>\n    </svg>\n</div>`
              }
            ]
          }, {
            name: 'Container',
            slug: 'container',
            desc: '',
            variants: [
              {
                name: 'Contained section',
                desc: 'Contain a section with a max width.',
                code: `<div class="bg-purple-1">\n    <!--Contained section-->\n    <div class="mw-12 mi-auto">\n        <p>There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production</p>\n    </div>\n</div>`
              }
            ]
          }, {
            name: 'Flex',
            slug: 'flex',
            desc: 'Flexboxes.',
            variants: [
              {
                name: 'Column',
                desc: 'Stack the children.',
                code: `<div class="flex flex-col gap-2">\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n</div>`
              }, {
                name: 'Row',
                desc: 'Row is the default flex direction but you may also use the class "flex-row" in some circumstances.',
                code: `<div class="flex gap-2 mw-8">\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n</div>`
              }, {
                name: 'Wrap',
                desc: 'Starts a new row when the children overflows the flexbox width.',
                code: `<div class="flex flex-wrap gap-2 mw-8">\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n    <div class="h-2 w-2 bg-red-1"></div>\n</div>`
              }
            ]
          }, {
            name: 'Grid',
            slug: 'grid',
            desc: 'Create various grid layouts with ease.',
            variants: [
              {
                name: '1 column',
                desc: '',
                code: `<div class="grid col-1">\n    <div class="bg-red-1">Item 1</div>\n    <div class="bg-purple-1">Item 2</div>\n    <div class="bg-red-1">Item 3</div>\n    <div class="bg-purple-1">Item 4</div>\n    <div class="bg-red-1">Item 5</div>\n    <div class="bg-purple-1">Item 6</div>\n</div>`
              }, {
                name: '2 columns',
                desc: '',
                code: `<div class="grid col-2">\n    <div class="bg-red-1">Item 1</div>\n    <div class="bg-purple-1">Item 2</div>\n    <div class="bg-red-1">Item 3</div>\n    <div class="bg-purple-1">Item 4</div>\n    <div class="bg-red-1">Item 5</div>\n    <div class="bg-purple-1">Item 6</div>\n</div>`
              }, {
                name: '3 columns',
                desc: '',
                code: `<div class="grid col-3">\n    <div class="bg-red-1">Item 1</div>\n    <div class="bg-purple-1">Item 2</div>\n    <div class="bg-red-1">Item 3</div>\n    <div class="bg-purple-1">Item 4</div>\n    <div class="bg-red-1">Item 5</div>\n    <div class="bg-purple-1">Item 6</div>\n</div>`
              }, {
                name: '4 columns',
                desc: '',
                code: `<div class="grid col-4">\n    <div class="bg-red-1">Item 1</div>\n    <div class="bg-purple-1">Item 2</div>\n    <div class="bg-red-1">Item 3</div>\n    <div class="bg-purple-1">Item 4</div>\n    <div class="bg-red-1">Item 5</div>\n    <div class="bg-purple-1">Item 6</div>\n</div>`
              }, {
                name: '5 columns',
                desc: '',
                code: `<div class="grid col-5">\n    <div class="bg-red-1">Item 1</div>\n    <div class="bg-purple-1">Item 2</div>\n    <div class="bg-red-1">Item 3</div>\n    <div class="bg-purple-1">Item 4</div>\n    <div class="bg-red-1">Item 5</div>\n    <div class="bg-purple-1">Item 6</div>\n</div>`
              }, {
                name: '6 columns',
                desc: '',
                code: `<div class="grid col-6">\n    <div class="bg-red-1">Item 1</div>\n    <div class="bg-purple-1">Item 2</div>\n    <div class="bg-red-1">Item 3</div>\n    <div class="bg-purple-1">Item 4</div>\n    <div class="bg-red-1">Item 5</div>\n    <div class="bg-purple-1">Item 6</div>\n</div>`
              }, {
                name: 'Auto - fill',
                desc: 'First child will take up its own width and give the rest of the width to last child.',
                code: `<div class="grid auto-fill">\n    <div class="w-10 bg-red-1">Item 1</div>\n    <div class="bg-purple-1">Item 2</div>\n</div>`
              }, {
                name: 'Fill - auto',
                desc: 'Last child will take up its own width and give the rest of the width to first child.',
                code: `<div class="grid fill-auto">\n    <div class="bg-red-1">Item 1</div>\n    <div class="w-10 bg-purple-1">Item 2</div>\n</div>`
              }
            ]
          },
        ]
      }, {
        name: 'Forms',
        slug: 'forms',
        items: [
          {
            name: 'Button',
            slug: 'button',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Checkbox',
            desc: 'Checkbox',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Data Display',
        slug: 'data-display',
        items: [
          {
            name: 'Badge',
            slug: 'badge',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Card',
            slug: 'card',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Feedback',
        slug: 'feedback',
        items: [
          {
            name: 'Alert',
            slug: 'alert',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Progress',
            slug: 'progress',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Typography',
        slug: 'typography',
        items: [
          {
            name: 'Text',
            slug: 'text',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Heading',
            slug: 'heading',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Overlay',
        slug: 'overlay',
        items: [
          {
            name: 'Alert Dialog',
            slug: 'alert-dialog',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Drawer',
            slug: 'drawer',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Disclosure',
        slug: 'disclosure',
        items: [
          {
            name: 'Accordion',
            slug: 'accordion',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Tabs',
            slug: 'tabs',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]    
      }, {
        name: 'Navigation',
        slug: 'navigation',
        items: [
          {
            name: 'Breadcrumb',
            slug: 'breadcrumb',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Link',
            slug: 'link',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Media',
        slug: 'media',
        items: [
          {
            name: 'Avatar',
            slug: 'avatar',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Icon',
            slug: 'icon',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]    
      }, {
        name: 'Other',
        slug: 'other',
        items: [
          {
            name: 'Animation',
            slug: 'animation',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Transition',
            slug: 'transition',
            desc: 'Lul',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }
        ]    
      }
    ],
  }, {
    section: 'Library',
    slug: 'library',
    categories: [
      {
        name: 'Animation',
        slug: 'animation',
        items: [
          {
            name: 'Opacity',
            slug: 'opacity',
            desc: 'Opacity animations.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Scale',
            slug: 'scale',
            desc: 'Scale animations.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Translate',
            slug: 'translate',
            desc: 'Translate animations.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }
        ]
      }, {
        name: 'Background',
        slug: 'background',
        items: [
          {
            name: 'Attachment',
            slug: 'border',
            desc: 'Borders.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Color',
            slug: 'height',
            desc: 'Heights.',
            variants: [
              {
                name: 'h-0',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Position',
            slug: 'line-height',
            desc: 'Line heights.',
            variants: [
              {
                name: 'lh-0',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Repeat',
            slug: 'margin',
            desc: 'Margins.',
            variants: [
              {
                name: 'm-0',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Size',
            slug: 'padding',
            desc: 'Paddings.',
            variants: [
              {
                name: 'p-0',
                desc: '',
                code: ``
              },
            ]
          }
        ]
      }, {
        name: 'Box Model',
        slug: 'box-model',
        items: [
          {
            name: 'Border',
            slug: 'border',
            desc: 'Borders.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Height',
            slug: 'height',
            desc: 'Heights.',
            variants: [
              {
                name: 'h-0',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Line Height',
            slug: 'line-height',
            desc: 'Line heights.',
            variants: [
              {
                name: 'lh-0',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Margin',
            slug: 'margin',
            desc: 'Margins.',
            variants: [
              {
                name: 'm-0',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Padding',
            slug: 'padding',
            desc: 'Paddings.',
            variants: [
              {
                name: 'p-0',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Width',
            slug: 'width',
            desc: 'Widths.',
            variants: [
              {
                name: 'w-0',
                desc: '',
                code: ``
              },
            ]
          },
        ]
      }, {
        name: 'Layout',
        slug: 'layout',
        items: [
          {
            name: 'Flexbox',
            slug: 'flexbox',
            desc: 'Flexbox utilities.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Grid',
            slug: 'grid',
            desc: 'Grid utilities.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }
        ]
      }, {
        name: 'Position',
        slug: 'position',
        items: [
          {
            name: 'Absolute',
            slug: 'absolute',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Bottom',
            slug: 'bottom',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Fixed',
            slug: 'fixed',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Left',
            slug: 'left',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Relative',
            slug: 'relative',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Right',
            slug: 'right',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Sticky',
            slug: 'sticky',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Top',
            slug: 'top',
            desc: '',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Transition',
        slug: 'transition',
        items: [
          {
            name: 'All Linear',
            slug: 'all-linear',
            desc: 'Linear transition for all properties.',
            variants: [
              {
                name: '0.25 Seconds',
                desc: '',
                code: ``
              }
            ]
          }
        ]
      }, {
        name: 'Typography',
        slug: 'typography',
        items: [
          {
            name: 'Color',
            slug: 'color',
            desc: 'Text colors.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Font Family',
            slug: 'font-family',
            desc: 'Font families.',
            variants: [
              {
                name: 'Border Width',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Font Size',
            slug: 'font-size',
            desc: 'Font sizes.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Font Style',
            slug: 'font-style',
            desc: 'Font styles.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Font Weight',
            slug: 'font-weight',
            desc: 'Font weights.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Letter Spacing',
            slug: 'letter-spacing',
            desc: 'Letter spacings.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Text Align',
            slug: 'text-align',
            desc: 'Text aligning.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Text Decoration',
            slug: 'text-decoration',
            desc: 'Text decorations.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Text Shadow',
            slug: 'text-shadow',
            desc: 'Text shadows.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Text Transform',
            slug: 'text-transform',
            desc: 'Text transforms.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'White Space',
            slug: 'white-space',
            desc: 'Modify white space.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }, {
            name: 'Word Break',
            slug: 'word-break',
            desc: 'Word breaks.',
            variants: [
              {
                name: 'Absolute',
                desc: '',
                code: ``
              },
            ]
          }
        ]
      }
    ]
  }, {
    section: 'Reference',
    slug: 'reference',
    categories: [
      {
        name: 'Text Content',
        slug: 'text-content',
        items: [
          {
            name: 'a',
            desc: 'Creates a link to a URL: a web page, a section within a page, an email address... Also called the anchor element, where the a comes from.',
            code: `<a href="https://htmlreference.io">HTML Reference</a>`
          }, {
            name: 'abbr',
            desc: 'Defines an abbreviation, and usually includes its full description.',
            code: `<abbr title="HyperText Markup Language">HTML</abbr>`
          }, {
            name: 'address',
            desc: 'Defines a block for contact information.',
            code: `<address>\n    <dd>Wealthy Corp</dd>\n    <dd>Large City Street 42</dd>\n    <dd>Somewhere, Universe</dd>\n</address>`
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
            name: 'blockquote',
            desc: 'Defines a long quotation.',
            code: `<blockquote cite="https://en.wikiquote.org/wiki/Marie_Curie">\n    Be less curious about people and more curious about ideas.\n</blockquote>`
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
            name: 'del',
            desc: 'Defines text that has been deleted.',
            code: `To write abbreviations, use the <del cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym">acronym</del> <ins>abbr</ins> HTML element.`
          }, {
            name: 'details',
            desc: 'Defines a toggable block of content with a summary and additional details.',
            code: `<details>\n    <summary>Read more</summary>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n</details>`
          }, {
            name: 'dfn',
            desc: 'Defines where a term is defined within a web page.',
            code: `The <dfn>World Wide Web</dfn> is the part of the Internet that uses the HTTP protocol.`
          }, {
            name: 'dialog',
            desc: 'Defines a dialog box that can be opened and closed with JavaScript.',
            code: `<dialog open>\n    <p>This is the dialog</p>\n    <form method="dialog">\n        <button>OK</button>\n    </form>\n</dialog>`
          }, {
            name: 'em',
            desc: 'Defines emphasis on text. Is usually rendered as italic text.',
            code: `HTML should only be used to write <em>content</em>, and keep CSS for <em>styling</em> the web page.`
          }, {
            name: 'figcaption',
            desc: 'Defines the caption of a <figure>.',
            code: `<figure>\n    <img src="https://random.imagecdn.app/200/200" alt="Random image">\n    <figcaption>This is a random image from an API. Only you know what it is.</figcaption>\n</figure>`
          }, {
            name: 'h1',
            desc: 'Defines a section heading of level one: the highest level.',
            code: `<h1>My blog post</h1>`
          }, {
            name: 'h2',
            desc: 'Defines a section heading of level two.',
            code: `<h1>My blog post</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h2>Introduction</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>`
          }, {
            name: 'h3',
            desc: 'Defines a section heading of level three.',
            code: `<h1>My blog post</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h2>Introduction</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h3>Example</h3>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>`
          }, {
            name: 'h4',
            desc: 'Defines a section heading of level four.',
            code: `<h1>My blog post</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h2>Introduction</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h3>Example</h3>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h4>Why</h4>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>`
          }, {
            name: 'h5',
            desc: 'Defines a section heading of level five.',
            code: `<h1>My blog post</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h2>Introduction</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h3>Example</h3>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h4>Why</h4>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h5>Reason</h5>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>`
          }, {
            name: 'h6',
            desc: 'Defines a section heading of level six: the lowest level.',
            code: `<h1>My blog post</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h2>Introduction</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h3>Example</h3>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h4>Why</h4>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h5>Reason</h5>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n<h6>Focus</h6>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>`
          }, {
            name: 'i',
            desc: 'Makes an element italic.',
            code: `Hello <i>World</i>`
          }
        ]
      }, {
        name: 'Lists',
        slug: 'lists',
        items: [
          {
            name: 'datalist',
            desc: 'Defines a list of autocomplete options when using a text <input>.',
            code: `<label>South American countries</label>\n<input list="countries" placeholder="Type a country">\n\n<datalist id="countries">\n    <option value="Argentina">\n    <option value="Bolivia">\n    <option value="Brazil">\n    <option value="Chile">\n    <option value="Colombia">\n    <option value="Ecuador">\n    <option value="Guyana">\n    <option value="Paraguay">\n    <option value="Peru">\n    <option value="Suriname">\n    <option value="Uruguay">\n    <option value="Venezuela">\n</datalist>`
          }, {
            name: 'dd',
            desc: '',
            code: ``
          }, {
            name: 'dl',
            desc: '',
            code: ``
          }, {
            name: 'dt',
            desc: '',
            code: ``
          }, {
            name: 'li',
            desc: '',
            code: ``
          }, {
            name: 'ol',
            desc: '',
            code: ``
          }, {
            name: 'ul',
            desc: '',
            code: ``
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
            name: 'fieldset',
            desc: 'Defines a group of controls within a form.',
            code: `<form action="/subscribe" method="post">\n    <fieldset>\n    <legend>Subscribe to the Newsletter</legend>\n    <input type="email" name="email">\n    <button>Ok</button>\n    </fieldset>\n</form>`
          }, {
            name: 'form',
            desc: 'Defines an interactive form with controls.',
            code: `<form action="/signup" method="post"></form>`
          }, {
            name: 'input',
            desc: 'Defines an interactive control within a web form.',
            code: `<input type="text" />`
          }, {
            name: 'legend',
            desc: 'Defines a caption for a parent\'s content.',
            code: `<legend></legend>`
          }, {
            name: 'textarea',
            desc: 'Defines a multi-line text control within a web form.',
            code: `<textarea rows="3" placeholder="Type something...">`
          }
        ]
      }, {
        name: 'Media and Embed',
        slug: 'media-embed',
        items: [
          {
            name: 'area',
            desc: '',
            code: ``
          }, {
            name: 'audio',
            desc: '',
            code: ``
          }, {
            name: 'canvas',
            desc: '',
            code: ``
          }, {
            name: 'embed',
            desc: '',
            code: ``
          }, {
            name: 'figure',
            desc: '',
            code: ``
          }, {
            name: 'iframe',
            desc: '',
            code: ``
          }, {
            name: 'img',
            desc: '',
            code: ``
          }, {
            name: 'map',
            desc: '',
            code: ``
          }, {
            name: 'iframe',
            desc: '',
            code: ``
          }
        ]
      }, {
        name: 'Semantic',
        slug: 'semantic',
        items: [
          {
            name: 'article',
            desc: '',
            code: ``
          }, {
            name: 'aside',
            desc: '',
            code: ``
          }, {
            name: 'body',
            desc: '',
            code: ``
          }, {
            name: 'br',
            desc: '',
            code: ``
          }, {
            name: 'footer',
            desc: '',
            code: ``
          }, {
            name: 'header',
            desc: '',
            code: ``
          }, {
            name: 'main',
            desc: '',
            code: ``
          }, {
            name: 'mark',
            desc: '',
            code: ``
          }, {
            name: 'nav',
            desc: '',
            code: ``
          }, {
            name: 'section',
            desc: '',
            code: ``
          }, {
            name: 'time',
            desc: '',
            code: ``
          }
        ]
      }, {
        name: 'Tables',
        slug: 'tables',
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
            desc: '',
            code: ``
          }, {
            name: 'table',
            desc: '',
            code: ``
          }, {
            name: 'tbody',
            desc: '',
            code: ``
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
            desc: '',
            code: ``
          }, {
            name: 'tr',
            desc: '',
            code: ``
          }
        ]
      }
    ]
  }
]
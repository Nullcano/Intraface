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
            desc: 'Containers are used to constrain a content\'s width, while keeping it fluid. Usually achieved by setting a max width (mw-[size]) and the inline margin to auto (mi-auto).',
            variants: [
              {
                name: 'Contain Page',
                desc: 'Contain a section with a max width.',
                code: `<div>\n    <div class="mw-14 mi-auto p-4 bg-black-1">\n        <h1>Welcome to this contained page.</h1>\n    </div>\n</div>`
              }, {
                name: 'Contain Elements',
                desc: 'Contain a section with a max width.',
                code: `<div class="p-4 bg-black-1">\n    <div class="mw-13 mi-auto">\n        <img class="w-fill" src="https://random.imagecdn.app/300/200">\n    </div>\n    <div class="mw-12 mi-auto">\n        <p>There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production.</p>\n    </div>\n</div>`
              }, 
            ],
            refLibrary: [ { name: 'Width', slug: 'width' }, { name: 'Margin', slug: 'margin' }, { name: 'Padding', slug: 'padding' }, { name: 'Background', slug: 'background' } ],
            refReference: [ { name: 'h1', slug: 'h1' }, { name: 'img', slug: 'img' }, { name: 'p', slug: 'p' } ],
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
            desc: '',
            variants: [
              {
                name: '',
                desc: '',
                code: ``
              }
            ]
          }, {
            name: 'Checkbox',
            slug: 'checkbox',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            desc: '',
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
            name: 'Iterations',
            slug: 'iterations',
            desc: 'Animation iterations.',
            variants: [
              {
                name: 'forwards',
                desc: '',
                code: `<div class="fade-in forwards w-5 h-5 bg-white-1"></div>`
              }, {
                name: 'infinite',
                desc: '',
                code: `<div class="fade-in infinite w-5 h-5 bg-white-1"></div>`
              },
            ]
          }, {
            name: 'Opacity',
            slug: 'opacity',
            desc: 'Opacity animations.',
            variants: [
              {
                name: 'fade-in',
                desc: '',
                code: `<div class="fade-in infinite w-5 h-5 bg-white-1"></div>`
              }, {
                name: 'fade-out',
                desc: '',
                code: `<div class="fade-out infinite w-5 h-5 bg-white-1"></div>`
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
        name: 'Lists',
        slug: 'lists',
        items: [
          {
            name: 'datalist',
            desc: 'Defines a list of autocomplete options when using a text <input>.',
            code: `<label>South American countries</label>\n<input list="countries" placeholder="Type a country">\n\n<datalist id="countries">\n    <option value="Argentina">\n    <option value="Bolivia">\n    <option value="Brazil">\n    <option value="Chile">\n    <option value="Colombia">\n    <option value="Ecuador">\n    <option value="Guyana">\n    <option value="Paraguay">\n    <option value="Peru">\n    <option value="Suriname">\n    <option value="Uruguay">\n    <option value="Venezuela">\n</datalist>`
          }, {
            name: 'dd',
            desc: 'Defines an item in a definition list.',
            code: `<dl>\n    <dt>Web</dt>\n    <dd>The part of the Internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n</dl>`
          }, {
            name: 'dl',
            desc: 'Defines a definition list.',
            code: `<dl>\n    <dt>Web</dt>\n    <dd>The part of the Internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n</dl>`
          }, {
            name: 'dt',
            desc: 'Defines a definition term.',
            code: `<dl>\n    <dt>Web</dt>\n    <dd>The part of the Internet that contains websites and web pages</dd>\n    <dt>HTML</dt>\n    <dd>A markup language for creating web pages</dd>\n    <dt>CSS</dt>\n    <dd>A technology to make HTML look better</dd>\n</dl>`
          }, {
            name: 'li',
            desc: 'Defines a list item within an ordered list <ol> or unordered list <ul>.',
            code: `<ol>\n    <li>Step one</li>\n    <li>Step two</li>\n</ol>\n\n<br>\n\n<ul>\n    <li>Milk</li>\n    <li>Eggs</li>\n</ul>`
          }, {
            name: 'ol',
            desc: 'Defines an ordered list.',
            code: `<ol>\n    <li>Step one</li>\n    <li>Step two</li>\n</ol>`
          }, {
            name: 'ul',
            desc: 'Defines an unordered list.',
            code: `<ul>\n    <li>Milk</li>\n    <li>Eggs</li>\n</ul>`
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
            code: `<form action="/reference/fieldset">\n    <fieldset>\n        <legend>Subscribe to nothing</legend>\n        <input type="email" name="email">\n        <button>Ok</button>\n    </fieldset>\n</form>`
          }, {
            name: 'form',
            desc: 'Defines an interactive form with controls.',
            code: `<form action="/reference/form">\n    <fieldset>\n        <legend>Employment</legend>\n        <label>\n            <input type="radio" name="title" value="unemployed">\n            Unemployed\n        </label>\n        <label>\n            <input type="radio" name="title" value="part-time">\n            Part-time\n        </label>\n        <label>\n            <input type="radio" name="title" value="full-time">\n            Full-time\n        </label>\n    </fieldset>\n    <fieldset>\n        <legend>Contact info</legend>\n        <fieldset>\n            <label>First name</label>\n            <input type="text" name="first_name">\n            <label>Last name</label>\n            <input type="text" name="last_name">\n        </fieldset>\n        <fieldset>\n            <label>Email</label>\n            <input type="email" name="email" required>\n            <label>Phone number</label>\n            <input type="tel" name="phone">\n        </fieldset>\n        <label>Country</label>\n        <select>\n            <option>China</option>\n            <option>India</option>\n            <option>United States</option>\n            <option>Indonesia</option>\n            <option>Brazil</option>\n        </select>\n    </fieldset>\n    <fieldset>\n        <label>Password</label>\n        <input type="password" name="password">\n        <label>\n            <input type="checkbox" value="terms">\n            I have read <a href="#">the documents</a>\n        </label>\n        <fieldset>\n            <button type="submit">Sign up</button>\n            <button type="reset">Reset form</button>\n        </fieldset>\n    </fieldset>\n</form>`
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
        name: 'Embedding',
        slug: 'embedding',
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
          }, {
            name: 'video',
            desc: 'Allows to embed an video clip into a web page.',
            code: `<video src="https://htmlreference.io/assets/HTML%205%20Video.mp4" controls></video>`
          }
        ]
      }, {
        name: 'Sections',
        slug: 'sections',
        items: [
          {
            name: 'article',
            desc: 'Defines a self-contained block of content that can exist in any context. It can have its own header, footer, sections... Useful for a list of blog posts.',
            code: `<article>\n    <header>\n        <h3>\n            <a href="/my-blog-post">My blog post</a>\n        </h3>\n    </header>\n    <section>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n    </section>\n    <footer>\n        <small>\n            Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a>\n        </small>\n    </footer>\n</article>`
          }, {
            name: 'aside',
            desc: 'Defines a block of content that is related to the main content. Displayed as a sidebar usually.',
            code: `<main>\n    <h1>My blog post</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n    <p>etc.</p>\n</main>\n<aside>\n    <h3>About the author</h3>\n    <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>\n</aside>`
          }, {
            name: 'body',
            desc: 'The container for a web page\'s content. Must be a direct child of <html>, and must be an ancestor of all HTML elements (except where noted). The body element can not currently be previewed as you can not have a body inside a body. Intraface may embed the body preview from a demo app as a workaround later.',
            code: ``
          }, {
            name: 'br',
            desc: 'Defines a line break within a text.',
            code: `Lorem ipsum dolor sit<br>amet, consectetur adipiscing elit. Donec viverra<br>nec<br>nulla vitae mollis.`
          }, {
            name: 'footer',
            desc: 'Defines the footer of a web page or section.',
            code: `<footer>\n    Intraface - A free reference to all HTML5 elements and attributes\n</footer>`
          }, {
            name: 'header',
            desc: 'Defines the header of a web page or section.',
            code: `<header>\n    <h1>Intraface</h1>\n    <nav>\n        <a>Home</a>\n        <a>About</a>\n        <a>Contact</a>\n    </nav>\n</header>`
          }, {
            name: 'main',
            desc: 'Defines the main content of a web page. Can be displayed with a sidebar.',
            code: `<main>\n    <h1>My blog post</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n    <p>etc.</p>\n</main>\n<aside>\n    <h3>About the author</h3>\n    <p>Frontend Designer from Bordeaux, currently working for Improbable in sunny London.</p>\n</aside>`
          }, {
            name: 'meter',
            desc: 'Defines a horizontal meter.',
            code: `<meter min="0" low="16" value="71" high="92" max="100">Alex</meter>\n<meter min="0" low="16" value="16" high="92" max="100">Brandon</meter>\n<meter min="0" low="16" value="40" high="92" max="100">Charlotte</meter>\n<meter min="0" low="16" value="92" high="92" max="100">Sam</meter>`
          }, {
            name: 'nav',
            desc: 'Defines a section with navigation links.',
            code: `<nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n    <a href="/contact">Contact</a>\n</nav>`
          }, {
            name: 'section',
            desc: 'Defines a section within a web page.',
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
            name: 'i',
            desc: 'Makes an element italic.',
            code: `Hello <i>World</i>`
          }, {
            name: 'mark',
            desc: 'Defines highlighted text.',
            code: `We use HTML5 to write <mark>content</mark> on the Web.`
          }, {
            name: 'strong',
            desc: 'Defines strong importance on text.',
            code: `HTML should only be used to write <strong>content</strong>, and keep CSS for <strong>styling</strong> the web page.`
          }, {
            name: 'sub',
            desc: 'Defines text that should be displayed lower.',
            code: `The formula of carbon dioxide is CO<sub>2</sub>.`
          }, {
            name: 'summary',
            desc: 'Defines the summary of a <details> element.',
            code: `<details>\n    <summary>Read more</summary>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>\n</details>`
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
]
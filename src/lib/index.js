export const data = [
  {
    section: 'Port',
    slug: 'port',
    categories: [
      {
        name: 'Layout',
        slug: 'layout',
        items: [
          {
            name: 'Aspect Ratio',
            slug: 'aspect-ratio',
            desc: 'Fixed and responsive resolutions for media and other elements.',
            columns: '2',
            variants: [
              {
                name: '1x1',
                desc: 'This element will have equal sides regardless of parent\'s or children\'s box model.',
                code: `<div class="ar ar-1x1 mw-10">\n    <img class="of-cov" src="https://picsum.photos/100/200">\n</div>`
              }, {
                name: '4x3',
                desc: 'This element will have a 4:3 ratio regardless of parent\'s or children\'s box model.',
                code: `<div class="ar ar-4x3 mw-12 bg-black">\n    <embed src="https://giphy.com/embed/kLm8orAKvYgkR1mB0l">\n</div>`
              }, {
                name: '16x9',
                desc: 'This element will have a 16:9 ratio regardless of parent\'s or children\'s box model.',
                code: `<div class="ar ar-16x9 mw-14">\n    <video src="http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" controls></video>\n</div>`
              }
            ]
          }, {
            name: 'Center',
            slug: 'center',
            desc: 'Centers child elements within itself.',
            variants: [
              {
                name: 'Centered content',
                desc: '',
                code: `<div class="grid place-center h-8 bg-light-1">The center of the universe</div>`
              }, {
                name: 'Centered icon',
                desc: 'Centering an icon',
                code: `<div class="grid place-center bg-red-3 h-3 w-3">\n    <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2V14H14V2ZM0 0V16H16V0H0Z" fill="white"/>\n        <path d="M4 4H12V12H4V4Z" fill="white"/>\n    </svg>\n</div>`
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
                code: `<div>\n    <div class="mw-14 mi-auto pa-4 bg-light-1">\n        <h1>Welcome to this contained page.</h1>\n    </div>\n</div>`
              }, {
                name: 'Contain Elements',
                desc: 'Contain a section with a max width.',
                code: `<div class="p-4 bg-light-1">\n    <div class="mw-13 mi-auto">\n        <img class="w-fill" src="https://picsum.photos/300/200">\n    </div>\n    <div class="mw-12 mi-auto">\n        <p>There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production.</p>\n    </div>\n</div>`
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
                code: `<div class="flex flex-col gap-2">\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n</div>`
              }, {
                name: 'Row',
                desc: 'Row is the default flex direction but you may also use the class "flex-row" in some circumstances.',
                code: `<div class="flex gap-2 mw-8">\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n</div>`
              }, {
                name: 'Wrap',
                desc: 'Starts a new row when the children overflows the flexbox width.',
                code: `<div class="flex flex-wrap gap-2 mw-8">\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n    <div class="h-2 w-2 bg-light-1"></div>\n</div>`
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
                code: `<div class="grid col-1">\n    <div class="bg-light-1">Item 1</div>\n    <div class="bg-light-3">Item 2</div>\n    <div class="bg-light-1">Item 3</div>\n    <div class="bg-light-3">Item 4</div>\n    <div class="bg-light-1">Item 5</div>\n    <div class="bg-light-3">Item 6</div>\n</div>`
              }, {
                name: '2 columns',
                desc: '',
                code: `<div class="grid col-2">\n    <div class="bg-light-1">Item 1</div>\n    <div class="bg-light-3">Item 2</div>\n    <div class="bg-light-1">Item 3</div>\n    <div class="bg-light-3">Item 4</div>\n    <div class="bg-light-1">Item 5</div>\n    <div class="bg-light-3">Item 6</div>\n</div>`
              }, {
                name: '3 columns',
                desc: '',
                code: `<div class="grid col-3">\n    <div class="bg-light-1">Item 1</div>\n    <div class="bg-light-3">Item 2</div>\n    <div class="bg-light-1">Item 3</div>\n    <div class="bg-light-3">Item 4</div>\n    <div class="bg-light-1">Item 5</div>\n    <div class="bg-light-3">Item 6</div>\n</div>`
              }, {
                name: '4 columns',
                desc: '',
                code: `<div class="grid col-4">\n    <div class="bg-light-1">Item 1</div>\n    <div class="bg-light-3">Item 2</div>\n    <div class="bg-light-1">Item 3</div>\n    <div class="bg-light-3">Item 4</div>\n    <div class="bg-light-1">Item 5</div>\n    <div class="bg-light-3">Item 6</div>\n</div>`
              }, {
                name: '5 columns',
                desc: '',
                code: `<div class="grid col-5">\n    <div class="bg-light-1">Item 1</div>\n    <div class="bg-light-3">Item 2</div>\n    <div class="bg-light-1">Item 3</div>\n    <div class="bg-light-3">Item 4</div>\n    <div class="bg-light-1">Item 5</div>\n    <div class="bg-light-3">Item 6</div>\n</div>`
              }, {
                name: '6 columns',
                desc: '',
                code: `<div class="grid col-6">\n    <div class="bg-light-1">Item 1</div>\n    <div class="bg-light-3">Item 2</div>\n    <div class="bg-light-1">Item 3</div>\n    <div class="bg-light-3">Item 4</div>\n    <div class="bg-light-1">Item 5</div>\n    <div class="bg-light-3">Item 6</div>\n</div>`
              }, {
                name: 'Auto - fill',
                desc: 'First child will take up its own width and give the rest of the width to last child.',
                code: `<div class="grid auto-fill">\n    <div class="w-10 bg-light-1">Item 1</div>\n    <div class="bg-light-3">Item 2</div>\n</div>`
              }, {
                name: 'Fill - auto',
                desc: 'Last child will take up its own width and give the rest of the width to first child.',
                code: `<div class="grid fill-auto">\n    <div class="bg-light-3">Item 1</div>\n    <div class="w-10 bg-light-1">Item 2</div>\n</div>`
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
            desc: 'Buttons.',
            columns: '3',
            variants: [
              {
                name: 'Text Button',
                desc: '',
                code: `<button class="p-2 bg-light-1">Intraface</button>`
              }, {
                name: 'Icon Button',
                desc: '',
                code: `<button class="w-3 h-3 grid place-center bg-light-1">\n    <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-3RdnpmjWHLNK">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0V16H8V9H16V0ZM7 1H1V4H7V1ZM7 5H1V15H7V5ZM8 5H15V8H8V5ZM15 1H8V4H15V1Z" fill="currentColor" class="s-3RdnpmjWHLNK"></path>\n    </svg>\n</button>`
              }, {
                name: 'Icon + Text Button',
                desc: '',
                code: `<button class="p-2 grid auto-fill ai-center gap-1 bg-light-1">\n    <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-3RdnpmjWHLNK">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0V16H8V9H16V0ZM7 1H1V4H7V1ZM7 5H1V15H7V5ZM8 5H15V8H8V5ZM15 1H8V4H15V1Z" fill="currentColor" class="s-3RdnpmjWHLNK"></path>\n    </svg>\n    <span>Intraface</span>\n</button>`
              }
            ]
          }, {
            name: 'Checkbox',
            slug: 'checkbox',
            desc: 'Checkboxes.',
            variants: [
              {
                name: 'Checkbox',
                desc: '',
                code: `<label><input type="checkbox"> I have read the documentation</label>`
              }
            ]
          }, {
            name: 'Input',
            slug: 'input',
            desc: 'Inputs.',
            columns: '3',
            variants: [
              {
                name: 'Text Input',
                desc: '',
                code: `<input type="text" placeholder="Type something...">`
              }, {
                name: 'Date Input',
                desc: '',
                code: `<input type="date" placeholder="Select Date">`
              }, {
                name: 'Time Input',
                desc: '',
                code: `<input type="time" placeholder="Select Time">`
              }, {
                name: 'Date + Time Input',
                desc: '',
                code: `<input type="datetime-local" placeholder="Select Date and Time">`
              }, {
                name: 'Number Input',
                desc: '',
                code: `<input type="number" min="0" max="100">`
              }
            ]
          }, {
            name: 'Radio',
            slug: 'radio',
            desc: 'Radios.',
            variants: [
              {
                name: 'Basic',
                desc: '',
                code: `<fieldset class="flex gap-2">\n    <label>\n        <input type="radio" name="answer" value="yes"> Yes\n    </label>\n    <label>\n        <input type="radio" name="answer" value="no"> No\n    </label>\n</fieldset>`
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
            columns: '2',
            variants: [
              {
                name: 'Solid',
                desc: 'Background, border and text has a color theme.',
                code: `<span class="ib px-1 bg-red-1 red-5">Try again</span>`
              }, {
                name: 'Outline',
                desc: 'Background, border and text has a color theme.',
                code: `<span class="ib px-1 black-4 b-all bw-1 b-black-4 br-2">Basic</span>`
              }, {
                name: 'Icon Badge',
                desc: 'Stylize an icon to look like a badge.',
                code: '<span class="ib w-2 h-2 br-circle bg-blue-2 grid place-center">\n    <svg class="w-1" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.08006L8.21742 16L0 7.70069L2.1244 5.62063L8.21742 11.7744L19.8756 0L22 2.08006Z" fill="white"/>\n    </svg>\n</span>'
              }, {
                name: 'Compositions',
                desc: 'Example usage of badges.',
                code: `<div class="grid auto-fill gap-2">\n    <div class="w-4 h-4 bg-light-1"></div>\n    <div class="flex flex-col">\n        <div class="if ai-center gap-2">\n            <h4>Product Name</h4>\n            <span class="ib px-1 black-4 b-all bw-1 b-black-4">In Stock</span>\n        </div>\n    <p>Buy this product today and our company will earn money.</p>\n</div>\n</div>`
              }
            ]
          }, {
            name: 'Card',
            slug: 'card',
            desc: '',
            columns: '2',
            variants: [
              {
                name: 'Basic Card',
                desc: '',
                code: `<div class="pa-3 br-2 bg-light-1">Welcome to internet.com. Please <a href="#">sign in</a>.</a>`
              }, {
                name: 'Product Card',
                desc: '',
                code: `<div class="pa-3 br-2 bg-light-1 stack gap-1 mw-11">\n    <div class="h-7 bg-center bg-cover br-2" style="background-image:url(https://placehold.co/400x400?text=Product)"></div>\n    <h4>Product Name</h4>\n    <p>Great product description here.</p>\n</div>`
              }
            ]
          }, {
            name: 'Code',
            slug: 'code',
            desc: '',
            columns: '2',
            variants: [
              {
                name: 'Inline Code',
                desc: '',
                code: `<p>Install your dependencies by entering <code class="pa-1 br-1 bg-light-4">npm install</code> in your terminal.`
              }, {
                name: 'Code Block',
                desc: '',
                code: `<div class="pa-2 br-2 bg-black red-1">\n    <pre><code>@import url('https://intraface.io/if.min.css');\n/* Custom styles */</code></pre>\n</div>`
              }
            ]
          }, {
            name: 'Divider',
            slug: 'divider',
            desc: '',
            columns: '2',
            variants: [
              {
                name: 'Horizontal',
                desc: '',
                code: `<div class="stack gap-1">\n    <div>Intraface</div>\n    <div class="w-fill h-0 b-bottom bw-1 b-light-5"></div>\n    <div>Your new design tool</div>\n</div>`
              }, {
                name: 'Vertical',
                desc: '',
                code: `<div class="flex ai-center gap-2">\n    <div>Intraface</div>\n    <div class="w-0 h-3 b-right bw-1 b-light-5"></div>\n    <div>Your new design tool</div>\n</div>`
              }
            ]
          }, 
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
                name: 'Small Avatar',
                desc: '',
                code: `<div class="w-3 h-3 bg-center bg-cover" style="background-image:url(https://placehold.co/400x400?text=IF)"></div>`
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
    section: 'Repo',
    slug: 'repo',
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
                code: `<div class="fade-in forwards w-5 h-5 bg-light-1"></div>`
              }, {
                name: 'infinite',
                desc: '',
                code: `<div class="fade-in infinite w-5 h-5 bg-light-1"></div>`
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
                code: `<div class="fade-in infinite w-5 h-5 bg-light-1"></div>`
              }, {
                name: 'fade-out',
                desc: '',
                code: `<div class="fade-out infinite w-5 h-5 bg-light-1"></div>`
              },
            ]
          }, {
            name: 'Scale',
            slug: 'scale',
            desc: 'Scale animations.',
            variants: [
              {
                name: 'grow',
                desc: '',
                code: `<div class="grow infinite w-5 h-5 bg-light-1"></div>`
              }, {
                name: 'shrink',
                desc: '',
                code: `<div class="shrink infinite w-5 h-5 bg-light-1"></div>`
              },
            ]
          }, {
            name: 'Transition',
            slug: 'transition',
            desc: 'Transitions for when properties change.',
            variants: [
              {
                name: 't-all',
                desc: 'Add transition to all properties.',
                code: `<div class="t-all bg-black-1 bg-light-1-h light-1 black-1-h w-6 h-4 grid place-center">Hover me</div>`
              }
            ]
          }, {
            name: 'Translate',
            slug: 'translate',
            desc: 'Translate animations.',
            variants: [
              {
                name: 'ascend',
                desc: '',
                code: `<div class="ascend infinite w-5 h-5 bg-light-1"></div>`
              }, {
                name: 'descend',
                desc: '',
                code: `<div class="descend infinite w-5 h-5 bg-light-1"></div>`
              }, 
            ]
          }
        ]
      }, {
        name: 'Background',
        slug: 'background',
        items: [
          {
            name: 'Background Attachment',
            slug: 'background-attachment',
            desc: 'Background attachments.',
            variants: [
              {
                name: 'bg-fixed',
                desc: 'Make a background image fixed. Whitespace is added to demonstrate the effect.',
                code: `<div class="h-12"></div>\n<div class="bg-fixed w-12 h-12" style="background-image:url(https://picsum.photos/800/800)"></div>\n<div class="h-12"></div>`
              },
            ]
          }, {
            name: 'Background Color',
            slug: 'background-color',
            desc: 'Background colors. Supports hover by appending "-h" to the class name.',
            columns: '2',
            variants: [
              {
                name: 'bg-black-[1 to 5]',
                desc: '',
                code: `<div class="bg-black-1 h-4"></div>\n<div class="bg-black-2 h-4"></div>\n<div class="bg-black-3 h-4"></div>\n<div class="bg-black-4 h-4"></div>\n<div class="bg-black-5 h-4"></div>`
              }, {
                name: 'bg-white-[1 to 5]',
                desc: '',
                code: `<div class="bg-white-1 h-4"></div>\n<div class="bg-white-2 h-4"></div>\n<div class="bg-white-3 h-4"></div>\n<div class="bg-white-4 h-4"></div>\n<div class="bg-white-5 h-4"></div>`
              }
            ]
          }, {
            name: 'Background Position',
            slug: 'background-position',
            desc: 'Background positions.',
            variants: [
              {
                name: 'bg-center',
                desc: 'Center a background image.',
                code: `<div class="bg-center w-12 h-12" style="background-image:url(https://picsum.photos/400/800)"></div>`
              },
            ]
          }, {
            name: 'Background Repeat',
            slug: 'background-repeat',
            desc: 'Background repeats.',
            variants: [
              {
                name: 'no-repeat',
                desc: 'Prevent background images from repeating.',
                code: `<div class="no-repeat bg-light-4 w-12 h-12" style="background-image:url(https://picsum.photos/200/200)"></div>`
              },
            ]
          }, {
            name: 'Background Size',
            slug: 'background-size',
            desc: 'Background sizes.',
            variants: [
              {
                name: 'contain',
                desc: 'Contains the background image to fit the element.',
                code: `<div class="bg-contain bg-center no-repeat w-12 h-12" style="background-image:url(https://picsum.photos/800/400)"></div>`
              }, {
                name: 'cover',
                desc: 'Covers the element with the background image.',
                code: `<div class="bg-cover bg-center w-12 h-12" style="background-image:url(https://picsum.photos/400/800)"></div>`
              }
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
                name: 'bw-[0 to 3]',
                desc: 'Border widths.',
                code: `<div class="flex flex-wrap gap-2">\n    <div class="bw-0 b-all b-light-1 bg-light-4 w-6 h-2"></div>\n    <div class="bw-1 b-all b-light-1 bg-light-4 w-6 h-2"></div>\n    <div class="bw-2 b-all b-light-1 bg-light-4 w-6 h-2"></div>\n    <div class="bw-3 b-all b-light-1 bg-light-4 w-6 h-2"></div>\n</div>`
              }, {
                name: 'b-all',
                desc: 'Border all sides of the element.',
                code: `<div class="flex flex-wrap gap-2">\n    <div class="b-all bw-1 b-light-1 bg-light-4 w-6 h-2"></div>\n</div>`
              }, {
                name: 'b-left',
                desc: 'Border left side of the element.',
                code: `<div class="flex flex-wrap gap-2">\n    <div class="b-left bw-1 b-light-1 bg-light-4 w-6 h-2"></div>\n</div>`
              }, {
                name: 'b-right',
                desc: 'Border right side of the element.',
                code: `<div class="flex flex-wrap gap-2">\n    <div class="b-right bw-1 b-light-1 bg-light-4 w-6 h-2"></div>\n</div>`
              }, {
                name: 'b-top',
                desc: 'Border top side of the element.',
                code: `<div class="flex flex-wrap gap-2">\n    <div class="b-top bw-1 b-light-1 bg-light-4 w-6 h-2"></div>\n</div>`
              }, {
                name: 'b-bottom',
                desc: 'Border bottom side of the element.',
                code: `<div class="flex flex-wrap gap-2">\n    <div class="b-bottom bw-1 b-light-1 bg-light-4 w-6 h-2"></div>\n</div>`
              },
            ]
          }, {
            name: 'Height',
            slug: 'height',
            desc: 'Heights.',
            columns: '3',
            variants: [
              {
                name: 'h-0',
                desc: 'Height is 0.',
                code: `<div class="h-0 bg-light-1"></div>`
              }, {
                name: 'h-1',
                desc: '',
                code: `<div class="h-1 bg-light-1"></div>`
              }, {
                name: 'h-2',
                desc: '',
                code: `<div class="h-2 bg-light-1"></div>`
              }, {
                name: 'h-3',
                desc: '',
                code: `<div class="h-3 bg-light-1"></div>`
              }, {
                name: 'h-4',
                desc: '',
                code: `<div class="h-4 bg-light-1"></div>`
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
            name: 'Color',
            slug: 'text-color',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
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
                name: '',
                desc: '',
                code: ``
              },
            ]
          }
        ]
      }
    ]
  }, {
    section: 'Wiki',
    slug: 'wiki',
    categories: [
      {
        name: 'Embedding',
        slug: 'embedding',
        items: [
          {
            name: 'area',
            desc: 'The area element defines sections in an image map. Image maps let you create clickable links within an image.',
            code: `<img src="https://htmlreference.io/images/world-continents.png" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">\n<map name="world-continents">\n    <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">\n    <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">\n    <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">\n    <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">\n    <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">\n    <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">\n</map>`
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
]
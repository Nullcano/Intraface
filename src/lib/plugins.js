export const plugins = {
  name: 'Plugins',
  slug: 'plugins',
  desc: `
    <p>Intraface plugins are web components and elements primed for seamless integration.</p>
    <p>These collections will continually evolve and expand.</p>
  `,
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
              code: `<div class="grid pc-center h-8 bg-light-3">The center of the universe</div>`
            }, {
              name: 'Centered icon',
              desc: 'Centering an icon',
              code: `<div class="grid pc-center bg-red-3 h-3 w-3">\n    <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2V14H14V2ZM0 0V16H16V0H0Z" fill="white"/>\n        <path d="M4 4H12V12H4V4Z" fill="white"/>\n    </svg>\n</div>`
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
              code: `<div>\n    <div class="mw-14 mi-auto pa-4 bg-light-3">\n        <h1>Welcome to this contained page.</h1>\n    </div>\n</div>`
            }, {
              name: 'Contain Elements',
              desc: 'Contain a section with a max width.',
              code: `<div class="pa-4 bg-light-3">\n    <div class="mw-13 mi-auto">\n        <img class="w-fill" src="https://picsum.photos/300/200">\n    </div>\n    <div class="mw-12 mi-auto">\n        <p>There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production.</p>\n    </div>\n</div>`
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
              code: `<div class="flex flex-col gap-2">\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n</div>`
            }, {
              name: 'Row',
              desc: 'Row is the default flex direction but you may also use the class "flex-row" in some circumstances.',
              code: `<div class="flex gap-2 mw-8">\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n</div>`
            }, {
              name: 'Wrap',
              desc: 'Starts a new row when the children overflows the flexbox width.',
              code: `<div class="flex flex-wrap gap-2 mw-8">\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n    <div class="h-2 w-2 bg-light-3"></div>\n</div>`
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
              code: `<div class="grid col-1">\n    <div class="bg-light-3">Item 1</div>\n    <div class="bg-light-5">Item 2</div>\n    <div class="bg-light-3">Item 3</div>\n    <div class="bg-light-5">Item 4</div>\n    <div class="bg-light-3">Item 5</div>\n    <div class="bg-light-5">Item 6</div>\n</div>`
            }, {
              name: '2 columns',
              desc: '',
              code: `<div class="grid col-2">\n    <div class="bg-light-3">Item 1</div>\n    <div class="bg-light-5">Item 2</div>\n    <div class="bg-light-3">Item 3</div>\n    <div class="bg-light-5">Item 4</div>\n    <div class="bg-light-3">Item 5</div>\n    <div class="bg-light-5">Item 6</div>\n</div>`
            }, {
              name: '3 columns',
              desc: '',
              code: `<div class="grid col-3">\n    <div class="bg-light-3">Item 1</div>\n    <div class="bg-light-5">Item 2</div>\n    <div class="bg-light-3">Item 3</div>\n    <div class="bg-light-5">Item 4</div>\n    <div class="bg-light-3">Item 5</div>\n    <div class="bg-light-5">Item 6</div>\n</div>`
            }, {
              name: '4 columns',
              desc: '',
              code: `<div class="grid col-4">\n    <div class="bg-light-3">Item 1</div>\n    <div class="bg-light-5">Item 2</div>\n    <div class="bg-light-3">Item 3</div>\n    <div class="bg-light-5">Item 4</div>\n    <div class="bg-light-3">Item 5</div>\n    <div class="bg-light-5">Item 6</div>\n</div>`
            }, {
              name: '5 columns',
              desc: '',
              code: `<div class="grid col-5">\n    <div class="bg-light-3">Item 1</div>\n    <div class="bg-light-5">Item 2</div>\n    <div class="bg-light-3">Item 3</div>\n    <div class="bg-light-5">Item 4</div>\n    <div class="bg-light-3">Item 5</div>\n    <div class="bg-light-5">Item 6</div>\n</div>`
            }, {
              name: '6 columns',
              desc: '',
              code: `<div class="grid col-6">\n    <div class="bg-light-3">Item 1</div>\n    <div class="bg-light-5">Item 2</div>\n    <div class="bg-light-3">Item 3</div>\n    <div class="bg-light-5">Item 4</div>\n    <div class="bg-light-3">Item 5</div>\n    <div class="bg-light-5">Item 6</div>\n</div>`
            }, {
              name: 'Auto - fill',
              desc: 'First child will take up its own width and give the rest of the width to last child.',
              code: `<div class="grid auto-fill">\n    <div class="w-10 bg-light-3">Item 1</div>\n    <div class="bg-light-5">Item 2</div>\n</div>`
            }, {
              name: 'Fill - auto',
              desc: 'Last child will take up its own width and give the rest of the width to first child.',
              code: `<div class="grid fill-auto">\n    <div class="bg-light-5">Item 1</div>\n    <div class="w-10 bg-light-3">Item 2</div>\n</div>`
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
              code: `<button class="p-2 bg-light-3">Intraface</button>`
            }, {
              name: 'Icon Button',
              desc: '',
              code: `<button class="w-3 h-3 grid pc-center bg-light-3">\n    <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-3RdnpmjWHLNK">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0V16H8V9H16V0ZM7 1H1V4H7V1ZM7 5H1V15H7V5ZM8 5H15V8H8V5ZM15 1H8V4H15V1Z" fill="currentColor" class="s-3RdnpmjWHLNK"></path>\n    </svg>\n</button>`
            }, {
              name: 'Icon + Text Button',
              desc: '',
              code: `<button class="p-2 grid auto-fill ai-center gap-1 bg-light-3">\n    <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-3RdnpmjWHLNK">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0V16H8V9H16V0ZM7 1H1V4H7V1ZM7 5H1V15H7V5ZM8 5H15V8H8V5ZM15 1H8V4H15V1Z" fill="currentColor" class="s-3RdnpmjWHLNK"></path>\n    </svg>\n    <span>Intraface</span>\n</button>`
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
              code: '<span class="ib w-2 h-2 br-circle bg-blue-2 grid pc-center">\n    <svg class="w-1" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.08006L8.21742 16L0 7.70069L2.1244 5.62063L8.21742 11.7744L19.8756 0L22 2.08006Z" fill="white"/>\n    </svg>\n</span>'
            }, {
              name: 'Compositions',
              desc: 'Example usage of badges.',
              code: `<div class="grid auto-fill gap-2">\n    <div class="w-4 h-4 bg-light-3"></div>\n    <div class="flex flex-col">\n        <div class="if ai-center gap-2">\n            <h4>Product Name</h4>\n            <span class="ib px-1 black-4 b-all bw-1 b-black-4">In Stock</span>\n        </div>\n    <p>Buy this product today and our company will earn money.</p>\n</div>\n</div>`
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
              code: `<div class="pa-3 br-2 bg-light-3">Welcome to internet.com. Please <a href="#">sign in</a>.</a>`
            }, {
              name: 'Product Card',
              desc: '',
              code: `<div class="pa-3 br-2 bg-light-3 stack gap-1 mw-11">\n    <div class="h-7 bg-center bg-cover br-2" style="background-image:url(https://placehold.co/400x400?text=Product)"></div>\n    <h4>Product Name</h4>\n    <p>Great product description here.</p>\n</div>`
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
  ]
}

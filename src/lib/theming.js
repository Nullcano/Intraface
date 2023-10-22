export const theming = {
  name: 'Theming',
  slug: 'theming',
  desc: `
    <p>Theming is the backbone of Intraface, comprising a comprehensive collection of CSS utility classes.</p>
    <p>Explore the endless possibilities and bring your web components to life with the art of theming in Intraface.</p>
  `,
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
              code: `<div class="fade-in forwards w-5 h-5 bg-light-3"></div>`
            }, {
              name: 'infinite',
              desc: '',
              code: `<div class="fade-in infinite w-5 h-5 bg-light-3"></div>`
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
              code: `<div class="fade-in infinite w-5 h-5 bg-light-3"></div>`
            }, {
              name: 'fade-out',
              desc: '',
              code: `<div class="fade-out infinite w-5 h-5 bg-light-3"></div>`
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
              code: `<div class="grow infinite w-5 h-5 bg-light-3"></div>`
            }, {
              name: 'shrink',
              desc: '',
              code: `<div class="shrink infinite w-5 h-5 bg-light-3"></div>`
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
              code: `<div class="t-all bg-black-1 bg-light-3-h light-3 black-1-h w-6 h-4 grid pc-center">Hover me</div>`
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
              code: `<div class="ascend infinite w-5 h-5 bg-light-3"></div>`
            }, {
              name: 'descend',
              desc: '',
              code: `<div class="descend infinite w-5 h-5 bg-light-3"></div>`
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
          columns: '3',
          variants: [
            {
              name: 'bg-black and bg-white',
              desc: 'Not affected by theme change, unlike the other black and white variants.',
              code: `<div class="bg-black h-3"></div>\n<div class="bg-white h-3"></div>`
            }, {
              name: 'bg-black-[1 to 5]',
              desc: '',
              code: `<div class="bg-black-1 h-3"></div>\n<div class="bg-black-2 h-3"></div>\n<div class="bg-black-3 h-3"></div>\n<div class="bg-black-4 h-3"></div>\n<div class="bg-black-5 h-3"></div>`
            }, {
              name: 'bg-blue-[1 to 5]',
              desc: '',
              code: `<div class="bg-blue-1 h-3"></div>\n<div class="bg-blue-2 h-3"></div>\n<div class="bg-blue-3 h-3"></div>\n<div class="bg-blue-4 h-3"></div>\n<div class="bg-blue-5 h-3"></div>`
            }, {
              name: 'bg-cyan-[1 to 5]',
              desc: '',
              code: `<div class="bg-cyan-1 h-3"></div>\n<div class="bg-cyan-2 h-3"></div>\n<div class="bg-cyan-3 h-3"></div>\n<div class="bg-cyan-4 h-3"></div>\n<div class="bg-cyan-5 h-3"></div>`
            }, {
              name: 'bg-dark-[1 to 5]',
              desc: '',
              code: `<div class="bg-dark-1 h-3"></div>\n<div class="bg-dark-2 h-3"></div>\n<div class="bg-dark-3 h-3"></div>\n<div class="bg-dark-4 h-3"></div>\n<div class="bg-dark-5 h-3"></div>`
            }, {
              name: 'bg-grape-[1 to 5]',
              desc: '',
              code: `<div class="bg-grape-1 h-3"></div>\n<div class="bg-grape-2 h-3"></div>\n<div class="bg-grape-3 h-3"></div>\n<div class="bg-grape-4 h-3"></div>\n<div class="bg-grape-5 h-3"></div>`
            }, {
              name: 'bg-green-[1 to 5]',
              desc: '',
              code: `<div class="bg-green-1 h-3"></div>\n<div class="bg-green-2 h-3"></div>\n<div class="bg-green-3 h-3"></div>\n<div class="bg-green-4 h-3"></div>\n<div class="bg-green-5 h-3"></div>`
            }, {
              name: 'bg-indigo-[1 to 5]',
              desc: '',
              code: `<div class="bg-indigo-1 h-3"></div>\n<div class="bg-indigo-2 h-3"></div>\n<div class="bg-indigo-3 h-3"></div>\n<div class="bg-indigo-4 h-3"></div>\n<div class="bg-indigo-5 h-3"></div>`
            }, {
              name: 'bg-light-[1 to 5]',
              desc: '',
              code: `<div class="bg-light-1 h-3"></div>\n<div class="bg-light-2 h-3"></div>\n<div class="bg-light-3 h-3"></div>\n<div class="bg-light-4 h-3"></div>\n<div class="bg-light-5 h-3"></div>`
            }, {
              name: 'bg-lime-[1 to 5]',
              desc: '',
              code: `<div class="bg-lime-1 h-3"></div>\n<div class="bg-lime-2 h-3"></div>\n<div class="bg-lime-3 h-3"></div>\n<div class="bg-lime-4 h-3"></div>\n<div class="bg-lime-5 h-3"></div>`
            }, {
              name: 'bg-orange-[1 to 5]',
              desc: '',
              code: `<div class="bg-orange-1 h-3"></div>\n<div class="bg-orange-2 h-3"></div>\n<div class="bg-orange-3 h-3"></div>\n<div class="bg-orange-4 h-3"></div>\n<div class="bg-orange-5 h-3"></div>`
            }, {
              name: 'bg-pink-[1 to 5]',
              desc: '',
              code: `<div class="bg-pink-1 h-3"></div>\n<div class="bg-pink-2 h-3"></div>\n<div class="bg-pink-3 h-3"></div>\n<div class="bg-pink-4 h-3"></div>\n<div class="bg-pink-5 h-3"></div>`
            }, {
              name: 'bg-red-[1 to 5]',
              desc: '',
              code: `<div class="bg-red-1 h-3"></div>\n<div class="bg-red-2 h-3"></div>\n<div class="bg-red-3 h-3"></div>\n<div class="bg-red-4 h-3"></div>\n<div class="bg-red-5 h-3"></div>`
            }, {
              name: 'bg-teal-[1 to 5]',
              desc: '',
              code: `<div class="bg-teal-1 h-3"></div>\n<div class="bg-teal-2 h-3"></div>\n<div class="bg-teal-3 h-3"></div>\n<div class="bg-teal-4 h-3"></div>\n<div class="bg-teal-5 h-3"></div>`
            }, {
              name: 'bg-violet-[1 to 5]',
              desc: '',
              code: `<div class="bg-violet-1 h-3"></div>\n<div class="bg-violet-2 h-3"></div>\n<div class="bg-violet-3 h-3"></div>\n<div class="bg-violet-4 h-3"></div>\n<div class="bg-violet-5 h-3"></div>`
            }, {
              name: 'bg-white-[1 to 5]',
              desc: '',
              code: `<div class="bg-white-1 h-3"></div>\n<div class="bg-white-2 h-3"></div>\n<div class="bg-white-3 h-3"></div>\n<div class="bg-white-4 h-3"></div>\n<div class="bg-white-5 h-3"></div>`
            }, {
              name: 'bg-yellow-[1 to 5]',
              desc: '',
              code: `<div class="bg-yellow-1 h-3"></div>\n<div class="bg-yellow-2 h-3"></div>\n<div class="bg-yellow-3 h-3"></div>\n<div class="bg-yellow-4 h-3"></div>\n<div class="bg-yellow-5 h-3"></div>`
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
}
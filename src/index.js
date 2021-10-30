import { example } from '@/js/example'

import '@/styles/index.scss'

const heading = document.createElement('h1')
heading.textContent = example()
document.body.appendChild(heading);
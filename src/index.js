// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of styles
import '@/styles/index.scss'

const heading = document.createElement('h1')
heading.textContent = example()
document.body.appendChild(heading);
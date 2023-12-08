import Theme from 'vitepress/theme'

import './vars.css'
import './overrides.css'
import 'uno.css'

export default {
  ...Theme,

  enhanceApp() {},
} satisfies typeof Theme

import { string } from 'prop-types';
import hljs from 'highlight.js'
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
                   hljs.highlight(lang, str, true).value +
                   '</code></pre>';
          } catch (__) {}
        }
    
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
});

export default {
    name:'markdownit',
    props:{
        htmlText:{
            type:String
        }
    },
    watch: {
      
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    render(h) {
        const tem =  md.render(this.htmlText)
        return (
          <div domPropsInnerHTML={tem}></div>  
        ) 
    },
}
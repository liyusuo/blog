import { string } from 'prop-types';
import hljs from 'highlight.js'
import api from "../../api/demo";
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
       
    },
    watch: {
      
    },
    data() {
      return {
          text:"# hot1"
      }
  },
    beforeRouteEnter(to, from, next) {
      console.log(to)
      let param = {
        id:'1'
      }
      api.getNowRead(param).then(res => {
        console.log("res",res)
        next(vm=>{
          console.log("vm",vm)
          vm.text = res.data;
        });
      });
    },
   
    methods: {
        
    },
    render(h) {
        // const tem =  md.render(this.htmlText)
        const tem =  md.render(this.text)
        return (
          <div domPropsInnerHTML={tem}></div>  
        ) 
    },
}
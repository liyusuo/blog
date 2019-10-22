import { string } from 'prop-types';

const MarkdownIt = require('markdown-it')
const md = new MarkdownIt();

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
        console.log(tem) // <h1>markdown-it rulezz!</h1>
        return (
          <div domPropsInnerHTML={tem}></div>  
        ) 
    },
}
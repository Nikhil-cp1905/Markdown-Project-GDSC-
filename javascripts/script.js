function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `# Welcome to my Markdown project

## Made by Nikhil Cp
### U can type the text in here and view the output the the box to ur right

SO WE CAN MAKE WORD INTO BOLD like -->**THIS** 
ALSO WE CAN MAKE THE WORD TO ITALIC-->_por favor_
Or if u wanna mix both of then we --->_**can**_
IF u want cut our words like curses-->OH ~~F#5k~~
To visit my portfolio website u can--> [Nikhilcp](https://nikhilcp.in/)
**NOW LET US SAY U WANNA MAKE TABLES**


MARKDWON | GDSC | SRM
------------ 

**if u want to make a list of something**
GDSC provides
- _TECHNICAL_
  - _CREATIVE_
    - _PR_
      - _SOCIALS_

**Lets say u wanna list it using numbers.** 
1. for this....
1. Just use as much 1's u want'
1. and u get ittt!!!!!
![Logo](https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png)
If u want to write a line of code u can:
'#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, GDSC!");
   return 0;
}'

`;
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });

    });}
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      React.createElement("div", null, 
          React.createElement("h1", { className: "center" }, "MARKDOWN CONVERTOR "),
          React.createElement("div", { id: "container" },
      React.createElement("div", { className: "c" }, 
      React.createElement("h3", { className: "center" }, ""), 
      React.createElement("textarea", { id: "editor", value: text, onChange: this.handleChange })), 

              React.createElement("h3", { className: "center" }, "    <---Type in ur text"),
              React.createElement("h3", { className: "center" }, "    Check ur results--->"), 

      React.createElement("div", { dangerouslySetInnerHTML: { __html: markdown }, id: "preview" }))));


    }
}
function openLink() {
    window.open("howtouse.html", "newwindow", "status=1, fullscreen=1");
}


ReactDOM.render( React.createElement(App, null), document.getElementById('app'));


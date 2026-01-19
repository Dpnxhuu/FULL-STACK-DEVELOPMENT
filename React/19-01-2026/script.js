
// const React = {
//     createElement: function(tagName, attributes, content){
//     const element = document.createElement(tagName);
//     element.textContent = content;
//     for(let key in attributes){
//         if(key === 'style'){
//             Object.assign(element.style, attributes.style)
//         }
//         else{
//             element[key] = attributes[key]
//         }
//     }
//     return element;
// }
// }
// const ReactDOM ={
//     render: function(child, parent)
//     {
//         parent.append(child);
//     }
// }

const React ={
    createElement: function(type,props,children){
        return {
            type: type,
            props: {...props,
            children: children,
            }
        }
    }
}

const ReactDOM = {
    render: function(reactElement,root){
        const element = document.createElement(reactElement.type);
        const {props} = reactElement;
        for(let key in props){
            if(key === 'style'){
                Object.assign(element.style, props.style)
            }
            else if(key === 'children'){
                element.textContent = props[key];
            }
            else{
                element[key] = props[key]
            }
        }
        root.append(element);
    }
}

const root = document.getElementById('root');

const Element1 = React.createElement('h1',{id: 'first', className: 'firstClass', style:{backgroundColor: 'black', color: 'white'}}, "hello world!");

const Element2 = React.createElement('h2',{id: 'sec', className: 'firstClass', style:{backgroundColor: 'black', color: 'white'}}, "hello world!");

const Element3 = React.createElement('h3',{id: 'third', className: 'firstClass', style:{backgroundColor: 'black', color: 'white'}}, "hello world!");

ReactDOM.render(Element1,root);
ReactDOM.render(Element2,root);
ReactDOM.render(Element3,root);


console.log(Element1);
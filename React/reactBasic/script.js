
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

// const React ={
//     createElement: function(type,props,children){
//         return {
//             type: type,
//             props: {...props,
//             children: children,
//             }
//         }
//     }
// }

// const ReactDOM = {
//     render: function(reactElement,root){
//         const element = document.createElement(reactElement.type);
//         const {props} = reactElement;
//         for(let key in props){
//             if(key === 'style'){
//                 Object.assign(element.style, props.style)
//             }
//             else if(key === 'children'){
//                 element.textContent = props[key];
//             }
//             else{
//                 element[key] = props[key]
//             }
//         }
//         root.append(element);
//     }
// }

// const root = document.getElementById('root');

// const Element1 = React.createElement('h1',{id: 'first', className: 'firstClass', style:{backgroundColor: 'black', color: 'white'}}, "hello world!");

// const Element2 = React.createElement('h2',{id: 'sec', className: 'firstClass', style:{backgroundColor: 'black', color: 'white'}}, "I'm Back!");

// const Element3 = React.createElement('h3',{id: 'third', className: 'firstClass', style:{backgroundColor: 'black', color: 'white'}}, "To the game");

// const Element4 = React.createElement('h4',{style:{backgroundColor:'black',color: 'white'}},'Hey Coders');
// ReactDOM.render(Element1,root);
// ReactDOM.render(Element2,root);
// ReactDOM.render(Element3,root);

// const div = React.createElement('div',{className: 'parent'},Element1,Element2,Element3,Element4);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Element1);
// Root.render(div);


// console.log(Element1);


// const div = (<div id="root">
//     <h1>Hello Boss!</h1>
//     <h2>Hey Coders!</h2>
// </div>);

// const body = ReactDOM.createRoot(document.getElementById('root'));
// body.render(div);

// const div = ReactDOM.createRoot(document.getElementById('root'));
// div.render(<h1>Hello Boss!</h1>)

// function App(){
//     return (
//         <h1 className="H1tag" style={{backgroundColor: "orange", color: "green "}}>Hello Boss!</h1>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));  
// root.render(<App />);

function Header(){
    return(
        <header>
            <h1 style={{backgroundColor: "blue", color: 'white', padding: "10px", margin: "20px", textAlign: "center"}}>This is Header</h1>
        </header>
    )
}   

function Main(){
    return(
        <main style={{textAlign: "center", backgroundColor: "lightblue", padding: "20px"}}>
            Array destructuring JavaScript ka ek useful feature hai jisme hum array ke elements ko unki position index ke base par variables me assign karte hain. Isme variable ka naam important nahi hota, balki order important hota hai. Jaise = arr me a ko first element aur b ko second element milta hai. Agar array me koi value missing ho, to variable undefined ho jata hai. Is problem se bachne ke liye hum default values bhi de sakte hain. Array destructuring code ko short, clean aur readable banata hai, aur React me hooks jaise useState me bahut common hai.
        </main>
    )
}

function Footer(){
    return(
        <footer>
            <h1 style={{textAlign: "center", backgroundColor: "green", margin: "20px", padding: "10px", color: "white"}}>
                This is footer
            </h1>
        </footer>
    )
}

function App(){
    return(
       <>
        <Header/>
        <Main/>
        <Footer/>
       </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
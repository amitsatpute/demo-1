//core react
//{} this the oject give attribute to the tab.
//const heading = React.createElement("h1", { id: "heading" }, "Hello World");

//createElement(object) => HTML(browser understand)
// create nested html tag
//if we have to create two childern then we have to pass as an array
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm child h1 tag"),
    React.createElement("h2", {}, "I'm child h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm child h1 tag"),
    React.createElement("h2", {}, "I'm child h2 tag"),
  ]),
]);

//JSX

//react DOM -- render the react code
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

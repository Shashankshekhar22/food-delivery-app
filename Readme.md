# Named export

- export const abc this requires curly braces while importing
- default export does not requires curly braces while importing

# React Hooks

- Normal JS utility function

- useState() - Super powerful state variable

- whenever state variable is updated react is rerendering the component
- always call useEffect inside the component
- never create it inside if else

- useEffects()

- Reconciliation Algorithm (React Fiber-->Introduced in React 16)

- Virtual Dom is a representation of Actual DOM which is a React Element i.e. an nested Object of all the DOM elements

- Diff Algorithm
- It finds the difference between virtual DOM and updated DOM

# useEffect

- it is called as soon as rendering is done

- if no dependency array => useEffect is called on Every Render
- useEffect(() => {
- console.log("useEffect Called");
- });
- if there is an empty dependency array ==> use effect is called once on initial render
- useEffect(() => {
- console.log("useEffect Called");
- }, []);

- if dependency array has some value then => useEffect is called only when dependency changes

- useEffect(() => {
- console.log("useEffect Called");
- }, [someDependencies]);

- rafce use to create the component using shortcut

# There are two types of routing in web apps

    - Client side Routing => Routing is defined in the client side no API calls are made
    - Server side Routing => Get routing data from server and loads it

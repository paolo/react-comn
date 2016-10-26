# react-co[mn]

A very small set of functions that could help us on creating react componentes or react containers,
sometimes also refered as dumb and smart components, stateless and statefull components, etc.

## Install

Simple add the package through **yarn** or **npm**

```
yarn add react-comn
```

```
npm install react-comn --save
```

## Usage

This package essentially has two function: `component()` and `container()`.

### Component

A **Component** is actually a **stateless functional component**,
in the example below we have simple email form component.

```js
const EmailForm = ({ data, onSubmit }) =>
  <form className="form" onSubmit={onSubmit}>
    <input type="text" name="name" />
    <button type="submit">Submit</button>
    <p>
      Hello {data.get('txt')}!
    </p>
  </form>

export default component(EmailForm);
```

The convention for components would be:

* **data** should hold everything that's required to render the component in a particular state.
* Event handlers and **childred** can be passed as separate prop attributes.

### Container

A **Container** is actually a **statefull component**, in the example below we can see a definition
of a container for the component defined in the previous section.

```js
const EmailFormContainer = container({
  data: {
    txt: 'no body', // initial immutable data
  },
  handlers: {
    handleSubmit(data, evt, { name }) {
      return data.set('txt', name);
    }
  },
  component: {
    render() {
      return <Login data={this.state.data} onSubmit={this.handleSubmit} />;
    },
  },
});

// Use your container elsewhere
<EmailFormContainer />
```

The convention for containers would be:

* In case of **data** not being an immutable object, it will be converted to one.
* Handlers will always have **data** as first parameter, and they **should always return**
  the new immutable state.
* When defining your container's render function, we must always assign the container's
  `state.data` attribute as the component's `data` props.
* The container's component object can have any of the known react's lifecycle methods, and
  if they need to change the component's props, it should be done via `this.setState({data: newData})`.


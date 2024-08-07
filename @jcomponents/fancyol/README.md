# FancyOl
## Props
* spacing?: number - distance between successive <li> elements. Similar to margin-bottom.
* backgroundColor?: string - specifies the circle's color
* color?: string - specifies the text color
* showLine?: boolean - whether to show a line connecting the circles

## Usage
```jsx
import FancyOl from '@jcomponents/fancyol';

export default function Page() {
    return <>
        <h1>The Steps</h1>
        <FancyOl>
            <li>Sign into AWS Management Console.</li>
            <li>Open the RDS console.</li>
            <li>Choose the region where you wish to create your instance.</li>
            <li>In the navigation pane, click on 'Databases'.</li>
            <li>Click on 'Create database'.</li>
        </FancyOl>
    </>;
}

```
yields
![demo](https://joelgrayson.com/image/@jcomponents/fancyol/1.png)

With `<FancyOl backgroundColor='purple'>`, you get
![demo](https://joelgrayson.com/image/@jcomponents/fancyol/2.png)

With `<FancyOl backgroundColor='#dddddd' color='#111111'>`, you get
![demo](https://joelgrayson.com/image/@jcomponents/fancyol/3.png)


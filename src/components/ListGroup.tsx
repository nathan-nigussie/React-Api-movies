import { ReactNode, useState } from "react";

// if we want to use props
//{items:[],Heading:string} (object with two different features)

// to pass different labels to props we can use type script features called Interface to setup the strctures of teh object
// the name props is conventional name but it can be any
interface Props {
  items: string[]; // an arrau of strings
  heading: string;
  onSelectItem: (item: string) => void;
  children: ReactNode;
}

function ListGroup({ items, heading, onSelectItem, children }: Props) {
  // items = [];

  //event Handler
  // const handeClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>"No Items |Found"</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="alert alert-primary">{children} </div>
    </>
  );
}

export default ListGroup;

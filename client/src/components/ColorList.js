import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { useHistory } from 'react-router-dom'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);

  // const { push } = useHistory();

  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  // console.log('outside of saveEdit colorToEdit: ', colorToEdit)
  // console.log('outside of saveEdit editing: ', editing)
  // console.log('outside of saveEdit updateColors: ', updateColors)
  // console.log('outside of saveEdit colors: ', colors)


  const saveEdit = e => {
    e.preventDefault();
    // console.log('saveEdit - colorToEdit: ', colorToEdit)
    // console.log('saveEdit - editing: ', editing)
    // console.log('saveEdit - updateColors: ', updateColors)
    // console.log('saveEdit - colors: ', colors)
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    .put(`/colors/${colorToEdit.id}`)
    .then((res) => {
      console.log('safeEdit res: ', res)

      // updateColors(colors)

      
    })
    .catch((error)=>{
      console.log("error with saveEdit in colorList.js: ", error)
    })


  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
    .delete(`/colors/${colorToEdit.id}`)
    .then((res) => {
      console.log('deleteColor res: ', res)
      // updateColors()
      // push('/protected');
      updateColors(colors.filter((item)=>{
          if(item.id !== color.id)
          return item
        }))
    })
    .catch((error) =>{
      console.log("error with deleteColor in colorList.js: ", error)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              [<span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>]   {" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;

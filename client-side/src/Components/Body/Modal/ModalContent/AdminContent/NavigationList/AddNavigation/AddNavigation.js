import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CustomButton from "../../../../../Button/Button";
import "./AddNavigation.css";
import { Button } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddNavigationPanel = (props) => {
  const theme = useTheme();
  const [currentCategory, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("");
  const [parent, setParent] = useState("");
  const [name, setName] = useState("");
  const [disalbe, setDisable] = useState(false);

  useEffect(() => {
    // http://localhost:3961/admin/getCategory

    if (!props.OpenModal) return;

    fetch("http://localhost:3961/admin/getCategory")
      .then((response) => response.json())
      .then((data) => setCategories(JSON.parse(data)));
  }, [props.OpenModal]);

  const handleChangeMultipleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (event) => {
    setType(event.target.value);

    if (event.target.value === "1") {
      setCategory([]);
      setDisable(true);
      setParent("");
    } else setDisable(false);
  };

  const handleChangeParent = (event) => {
    setParent(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const SaveNavigation = () => {
    // let xhr = new XMLHttpRequest();
    // let url = "localhost:3306/admin/insertNavigation";

    // xhr.open("POST", url, true);

    // xhr.setRequestHeader("Content-Type", "application/json");

    // let jsonData = JSON.stringify({
    //   "name": name,
    //   "type": type,
    //   "categories": personName
    // });

    // xhr.send(jsonData);

    const navigationModel = {
      type: type,
      category: currentCategory,
      name: name,
      parent: parent,
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3961/admin/insertNavigation");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(navigationModel));
    // fetch('http://localhost:3961/admin/insertNavigation', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(navigationModel)
    // }).then(response => response.json())
    // .then(data => console.log(JSON.parse(data)));
  };

  return (
    <div className="subModalContent">
      <FormControl sx={{ m: 1 }} fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"1"}>Navigation Button</MenuItem>
          <MenuItem value={"2"}>Column</MenuItem>
          <MenuItem value={"3"}>Category</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} fullWidth>
        <TextField
          onChange={handleNameChange}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} fullWidth disabled={disalbe}>
        <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={currentCategory}
          onChange={handleChangeMultipleSelect}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          // inputProps={{ readOnly: true }}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.Id}
              value={category.Name}
              style={getStyles(name, currentCategory, theme)}
            >
              {category.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} fullWidth disabled={disalbe}>
        <InputLabel id="demo-simple-select-label">Parent</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={parent}
          label="Type"
          onChange={handleChangeParent}
        >
          <MenuItem value={"1"}>Navigation Button</MenuItem>
          <MenuItem value={"2"}>Column</MenuItem>
          <MenuItem value={"3"}>Category</MenuItem>
        </Select>
      </FormControl>
      <CustomButton OnClick={() => SaveNavigation()} color={"orange"}>
        Save
      </CustomButton>
    </div>
  );
};

export default AddNavigationPanel;

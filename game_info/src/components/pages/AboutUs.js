import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  IconButton,
  ImageList,
  ImageListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Input,
  Toolbar,
  Typography,
  Switch
} from "@mui/material";
import { AccountCircle, Settings, Logout } from "@mui/icons-material/";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.htp = React.createRef();
    this.date = React.createRef();
    this.team = React.createRef();
    this.age = React.createRef();
  }
  state = {
    auth: true,
    anchorEl: null,
    edit: false,
    file: null,
    name: "Obstacle Crossed",
    htp:
      "Players will have the weapons and abilities to overcome obstacles. However, it can only be used once. Weapons can appear indefinitely. Weapons spawn randomly while running.",
    date: "2021-10-30",
    team: "Best Team Name",
    age: "12"
  };
  itemData = [
    "/images/game_play.png",
    "/images/shuriken.png",
    "/images/sword.png",
    "/images/bomb.jpeg"
  ];

  handleSaveChange = (event) => {
    this.setState({
      edit: false,
      name: this.name.current.value,
      htp: this.htp.current.value,
      team: this.team.current.value,
      date: this.date.current.value,
      age: this.age.current.value
    });
  };

  changeEditMode = (event) => {
    this.setState({
      edit: !this.state.edit
    });
  };
  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleInputClick = (event) => {
    var files = event.target.files;
    var reader = new FileReader();
    if (files[0]) {
      reader.onload = function (e) {
        this.setState({ file: e.target.result });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  render() {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: "#2E3B55" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Obstacle Crossed
              </Typography>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Avatar>A</Avatar>
                <Typography sx={{ minWidth: 100 }}>
                  {this.state.auth ? "Admin01" : "User01"}
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
                onClick={this.handleClose}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircle fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.auth}
                  onChange={this.handleChange}
                  aria-label="mode"
                />
              }
              label={this.state.auth ? "Admin" : "User"}
            />
            {this.state.auth &&
              (this.state.edit ? (
                <div>
                  <Button variant="contained" onClick={this.handleSaveChange}>
                    Save
                  </Button>
                  <Button variant="contained" onClick={this.changeEditMode}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <div>
                  {" "}
                  <Button variant="contained" onClick={this.changeEditMode}>
                    Edit
                  </Button>
                </div>
              ))}
          </FormGroup>
        </Box>
        <Container margin="normal">
          <Typography m={2} variant="h4" style={{ textAlign: "center" }}>
            Game Information
          </Typography>
        </Container>
        <Container>
          <Typography my={2} variant="h6">
            {"Name: "}
            {this.state.edit ? (
              <TextField
                defaultValue={this.state.name}
                variant="standard"
                inputRef={this.name}
              />
            ) : (
              this.state.name
            )}
          </Typography>
          <Typography my={2} variant="h6">
            {"How to play: "}
            {this.state.edit ? (
              <TextField
                fullWidth
                multiline
                defaultValue={this.state.htp}
                inputRef={this.htp}
              />
            ) : (
              <Typography paragram>{this.state.htp}</Typography>
            )}
          </Typography>

          <Typography variant="h6">
            Pictures:
            {this.state.edit && (
              <div>
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onClick={this.handleInputClick}
                />
                <Button
                  variant="contained"
                  component="span"
                  onClick={(e) => {
                    this.itemData.push(this.state.file);
                  }}
                >
                  Upload
                </Button>
              </div>
            )}
            <ImageList cols={4}>
              {this.itemData.map((item) => (
                <ImageListItem key={item}>
                  <img src={item} alt={""} />
                </ImageListItem>
              ))}
            </ImageList>
          </Typography>
          <Typography my={2} variant="h6">
            Release Date:
            {this.state.edit ? (
              <TextField
                type="date"
                defaultValue={this.state.date}
                variant="standard"
                inputRef={this.date}
              />
            ) : (
              this.state.date
            )}
          </Typography>
          <Typography my={2} variant="h6">
            The publisher:
            {this.state.edit ? (
              <TextField
                fullWidth
                multiline
                defaultValue={this.state.team}
                inputRef={this.team}
              />
            ) : (
              this.state.team
            )}
          </Typography>
          <Typography my={2} variant="h6">
            Ageplay:
            {this.state.edit ? (
              <TextField
                style={{ width: 35 }}
                type="number"
                defaultValue={this.state.age}
                variant="standard"
                inputRef={this.age}
              />
            ) : (
              this.state.age
            )}
            +
          </Typography>
        </Container>
      </Paper>
    );
  }
}

export default AboutUs;

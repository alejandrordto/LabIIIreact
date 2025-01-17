import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Face from '@material-ui/icons/Face';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
function logOut() {
  localStorage.setItem('isLoggedIn',false);
  window.location.reload();
}
function Configure(){
  localStorage.setItem("configure",true);
  window.location.reload();
}
export default function MenuDrawer() {

  const [state, setState] = React.useState({
    lefft: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem key='User'>
          <ListItemIcon><Face></Face></ListItemIcon>
          <ListItemText primary={localStorage.getItem('email')} />
        </ListItem>

      </List>
      <Divider />
      <Button onClick={Configure}>
        Configure account
      </Button>
      <div></div>
      <Button variant="contained" color="secondary" onClick={logOut}>
          Log out
      </Button>
      
    </div>
  );
  return (
    <div>
      
      <IconButton className="btn" aria-label="Menu" onClick={toggleDrawer('left', true)}>
          <Menu></Menu>
        </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

    </div>
  );
}
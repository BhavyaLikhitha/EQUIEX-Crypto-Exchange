import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

export default function AnchorTemporaryDrawer(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false); // Explicit type annotation for useState

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className='link' />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='drawer-div'>
          <a href='/markets'><p className='link'>Markets</p></a>
          <a href='/'><p className='link'>Trade</p></a>
          <a href='/'><p className='link'>NFT Gallery</p></a>
          <a href='/'><p className='link'>Academy</p></a>
          <a href='/'><p className='link'>Rewards</p></a>
          {/* <a href="/"><Login text={"Login"}/></a> */}
          {/* <a href="/"><Signup text={"Signup"}/></a> */}
        </div>
      </Drawer>
    </div>
  );
}

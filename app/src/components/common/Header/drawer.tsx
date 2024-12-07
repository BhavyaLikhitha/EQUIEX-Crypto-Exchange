import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

// Functional Component
export default function AnchorTemporaryDrawer(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false); // State to track drawer visibility

  return (
    <div>
      {/* Button to toggle the drawer */}
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className='link' />
      </IconButton>

      {/* Material-UI Drawer */}
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='drawer-div'> {/* Container for links */}
          <a href='/markets'><p className='link'>Markets</p></a> {/* Navigation links */}
          <a href='/trade/bitcoin'><p className='link'>Trade</p></a>
          <a href='/nft'><p className='link'>NFT Gallery</p></a>
          <a href='/blogs'><p className='link'>Academy</p></a>
          <a href='/rewards'><p className='link'>Rewards</p></a>
          <a href="/login"><p className='link'>Login</p></a>
          <a href="/signup"><p className='link'>Signup</p></a>
        </div>
      </Drawer>
    </div>
  );
}

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

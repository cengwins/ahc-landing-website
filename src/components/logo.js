/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

import AHCLogo from 'assets/ahc.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={AHCLogo} sx={{ display: 'flex', width: '120px' }} alt="AHC" />
    </Link>
  );
}

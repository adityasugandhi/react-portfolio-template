import { useEffect } from 'react';
import NetlifyIdentityWidget from '../components/CmsTemplate/netflify';
export default function Admin() {
  useEffect(() => {
    import('../utils/cms'); // Adjust the path as needed
  }, []);

  return <div>
  <div id="nc-root">
      <NetlifyIdentityWidget />
       </div>;
       </div>
}

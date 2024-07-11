// components/NetlifyIdentityWidget.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const NetlifyIdentityWidget = () => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.init();
    }
  }, []);

  return (
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
  );
};

export default NetlifyIdentityWidget;

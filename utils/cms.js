import CMS from 'decap-cms-app';
import { MyTemplate } from '../components/CmsTemplate/template.js';

// Initialize the CMS object
CMS.init();

// Register preview template
CMS.registerPreviewTemplate('my-template', MyTemplate);

// Add more CMS configuration and customizations here if needed

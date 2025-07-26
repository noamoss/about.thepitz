// Configuration Example File
// Copy this to config.js and fill in your actual values
// DO NOT commit config.js to the repository

const config = {
  // Google Analytics Configuration
  analytics: {
    measurementId: 'G-XXXXXXXXXX', // Replace with your actual GA4 Measurement ID
    enabled: true
  },
  
  // Site Configuration
  site: {
    url: 'https://thepitz.studio',
    title: 'The Pitz Studio - AI-Powered Digital Solutions',
    description: 'AI-powered digital solutions for businesses and individuals. Expert generative AI training, LLM strategy, and custom AI solutions.'
  },
  
  // Contact Information
  contact: {
    email: 'noam@thepitz.studio',
    linkedin: 'https://www.linkedin.com/in/noam-castel/'
  },
  
  // SEO Configuration
  seo: {
    keywords: ['AI training', 'generative AI', 'LLM strategy', 'artificial intelligence', 'machine learning', 'AI consulting'],
    author: 'Noam Castel',
    language: 'en'
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} 
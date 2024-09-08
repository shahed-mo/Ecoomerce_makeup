import React, { useState } from 'react';
import './Tabs.scss'; // Include your custom styles here

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <div id="tab-description"><p>This is the Description content.</p></div>;
      case 'additional_information':
        return <div id="tab-additional_information"><p>This is the Additional Information content.</p></div>;
      case 'reviews':
        return <div id="tab-reviews"><p>This is the Reviews content.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <ul className="tabs wc-tabs" role="tablist">
        <li className={`description_tab ${activeTab === 'description' ? 'active' : ''}`} id="tab-title-description" role="tab">
          <a href="#tab-description" onClick={() => setActiveTab('description')}>
            Description
          </a>
        </li>
        <li className={`additional_information_tab ${activeTab === 'additional_information' ? 'active' : ''}`} id="tab-title-additional_information" role="tab">
          <a href="#tab-additional_information" onClick={() => setActiveTab('additional_information')}>
            Additional information
          </a>
        </li>
        <li className={`reviews_tab ${activeTab === 'reviews' ? 'active' : ''}`} id="tab-title-reviews" role="tab">
          <a href="#tab-reviews" onClick={() => setActiveTab('reviews')}>
            Reviews (1)
          </a>
        </li>
      </ul>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabbedContent;

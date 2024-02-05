import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

const MyTab = () => {
  const tabListStyle = {
    borderBottom: 'none', // Example border style
    marginBottom: 'none', // Example margin-bottom
    paddingBottom: 'none' // Example padding-bottom
  }
  return (
    <Tabs>
      <TabList style={tabListStyle}>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <Chart1 />
      </TabPanel>
      <TabPanel>
        <Chart2 />
      </TabPanel>
      <TabPanel>
        <Chart3 />
      </TabPanel>
    </Tabs>
  );
};

export default MyTab;

import React, { useState } from 'react';
import { Tabs } from 'antd';// Import your actual chart components
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Second from './Second';
const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('1');

  const onChange = (key) => {
    console.log(key);
    setActiveTab(key);
  };

  const items = [
    {
      key: '1',
      label: 'Tab 1',
      content: <Second />,
    },
    {
      key: '2',
      label: 'Tab 2',
      content: <div>
        <Chart2/>
      </div> ,
    },
    {
      key: '3',
      label: 'Tab 3',
      content: <Chart3 />,
    },
  ];

  return (
    <>
      <div id="container" style={{ padding: '24px' }}>
        <Tabs defaultActiveKey={activeTab} onChange={onChange}>
          {items.map((item) => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.content}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
      <script>
        {`const mountNode = document.getElementById('container');`}
      </script>
    </>
  );
};

export default TabsComponent;

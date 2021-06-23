import React,  {lazy, Suspense, useEffect, useState } from 'react';
import layout from '@splunk/react-page';
import { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterprisePreset, { themes as presetThemes } from '@splunk/dashboard-presets/EnterprisePreset';
import definition from './definition.json';
//Additions for timeslider
import SplunkTimeRangeSlider from '../../components/rangeslider/App.js';

const themeKey = 'enterpriseDark';
const theme = {
    ...presetThemes[themeKey],
    ...dashboardCoreThemes[themeKey],
    ...reactUIThemes[themeKey],
};
// use DashboardCore to render a simple dashboard


var dash = <DashboardCore
            width="100%"
            height="calc(100vh - 78px)"
            definition={definition}
            preset={EnterprisePreset}
        />


layout(
    <>
<div id="neatrange">
	<SplunkTimeRangeSlider dash={dash} />
</div>
</>,
    {
        pageTitle: 'Rangeslider',
        hideFooter: true,
        layout: 'fixed',
    }
);


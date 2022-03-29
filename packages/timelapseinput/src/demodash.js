var demodash = {
    visualizations: {
        viz_TUg2KOpr: {
            type: 'splunk.line',
            options: {
                backgroundColor: 'transparent',
                yAxisTitleText: 'Mentions',
                yAxisLabelVisibility: 'hide',
                xAxisTitleText: 'Time',
                seriesColors: ['#bc2a8d'],
            },
            dataSources: {
                primary: 'ds_WHrM1O4Y',
            },
            showProgressBar: false,
            showLastUpdated: true,
            title: 'Splunk Social Mentions',
        },
        viz_UEhGvw3V: {
            type: 'splunk.singlevalue',
            title: 'Twitter Mentions',
            description: 'End of Interval',
            dataSources: {
                primary: 'ds_ZiNYEHy6',
            },
            options: {
                majorValue: '> sparklineValues|lastPoint()',
                trendValue: '> sparklineValues|delta(-3)',
                backgroundColor: '#1DA1F2',
            },
        },
        viz_FlneySsY: {
            type: 'splunk.singlevalue',
            title: 'Instagram Mentions',
            description: 'End of Interval',
            dataSources: {
                primary: 'ds_GIY5rfzs',
            },
            options: {
                majorValue: '> sparklineValues|lastPoint()',
                trendValue: '> sparklineValues|delta(-3)',
                backgroundColor: '#833AB4',
            },
        },
        viz_8s75aj2w: {
            type: 'splunk.singlevalue',
            title: 'LinkedIn Mentions',
            description: 'End of Interval',
            dataSources: {
                primary: 'ds_LVQiNjG2',
            },
            options: {
                majorValue: '> sparklineValues|lastPoint()',
                trendValue: '> sparklineValues|delta(-3)',
                backgroundColor: '#0077b5',
            },
        },
    },
    dataSources: {
        ds_FtRF4MzI: {
            type: 'ds.search',
            options: {
                query: '| makeresults count=100 | eval t=86400\n| streamstats sum(t) as t\n| eval _time=_time-t | eval time=_time | fields - time',
            },
            name: 'Confirmed Cases',
        },
        ds_WHrM1O4Y: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults count=100 \n | streamstats count\n | eval Total = count * (random()%10)\n | eval _time=_time-(count*86000)\n| fields _time, Total',
            },
            name: 'Search_1',
        },
        ds_ZiNYEHy6: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults count=100 \n | streamstats count\n | eval Total = count * (random()%10)\n | eval _time=_time-(count*86000)\n| fields _time, Total',
            },
            name: 'Search_2',
        },
        ds_GIY5rfzs: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults count=100 \n | streamstats count\n | eval Total = count * (random()%5)\n | eval _time=_time-(count*86000)\n| fields _time, Total',
            },
            name: 'Search_3',
        },
        ds_LVQiNjG2: {
            type: 'ds.search',
            options: {
                queryParameters: {
                    earliest: '-24h@h',
                    latest: 'now',
                },
                query: '| makeresults count=100 \n | streamstats count\n | eval Total = count * (random()%3)\n | eval _time=_time-(count*86000)\n| fields _time, Total',
            },
            name: 'Search_4',
        },
    },
    defaults: {},
    inputs: {},
    layout: {
        type: 'absolute',
        options: {
            display: 'auto-scale',
            backgroundColor: '#000000',
        },
        structure: [
            {
                item: 'viz_TUg2KOpr',
                type: 'block',
                position: {
                    x: 30,
                    y: 20,
                    w: 1140,
                    h: 270,
                },
            },
            {
                item: 'viz_UEhGvw3V',
                type: 'block',
                position: {
                    x: 20,
                    y: 310,
                    w: 360,
                    h: 210,
                },
            },
            {
                item: 'viz_FlneySsY',
                type: 'block',
                position: {
                    x: 410,
                    y: 310,
                    w: 360,
                    h: 210,
                },
            },
            {
                item: 'viz_8s75aj2w',
                type: 'block',
                position: {
                    x: 800,
                    y: 310,
                    w: 360,
                    h: 210,
                },
            },
        ],
        globalInputs: [],
    },
    description: '',
    title: 'Timelapse',
};

export default demodash;

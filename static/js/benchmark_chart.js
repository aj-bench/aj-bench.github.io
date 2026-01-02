document.addEventListener('DOMContentLoaded', function () {
    var dom = document.getElementById('benchmark-chart-container');
    if (!dom) return;

    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });

    var option = {
        title: {
            text: '',
            left: 'center',
            top: 'center',
            textStyle: {
                fontSize: 10,
                fontFamily: 'Times New Roman',
                fontWeight: 'bold',
                color: '#000000'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.value) {
                    return params.name + '<br/>Number: ' + params.value;
                }
                return params.name;
            }
        },
        series: [
            {
                type: 'sunburst',
                radius: ['5%', '100%'],
                itemStyle: {
                    borderRadius: 6,
                    borderWidth: 2,
                    borderColor: '#000000'
                },
                label: {
                    rotate: 'radial',
                    fontSize: 14,
                    fontFamily: 'Times New Roman',
                    fontWeight: 'bold',
                    color: '#333'
                },
                emphasis: {
                    focus: 'ancestor'
                },
                levels: [
                    {},
                    {
                        r0: '10%',
                        r: '35%',
                        label: {
                            rotate: 0,
                            fontSize: 24,
                            fontFamily: 'Times New Roman',
                            fontWeight: 'bold',
                            color: '#333',
                            formatter: function (params) {
                                let total = 0;
                                if (params.data.children) {
                                    params.data.children.forEach(child => {
                                        if (child.children) {
                                            child.children.forEach(item => {
                                                total += item.value || 0;
                                            });
                                        }
                                    });
                                }
                                return params.name + '\n(' + total + ')';
                            }
                        },
                        itemStyle: {
                            borderWidth: 1.5
                        }
                    },
                    {
                        r0: '35%',
                        r: '60%',
                        label: {
                            fontSize: 20,
                            fontFamily: 'Times New Roman',
                            fontWeight: 'bold',
                            formatter: function (params) {
                                let total = 0;
                                if (params.data.children) {
                                    params.data.children.forEach(item => {
                                        total += item.value || 0;
                                    });
                                }
                                return params.name + '\n(' + total + ')';
                            }
                        },
                        itemStyle: {
                            borderWidth: 1.2
                        }
                    },
                    {
                        r0: '60%',
                        r: '100%',
                        label: {
                            fontSize: 12,
                            fontFamily: 'Times New Roman',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            padding: 2,
                            position: 'inside',
                            overflow: 'break',
                            width: 160,
                            formatter: function (params) {
                                return params.name + ' (' + params.value + ')';
                            }
                        },
                        itemStyle: {
                            borderWidth: 0.8
                        }
                    }
                ],
                data: [
                    {
                        name: 'Search',
                        itemStyle: { color: '#fdb262' },
                        children: [
                            {
                                name: 'Deep',
                                itemStyle: { color: '#fec281' },
                                children: [
                                    { name: 'Entertainment & Media', value: 8, itemStyle: { color: '#facd9f' } },
                                    { name: 'Finance & Business', value: 2, itemStyle: { color: '#facd9f' } },
                                    { name: 'Technology & Patents', value: 5, itemStyle: { color: '#facd9f' } },
                                    { name: 'News & Current Events', value: 2, itemStyle: { color: '#facd9f' } },
                                    { name: 'Shopping & Products', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Food & Recipes', value: 3, itemStyle: { color: '#facd9f' } },
                                    { name: 'People & Connections', value: 3, itemStyle: { color: '#facd9f' } },
                                    { name: 'Gaming', value: 4, itemStyle: { color: '#facd9f' } },
                                    { name: 'Environment & Geography', value: 2, itemStyle: { color: '#facd9f' } },
                                    { name: 'Scholarships & Funding', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Travel & Transportation', value: 2, itemStyle: { color: '#facd9f' } },
                                    { name: 'Academic Research', value: 6, itemStyle: { color: '#facd9f' } },
                                    { name: 'Fashion & Awards', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Museums & Collections', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Health & Medicine', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Legal & Government', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Education & Learning', value: 2, itemStyle: { color: '#facd9f' } },
                                    { name: 'Career & Jobs', value: 2, itemStyle: { color: '#facd9f' } },
                                    { name: 'Hobbies & DIY', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Architecture & Design', value: 1, itemStyle: { color: '#facd9f' } },
                                    { name: 'Sports & Athletes', value: 3, itemStyle: { color: '#facd9f' } }
                                ]
                            },
                            {
                                name: 'Wide',
                                itemStyle: { color: '#ffd7c4' },
                                children: [
                                    { name: 'Entertainment & Media', value: 1, itemStyle: { color: '#ffe9de' } },
                                    { name: 'Finance & Business', value: 1, itemStyle: { color: '#ffe9de' } },
                                    { name: 'Travel & Transportation', value: 1, itemStyle: { color: '#ffe9de' } },
                                    { name: 'Sports & Athletes', value: 2, itemStyle: { color: '#ffe9de' } },
                                    { name: 'General Reference', value: 4, itemStyle: { color: '#ffe9de' } }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'DS',
                        itemStyle: { color: '#a9b592' },
                        children: [
                            {
                                name: 'FileSystem',
                                itemStyle: { color: '#d3e2b7' },
                                children: [
                                    { name: 'Desktop', value: 3, itemStyle: { color: '#e9f1db' } },
                                    { name: 'Desktop Template', value: 3, itemStyle: { color: '#e9f1db' } },
                                    { name: 'File Context', value: 4, itemStyle: { color: '#e9f1db' } },
                                    { name: 'File Property', value: 2, itemStyle: { color: '#e9f1db' } },
                                    { name: 'Folder Structure', value: 1, itemStyle: { color: '#e9f1db' } },
                                    { name: 'Legal Document', value: 3, itemStyle: { color: '#e9f1db' } },
                                    { name: 'Papers', value: 2, itemStyle: { color: '#e9f1db' } },
                                    { name: 'Student Database', value: 2, itemStyle: { color: '#e9f1db' } },
                                    { name: 'Threestudio', value: 2, itemStyle: { color: '#e9f1db' } },
                                    { name: 'Votenet', value: 2, itemStyle: { color: '#e9f1db' } }
                                ]
                            },
                            {
                                name: 'Postgres',
                                itemStyle: { color: '#d3dc95' },
                                children: [
                                    { name: 'Chinook', value: 3, itemStyle: { color: '#ebf1b1' } },
                                    { name: 'Dvdrental', value: 2, itemStyle: { color: '#ebf1b1' } },
                                    { name: 'Employees', value: 6, itemStyle: { color: '#ebf1b1' } },
                                    { name: 'Lego', value: 2, itemStyle: { color: '#ebf1b1' } },
                                    { name: 'Security', value: 2, itemStyle: { color: '#ebf1b1' } },
                                    { name: 'Sports', value: 2, itemStyle: { color: '#ebf1b1' } },
                                    { name: 'Vectors', value: 1, itemStyle: { color: '#ebf1b1' } }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'GUI',
                        itemStyle: { color: '#c1c2ff' },
                        children: [
                            {
                                name: 'PPT',
                                itemStyle: { color: '#b3d9fd' },
                                children: [
                                    { name: 'Text & Object Formatting', value: 9, itemStyle: { color: '#cde6fe' } },
                                    { name: 'Layout & Design', value: 5, itemStyle: { color: '#cde6fe' } },
                                    { name: 'Media & Tables', value: 3, itemStyle: { color: '#cde6fe' } },
                                    { name: 'Transitions & Features', value: 2, itemStyle: { color: '#cde6fe' } },
                                    { name: 'File Export & Save', value: 2, itemStyle: { color: '#cde6fe' } }
                                ]
                            },
                            {
                                name: 'Word',
                                itemStyle: { color: '#fec9ce' },
                                children: [
                                    { name: 'Text & Paragraph Formatting', value: 8, itemStyle: { color: '#ffe4e7' } },
                                    { name: 'Image Insertion', value: 1, itemStyle: { color: '#ffe4e7' } },
                                    { name: 'Tables', value: 1, itemStyle: { color: '#ffe4e7' } },
                                    { name: 'Page Setup & Numbering', value: 2, itemStyle: { color: '#ffe4e7' } }
                                ]
                            },
                            {
                                name: 'Excel',
                                itemStyle: { color: '#cfcfff' },
                                children: [
                                    { name: 'Formulas & Calculations', value: 6, itemStyle: { color: '#e3e4ff' } },
                                    { name: 'Charts', value: 1, itemStyle: { color: '#e3e4ff' } },
                                    { name: 'Pivot Tables', value: 1, itemStyle: { color: '#e3e4ff' } },
                                    { name: 'Sheet & Layout Management', value: 4, itemStyle: { color: '#e3e4ff' } },
                                    { name: 'Data Transformation & Formatting', value: 5, itemStyle: { color: '#e3e4ff' } },
                                    { name: 'Export & Sharing', value: 2, itemStyle: { color: '#e3e4ff' } }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
});

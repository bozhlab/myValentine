function Couple() {
    this.position = {
        'x': 450,
        'y': 0
    }
    this.svg = [{
            'type': 'path',
            'data': 'M16.073,249.431c-5.673,14.112-7.559,32.146,8.127,47.276c6.725,6.487,13.634,10.739,20.483,13.226l9.798-50.587C10.903,248.109,17.123,249.719,16.073,249.431z'
        }, // w-bag
        {
            'type': 'path',
            'data': 'M125.809,38.384c-22.393,0-40.546,18.153-40.546,40.546c0,22.407,18.151,40.446,40.378,40.541c0.056,0.011,0.112,0.019,0.168,0.031c0.056-0.011,0.112-0.019,0.169-0.031c22.219-0.09,40.377-18.133,40.377-40.541C166.354,56.537,148.202,38.384,125.809,38.384z'
        }, // w-bag-arm
        {
            'type': 'path',
            'data': 'M84.973,216.006l-27.896-7.194c3.902-4.689,24.262-28.023,24.262-28.023c-1.8,14.714-1.579,12.907-2.54,20.762 l8.543,2.203c6.528-11.021,9.185-22.798,9.817-33.607c1.005-17.171-3.062-31.854-4.789-37.098c0-0.001-0.001-0.002-0.001-0.003 c-5.729,0.161-10.998,1.397-15.792,3.712c-11.56,5.279-19.943,15.154-26.608,23.013c-2.257,2.664-16.037,18.419-40.151,48 c-4.001,4.904-5.228,11.509-3.255,17.521c1.973,6.014,6.874,10.608,13.003,12.188l56.137,14.475 c9.907,2.559,20.047-3.398,22.61-13.34C100.873,228.688,94.9,218.566,84.973,216.006z'
        }, // w-head
        {
            'type': 'path',
            'data': 'M434.913,253.309c-9.147,6.013-20.323,7.6-30.776,4.303l-29.42-9.286v23.652c8.488,3.528,18.422,4.477,29.927,2.881c7.07-0.982,13.597,3.953,14.58,11.024c0.982,7.071-3.955,13.598-11.025,14.58c-4.784,0.664-9.431,0.995-13.927,0.995c-6.874,0-13.401-0.777-19.554-2.306v32.224c23.013,6.164,50.1,0.032,62.728-27.136C446.829,284.05,442.838,266.715,434.913,253.309z'
        }, // m-bag
        {
            'type': 'path',
            'data': 'M359.029,489.337c0-10.055,0-189.722,0-196.158c-10.883-5.759-20.164-14.485-27.593-26.087 c-6.123-9.561-8.283-23.241-8.627-36.485c-13.399-8.612-19.952-25.409-14.927-41.327c3.841-12.169,13.52-20.867,24.974-24.008 l0.08-0.298l10.087-37.772h-84.601c-22.507,0-41.235,16.811-44.255,38.535c-0.747,5.372-0.23,4.407-0.729,42.622 c-5.389-17.649-6.854-21.18-12.55-37.568c-7.379-21.231-20.264-37.769-42.922-37.769c-27.293,0-40.549,0-49.881,0 c3.901,11.5,6.063,24.451,5.654,37.127c-0.495,15.373-4.762,28.918-13.312,40.194c8.756,7.453,13.01,19.502,9.946,31.385 c-4.279,16.591-21.195,26.567-37.782,22.292l-5.071-1.308L52.16,342.027c-1.237,6.384,3.685,12.285,10.124,12.285 c3.994,0,8.803,0,14.165,0c0,5.957,0,129.713,0,134.652c0,12.302,9.973,22.275,22.275,22.275s22.275-9.974,22.275-22.275 c0-4.942,0-128.698,0-134.652c3.202,0,6.416,0,9.618,0c0,5.957,0,129.713,0,134.652c0,12.302,9.973,22.275,22.275,22.275 c12.302,0,22.275-9.974,22.275-22.275c0-4.942,0-128.698,0-134.652c5.07,0,8.838,0,14.165,0c6.372,0,11.371-5.849,10.124-12.285 C170.94,194.797,174.088,211.95,173.09,203.793c11.066,31.327,29.986,82.029,39.993,107.757 c5.142,11.952,8.692,17.797,18.739,17.848c0.032,0,0.065,0,0.097,0c10.386,0,18.832-8.393,18.884-18.792l0.698-138.749 c0-0.001,0-0.001,0-0.002c0.011-2.066,1.692-3.733,3.758-3.727c2.066,0.006,3.736,1.682,3.736,3.748l0.009,317.46 c0,12.516,10.146,22.663,22.663,22.663c12.516,0,22.663-10.146,22.663-22.663V308.189h9.786v181.149 c0,12.516,10.146,22.663,22.663,22.663c12.516,0,22.663-10.146,22.663-22.663H359.029z'
        }, // m-body
        {
            'type': 'path',
            'data': 'M349.428,240.343c0.692,5.362,1.899,9.876,3.777,12.81c1.801,2.812,3.752,5.325,5.825,7.604v-17.383L349.428,240.343z'
        }, // m-finger
        {
            'type': 'circle',
            'centerX': 309.214,
            'centerY': 75.582,
            'radius': 39.146
        }, // m-head
        {
            'type': 'path',
            'data': 'M432.106,215.032c-3.255-6.884-24.44-51.701-27.914-59.049c-6.707-14.191-19.721-24.305-34.726-27.612l-9.785,36.639 c4.51,0.342,8.477,3.13,10.361,7.116l9.431,19.95c-29.421-9.287-22.873-7.22-31.397-9.911 c-10.091-3.188-20.615,2.568-23.694,12.324c-1.046,3.316-1.17,6.707-0.313,10.184c1.525,6.184,6.12,11.454,12.638,13.511 c8.533,2.694,64.1,20.233,72.639,22.929c7.128,2.252,14.959,0.087,19.914-5.593C434.198,229.863,435.314,221.819,432.106,215.032z'
        }, // m-bag-arm
        {
            'type': 'path',
            'color': '#ff1a66',
            'data': 'M435.681,71.861c-6.715,0-12.479,4.033-15.031,9.803c-2.55-5.771-8.316-9.803-15.031-9.803 c-9.077,0-16.435,7.358-16.435,16.435c0,17.814,22.795,35.753,29.581,40.698c1.124,0.819,2.646,0.818,3.77-0.001 c6.788-4.947,29.58-22.884,29.58-40.697C452.115,79.22,444.757,71.861,435.681,71.861z'
        },
        {
            'type': 'path',
            'color': '#e6004c',
            'data': 'M493.067,11.892c-5.433,0-10.096,3.262-12.16,7.93c-2.064-4.668-6.727-7.93-12.16-7.93 c-7.343,0-13.296,5.953-13.296,13.296c0,14.412,18.442,28.925,23.931,32.926c0.909,0.662,2.14,0.661,3.05-0.001 c5.492-4.003,23.93-18.513,23.93-32.925C506.364,17.845,500.411,11.892,493.067,11.892z'
        },
    ];
};
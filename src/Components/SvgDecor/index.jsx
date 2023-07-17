import anime from "animejs";
import React from "react";
import "./index.scss"

const index = () => {
  React.useEffect(()=>{
        anime({
            targets:"#decor path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInSine",
            duration: 6000,
            direction: "alternate",
            loop: true

        })
    },[])
  return (
    <svg
    id="decor"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      width="407.986"
      height="63.999"
      viewBox="0 0 2819.531 442.286"
    >
      
      <path stroke="var(--btnColor1)" strokeWidth={10} fill="none"
        d="M2765.634,101.015 L2765.684,119.718 L2766.358,373.218 L2726.952,373.323 L2616.193,110.045 L2616.608,266.288 L2616.409,279.237 L2619.318,320.664 C2622.477,339.840 2629.586,354.015 2640.650,363.193 L2642.521,365.203 C2621.045,356.439 2610.244,328.170 2610.117,280.405 L2610.278,253.357 L2609.859,95.963 L2597.188,65.784 L2597.629,231.522 C2597.768,284.084 2600.658,318.511 2606.298,334.798 C2611.937,351.090 2625.103,362.947 2645.799,370.373 L2666.156,397.079 L2539.776,397.415 L2536.025,389.656 L2652.845,389.346 L2640.677,373.552 L2532.019,373.841 C2550.960,365.352 2563.521,354.002 2569.702,339.787 C2575.880,325.577 2578.927,301.205 2578.835,266.676 L2578.222,36.484 L2547.125,4.628 L2665.111,4.314 L2632.073,31.737 L2745.652,303.064 L2745.560,268.535 L2648.174,36.298 L2680.746,8.876 L2685.191,14.331 L2656.342,38.578 L2745.519,252.997 L2745.161,118.622 L2745.121,103.372 C2745.032,69.994 2742.757,47.700 2738.297,36.490 C2733.837,25.280 2722.886,14.519 2705.450,4.206 L2811.311,3.925 C2793.620,15.293 2782.222,25.682 2777.117,35.092 C2769.381,49.693 2765.556,71.666 2765.634,101.015 ZM2387.290,401.562 C2360.862,401.632 2336.116,390.669 2313.053,368.669 L2313.049,367.230 C2332.369,384.637 2356.566,393.299 2385.636,393.222 C2424.653,393.118 2456.626,374.905 2481.559,338.583 C2506.489,302.261 2518.880,255.902 2518.730,199.505 C2518.618,157.495 2512.808,120.778 2501.299,89.346 C2489.789,57.918 2473.521,34.461 2452.494,18.979 L2452.486,15.814 C2474.749,28.991 2492.374,51.581 2505.364,83.580 C2518.350,115.584 2524.901,152.586 2525.013,194.596 C2525.177,256.366 2512.602,306.273 2487.287,344.323 C2461.972,382.372 2428.639,401.452 2387.290,401.562 ZM2503.097,195.518 C2503.245,251.340 2492.208,295.875 2469.992,329.118 C2447.772,362.367 2417.853,379.037 2380.236,379.137 C2350.542,379.216 2324.086,367.588 2300.863,344.243 C2266.728,309.805 2249.570,258.731 2249.390,191.014 C2249.236,133.083 2260.772,87.014 2283.999,52.805 C2307.225,18.601 2338.578,1.442 2378.064,1.337 C2415.839,1.236 2446.082,18.807 2468.793,54.040 C2491.505,89.277 2502.940,136.437 2503.097,195.518 ZM2432.792,63.343 C2419.978,38.443 2401.757,26.020 2378.130,26.082 C2325.586,26.222 2299.469,83.265 2299.772,197.210 C2300.053,302.523 2326.075,355.110 2377.840,354.973 C2401.933,354.909 2420.240,340.904 2432.757,312.960 C2445.274,285.016 2451.461,244.189 2451.318,190.476 C2451.157,129.669 2444.981,87.293 2432.792,63.343 ZM2383.094,51.103 C2342.208,51.212 2321.901,100.856 2322.165,200.028 C2322.358,272.538 2335.153,320.557 2360.556,344.084 L2358.465,346.967 C2342.882,333.391 2331.759,315.531 2325.095,293.392 C2318.427,271.254 2315.046,241.293 2314.946,203.500 C2314.662,97.036 2337.215,43.744 2382.607,43.623 C2403.280,43.568 2418.459,52.065 2428.144,69.111 L2424.173,66.244 C2409.223,56.118 2395.528,51.070 2383.094,51.103 ZM2238.749,398.216 L2117.499,398.539 L2111.649,390.785 L2224.971,390.484 L2192.911,347.120 L2192.116,48.446 L2218.379,16.149 L2222.358,21.893 L2198.652,51.018 L2199.432,344.225 L2238.749,398.216 ZM2181.477,344.273 L2210.938,374.695 L2102.280,374.985 L2134.603,341.808 L2133.804,41.695 L2101.297,5.814 L2211.822,5.520 L2180.680,44.736 L2181.477,344.273 ZM2065.202,110.936 L2060.057,105.482 L2060.750,102.891 C2072.146,63.152 2083.189,35.499 2093.873,19.933 L2095.035,18.203 L2099.713,23.946 C2089.032,40.857 2077.834,68.892 2066.127,108.056 L2065.202,110.936 ZM2066.431,47.054 C2061.020,59.347 2056.011,74.705 2051.397,93.132 L2050.934,94.572 L2048.597,92.564 L2047.888,88.826 C2043.319,66.969 2036.867,51.835 2028.530,43.414 C2020.190,34.997 2007.471,30.809 1990.373,30.855 C1983.377,30.873 1976.383,31.279 1969.390,32.062 L1966.592,32.069 L1967.422,343.979 L1995.020,375.270 L1888.459,375.553 L1921.014,341.801 L1920.252,55.499 L1903.696,55.256 C1887.684,55.298 1876.309,59.213 1869.567,67.000 C1862.826,74.787 1858.858,88.465 1857.668,108.035 L1851.605,108.051 C1853.254,85.603 1857.916,69.958 1865.588,61.112 C1873.259,52.270 1885.955,47.822 1903.676,47.774 L1917.668,48.025 L1920.232,48.018 L1920.195,33.919 C1912.264,32.789 1904.721,32.234 1897.572,32.253 C1877.520,32.306 1863.076,37.380 1854.242,47.474 C1845.409,57.569 1840.557,74.608 1839.688,98.587 L1836.890,98.595 C1830.134,71.952 1819.719,42.243 1805.641,9.478 L1804.234,6.604 L2084.975,5.857 C2083.585,9.125 2082.658,11.330 2082.195,12.483 L2066.431,47.054 ZM1768.889,218.477 L1749.996,216.513 C1741.443,215.578 1735.223,215.113 1731.339,215.124 C1730.716,215.125 1729.160,215.228 1726.676,215.424 L1765.955,342.789 L1818.104,399.336 L1683.096,399.695 L1678.645,391.938 L1802.460,391.608 L1760.367,345.969 L1718.502,210.554 C1723.780,208.813 1729.840,207.934 1736.683,207.916 C1745.077,207.893 1754.406,208.732 1764.670,210.431 L1761.855,204.108 C1751.845,181.502 1745.105,161.090 1741.639,142.873 L1748.882,148.321 C1752.346,165.576 1760.960,189.247 1774.720,219.324 C1771.298,218.758 1769.355,218.475 1768.889,218.477 ZM1737.342,192.664 C1722.571,192.703 1711.777,195.609 1704.953,201.382 L1747.534,342.550 L1782.599,375.835 L1664.846,376.148 L1696.935,342.685 L1670.829,258.734 C1653.784,280.072 1640.704,300.348 1631.584,319.552 L1626.217,317.840 C1635.337,299.018 1648.962,277.976 1667.088,254.715 L1668.945,251.833 L1664.481,239.184 C1646.031,258.224 1630.780,280.326 1618.722,305.487 L1614.503,297.153 C1606.376,281.255 1595.992,263.155 1583.346,242.853 L1581.005,239.406 C1569.121,272.240 1563.209,298.922 1563.264,319.446 C1563.296,331.531 1564.992,341.741 1568.358,350.077 C1571.722,358.412 1579.803,372.346 1592.603,391.879 C1593.694,393.602 1595.413,396.286 1597.755,399.922 L1471.841,400.257 L1467.157,392.500 L1585.842,392.184 L1581.862,386.152 C1571.562,370.835 1564.804,358.912 1561.597,350.382 C1558.387,341.858 1556.768,331.836 1556.737,320.326 C1556.685,300.760 1563.056,271.587 1575.858,232.802 L1565.563,219.593 C1563.557,225.740 1561.016,234.761 1557.940,246.661 L1550.324,276.031 C1546.168,291.774 1544.104,304.822 1544.132,315.181 C1544.161,325.926 1545.660,334.842 1548.633,341.929 C1551.603,349.020 1557.848,358.692 1567.365,370.941 C1568.300,372.089 1569.704,373.911 1571.576,376.397 L1454.990,376.707 C1477.180,362.454 1494.734,343.322 1507.651,319.306 C1520.565,295.295 1533.331,258.236 1545.946,208.136 L1546.868,204.105 C1538.604,195.494 1526.698,190.252 1511.150,188.374 C1519.655,172.624 1526.221,156.206 1530.839,139.118 C1533.021,141.607 1534.347,143.137 1534.815,143.711 L1545.340,155.768 C1548.925,159.980 1553.211,164.285 1558.199,168.682 L1562.363,156.011 L1559.557,153.141 C1551.759,144.722 1545.212,137.928 1539.916,132.763 L1537.812,130.755 L1541.526,124.414 C1549.781,131.109 1557.730,138.857 1565.372,147.658 L1596.797,39.959 L1571.993,7.222 L1679.486,6.936 L1655.327,40.954 L1693.901,166.307 L1703.211,159.952 L1668.400,46.674 L1693.023,11.504 L1699.093,14.653 L1675.633,48.381 L1708.562,155.622 C1710.423,153.890 1711.506,152.835 1711.818,152.448 L1719.492,144.370 C1724.143,139.754 1727.085,136.487 1728.326,134.564 C1732.425,156.421 1738.696,175.971 1747.136,193.213 C1742.625,192.843 1739.360,192.658 1737.342,192.664 ZM1611.556,66.104 L1574.803,187.054 C1586.655,201.985 1596.877,216.731 1605.467,231.284 L1616.242,249.671 C1616.396,249.864 1617.179,251.107 1618.584,253.406 C1619.978,251.675 1620.751,250.621 1620.907,250.234 L1624.158,245.334 C1624.623,244.568 1625.472,243.316 1626.713,241.587 C1615.776,220.898 1603.058,202.229 1588.557,185.578 L1618.144,88.243 L1611.556,66.104 ZM1622.138,99.454 L1596.711,182.967 C1598.115,184.883 1598.894,186.032 1599.052,186.414 L1608.647,199.624 C1613.795,206.516 1620.353,217.244 1628.320,231.799 L1630.663,236.109 C1637.317,225.732 1645.218,215.452 1654.365,205.257 L1622.138,99.454 ZM1407.047,323.314 C1422.652,346.868 1442.375,368.014 1466.209,386.748 C1430.641,398.546 1397.268,416.470 1366.086,440.534 L1363.992,442.266 L1359.317,437.675 C1388.942,413.615 1420.531,395.888 1454.078,384.478 C1409.210,347.767 1373.844,288.972 1347.980,208.087 L1346.568,203.199 C1394.076,180.822 1417.769,146.805 1417.648,101.149 C1417.598,82.351 1411.401,61.844 1399.063,39.622 C1414.809,57.231 1422.721,79.654 1422.793,106.890 C1422.910,151.013 1400.225,184.546 1354.740,207.493 C1364.639,246.987 1382.073,285.592 1407.047,323.314 ZM1383.050,155.768 C1369.105,172.975 1350.018,185.449 1325.789,193.183 C1336.611,229.603 1351.279,265.051 1369.792,299.531 C1388.304,334.011 1406.832,360.434 1425.382,378.800 L1421.888,380.248 C1398.750,390.093 1376.092,403.965 1353.912,421.864 L1350.422,424.750 L1349.231,415.546 C1339.084,341.335 1325.003,278.456 1306.991,226.899 L1306.051,224.024 C1295.341,230.194 1280.974,235.124 1262.953,238.814 L1261.088,239.106 L1261.374,346.721 L1302.557,400.707 L1182.006,401.028 L1178.255,393.269 L1289.245,392.974 L1255.317,348.752 L1255.009,232.792 L1259.903,231.916 C1277.618,229.567 1292.450,225.211 1304.405,218.849 C1303.466,216.550 1302.916,215.113 1302.761,214.537 L1300.407,206.199 C1300.249,205.624 1299.856,204.474 1299.232,202.749 C1289.601,206.228 1271.423,210.017 1244.699,214.116 L1242.136,214.699 L1242.477,343.031 L1269.150,377.201 L1166.087,377.475 L1196.309,343.154 L1196.052,246.473 L1194.187,246.766 C1185.176,249.285 1177.023,252.090 1169.726,255.175 L1167.863,256.044 L1165.749,250.294 C1172.579,247.017 1177.936,244.795 1181.820,243.633 L1194.169,239.860 L1196.033,239.280 L1195.993,224.317 C1186.819,224.341 1175.400,226.867 1161.736,231.889 L1159.174,233.047 C1159.477,230.362 1161.016,224.122 1163.788,214.332 C1164.096,213.567 1165.173,209.248 1167.018,201.375 C1167.169,200.799 1167.400,199.935 1167.711,198.783 C1174.707,199.340 1180.148,199.613 1184.035,199.603 C1188.232,199.592 1192.115,199.294 1195.691,198.709 L1195.315,57.141 C1188.149,51.791 1180.752,47.302 1173.127,43.676 L1171.260,42.817 C1208.031,16.441 1247.636,3.193 1290.073,3.081 C1323.027,2.993 1350.215,11.746 1371.638,29.336 C1393.057,46.930 1403.806,69.345 1403.878,96.582 C1403.938,118.837 1396.995,138.566 1383.050,155.768 ZM1333.554,44.544 C1320.146,30.673 1303.263,23.763 1282.900,23.817 C1266.578,23.861 1252.831,27.638 1241.658,35.149 L1242.071,190.241 C1246.578,190.229 1250.850,189.741 1254.891,188.768 L1254.515,47.200 C1263.054,44.300 1273.310,42.834 1285.282,42.802 C1315.595,42.721 1336.223,54.945 1347.171,79.468 C1335.635,67.989 1325.511,60.103 1316.796,55.810 C1308.076,51.517 1297.658,49.387 1285.533,49.419 C1276.049,49.444 1267.735,50.617 1260.593,52.938 L1260.954,188.752 L1263.517,188.170 C1294.121,181.182 1316.827,170.237 1331.634,155.330 C1346.437,140.426 1353.811,121.079 1353.748,97.291 C1353.691,75.998 1346.959,58.419 1333.554,44.544 ZM1002.239,405.247 C975.810,405.317 951.065,394.354 928.002,372.354 L927.998,370.915 C947.318,388.322 971.514,396.984 1000.585,396.907 C1039.601,396.803 1071.574,378.590 1096.508,342.268 C1121.437,305.946 1133.829,259.587 1133.679,203.190 C1133.567,161.180 1127.756,124.463 1116.247,93.031 C1104.738,61.603 1088.470,38.146 1067.443,22.664 L1067.435,19.499 C1089.698,32.676 1107.323,55.266 1120.312,87.265 C1133.299,119.269 1139.850,156.271 1139.961,198.282 C1140.126,260.051 1127.550,309.959 1102.236,348.008 C1076.921,386.057 1043.587,405.137 1002.239,405.247 ZM1118.045,199.203 C1118.194,255.025 1107.156,299.560 1084.940,332.804 C1062.720,366.052 1032.802,382.722 995.184,382.822 C965.491,382.901 939.035,371.273 915.812,347.928 C881.677,313.490 864.519,262.417 864.339,194.699 C864.185,136.769 875.721,90.699 898.947,56.490 C922.174,22.286 953.527,5.127 993.013,5.022 C1030.787,4.921 1061.030,22.492 1083.742,57.725 C1106.454,92.963 1117.888,140.122 1118.045,199.203 ZM1047.741,67.029 C1034.927,42.128 1016.706,29.705 993.079,29.768 C940.535,29.907 914.418,86.950 914.721,200.895 C915.001,306.208 941.024,358.796 992.788,358.658 C1016.882,358.594 1035.189,344.590 1047.706,316.645 C1060.223,288.701 1066.410,247.874 1066.267,194.161 C1066.105,133.354 1059.930,90.978 1047.741,67.029 ZM998.042,54.788 C957.157,54.897 936.849,104.541 937.113,203.713 C937.306,276.223 950.102,324.242 975.504,347.770 L973.413,350.653 C957.831,337.076 946.708,319.216 940.043,297.077 C933.375,274.939 929.995,244.978 929.894,207.185 C929.611,100.721 952.164,47.429 997.556,47.308 C1018.228,47.253 1033.407,55.750 1043.093,72.796 L1039.121,69.929 C1024.171,59.803 1010.477,54.755 998.042,54.788 ZM803.554,135.010 L797.249,131.286 L799.794,124.086 C807.512,103.923 814.306,87.216 820.180,73.964 L838.726,33.056 L841.044,27.870 L846.417,31.884 L843.867,37.358 C827.017,73.083 813.579,105.634 803.554,135.010 ZM715.527,352.777 L715.535,355.655 C697.178,351.100 682.482,333.731 671.443,303.547 C660.403,273.363 654.822,235.158 654.699,188.926 C654.435,89.755 676.374,40.106 720.524,39.988 C735.447,39.949 749.226,48.068 761.861,64.336 L761.871,68.077 C747.687,54.114 734.301,47.145 721.709,47.179 C681.447,47.286 661.443,94.722 661.695,189.483 C661.810,232.644 666.569,268.554 675.973,297.205 C685.376,325.859 698.559,344.384 715.527,352.777 ZM790.674,114.039 L788.593,120.663 L785.556,118.657 C781.901,89.510 773.525,66.418 760.422,49.378 C747.319,32.341 731.517,23.845 713.020,23.895 C693.277,23.947 676.826,34.637 663.672,55.965 C647.107,82.482 638.912,127.391 639.081,190.694 C639.226,245.176 646.994,287.836 662.389,318.678 C677.780,349.524 699.080,364.906 726.285,364.834 C748.047,364.776 765.394,355.765 778.328,337.792 C791.258,319.823 798.924,294.144 801.324,260.759 C801.922,252.701 804.556,248.666 809.220,248.653 C815.282,248.637 818.330,254.865 818.363,267.332 C818.413,285.941 815.043,305.229 808.257,325.195 C793.913,367.437 764.123,388.616 718.887,388.736 C678.468,388.844 646.324,371.427 622.447,336.480 C598.570,301.538 586.552,254.236 586.393,194.575 C586.247,139.522 598.482,93.356 623.100,56.073 C647.717,18.795 678.366,0.104 715.055,0.007 C732.463,-0.040 752.296,5.186 774.556,15.674 C786.230,21.209 795.874,23.962 803.492,23.942 C811.730,23.920 819.107,21.122 825.621,15.538 L829.359,18.118 L826.809,23.592 C812.898,53.747 800.853,83.898 790.674,114.039 ZM313.667,403.338 L309.916,395.579 L565.241,394.900 L573.121,376.751 C550.668,351.301 534.816,324.102 525.569,295.159 L533.040,298.592 C541.652,323.126 556.175,347.640 576.606,372.138 L580.349,376.732 L568.293,402.661 L313.667,403.338 ZM512.024,111.903 L508.044,105.871 C518.377,76.112 531.752,48.835 548.165,24.046 L551.446,30.079 L549.820,32.673 C530.937,64.186 518.339,90.593 512.024,111.903 ZM483.148,126.079 L483.486,253.261 L477.647,249.535 L477.308,122.354 L483.148,126.079 ZM498.929,98.126 C497.362,93.720 496.187,90.463 495.406,88.352 C486.793,65.356 477.584,50.517 467.772,43.826 C457.961,37.140 440.384,33.828 415.048,33.895 C403.390,33.926 389.401,34.445 373.081,35.446 L373.433,167.806 L388.356,167.766 L388.045,50.656 C399.853,49.285 411.123,48.581 421.849,48.552 C441.589,48.499 456.133,51.050 465.474,56.205 C474.814,61.359 483.155,71.408 490.504,86.351 C488.320,84.442 486.764,83.007 485.829,82.048 C473.205,69.807 464.091,62.539 458.489,60.252 C452.887,57.965 441.844,56.843 425.369,56.887 C420.392,56.900 411.533,57.311 398.791,58.109 L393.895,58.410 L394.186,167.751 L437.090,167.637 L467.033,116.627 L467.363,240.643 L437.156,192.670 L373.500,192.840 L373.929,354.262 L388.852,354.222 L388.459,206.324 L439.057,206.189 L445.140,213.654 L394.308,213.789 L394.682,354.207 C426.393,354.122 448.924,351.284 462.280,345.682 C475.632,340.085 486.096,329.123 493.671,312.796 L505.960,286.579 C506.423,285.427 507.350,283.316 508.741,280.241 C512.837,301.334 517.896,318.199 523.915,330.843 C529.931,343.488 539.880,358.235 553.763,375.076 L292.375,375.772 L327.729,342.300 L327.387,213.967 C314.335,215.922 302.533,220.939 291.985,229.024 L288.704,222.990 C298.162,214.526 311.052,209.025 327.367,206.486 L327.331,192.962 C324.685,192.587 322.819,192.399 321.734,192.402 C305.878,192.444 291.440,199.676 278.421,214.098 C285.487,183.389 301.769,167.997 327.265,167.929 L326.938,45.064 L291.404,10.629 L540.200,9.967 L536.484,15.444 C520.692,39.468 508.173,67.026 498.929,98.126 ZM96.350,403.917 L14.506,404.134 L10.987,396.375 L96.329,396.148 C138.300,396.036 170.146,388.758 191.873,374.313 C238.579,343.499 261.818,284.063 261.584,196.015 C261.427,137.127 250.818,93.418 229.756,64.889 L220.396,52.253 C220.082,51.872 219.145,50.530 217.587,48.232 C250.609,73.659 267.218,122.437 267.410,194.561 C267.611,270.335 251.438,326.200 218.889,362.156 C193.932,389.845 153.087,403.766 96.350,403.917 ZM204.611,341.764 C191.900,355.803 177.663,365.718 161.902,371.515 C146.138,377.312 125.200,380.245 99.085,380.314 L-0.014,380.578 L31.850,350.280 L31.037,44.412 L5.999,11.389 L97.869,11.144 C142.792,11.025 176.087,21.583 197.753,42.818 C230.014,74.195 246.235,123.450 246.413,190.588 C246.598,260.221 232.662,310.613 204.611,341.764 ZM194.880,189.862 C194.707,124.833 182.383,80.459 157.917,56.736 C143.108,42.388 119.695,35.257 87.674,35.342 L76.715,35.371 L77.574,358.216 L90.398,358.181 L89.590,54.328 C97.667,52.773 105.050,51.985 111.735,51.967 C124.480,51.933 134.551,53.489 141.944,56.634 C149.334,59.780 156.774,65.564 164.258,73.983 C147.754,64.437 130.097,59.687 111.290,59.737 C107.246,59.748 101.964,60.148 95.437,60.930 L96.228,358.166 C113.636,358.120 126.845,356.313 135.853,352.737 C144.857,349.166 153.390,342.287 161.448,332.096 C183.910,303.837 195.057,256.429 194.880,189.862 ZM726.156,403.967 C756.935,403.885 782.005,391.639 801.374,367.224 C810.822,355.307 817.782,341.958 822.253,327.172 C826.721,312.391 829.700,292.817 831.191,268.449 L831.640,261.830 L838.412,265.552 C836.050,313.135 825.380,349.369 806.406,374.260 C787.428,399.155 760.840,411.644 726.643,411.735 C700.681,411.804 676.485,401.991 654.047,382.291 L654.041,379.989 C673.980,396.049 698.019,404.042 726.156,403.967 ZM1979.089,347.114 L1978.291,47.288 L1990.882,46.967 C2005.958,46.927 2016.651,48.387 2022.955,51.342 C2029.259,54.301 2034.131,60.187 2037.575,68.999 C2025.578,59.441 2011.575,54.681 1995.566,54.724 C1991.988,54.733 1988.258,55.031 1984.376,55.617 L1986.078,344.793 L2023.296,398.790 L1904.145,399.107 L1898.761,391.352 L2010.451,391.055 L1979.089,347.114 ZM2778.464,102.995 C2778.392,75.948 2781.176,57.093 2786.824,46.432 C2792.469,35.770 2803.369,28.692 2819.529,25.196 L2815.355,33.839 C2803.392,37.324 2795.288,43.725 2791.039,53.039 C2786.786,62.357 2784.693,78.044 2784.752,100.101 L2785.541,396.762 L2735.409,396.895 L2732.357,389.134 L2779.225,389.009 L2778.464,102.995 Z"
        className="cls-1"
      />
    </svg>
  );
};

export default index;

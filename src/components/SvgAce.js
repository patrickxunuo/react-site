import React, { useEffect, useState } from 'react'
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";

export const SvgAce = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    const [offsetY, setOffSetY] = useState(0)
    const handleScroll = () => setOffSetY(window.pageYOffset)

     
    useEffect(() => {
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    },[])

    return (
        <div className="svg-container" style={{textAlign:"end"}}>
            <svg layout version="1.0" xmlns="http://www.w3.org/2000/svg" 
            scaleX="-1"
            style={{minWidth:"400px", width:"40%", height:"40%", transform:`translateY(${offsetY * 0.1}px)`}}
            viewBox="0 0 450.000000 400.000000" preserveAspectRatio="xMidYMid meet">
                <motion.g transform="translate(0.000000,383.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3030 2800 c-33 -8 -90 -62 -90 -85 0 -5 -30 -25 -66 -44 -137 -71
-230 -193 -255 -337 -19 -111 11 -165 121 -215 62 -28 65 -51 10 -79 -58 -30
-68 -28 -209 40 -22 10 -35 35 -27 55 6 16 8 16 31 1 27 -18 32 -8 15 25 -8
14 -21 19 -54 19 -59 0 -91 33 -83 86 6 34 5 36 -8 17 -31 -44 -28 -67 14
-123 23 -30 41 -57 41 -60 0 -20 -44 -71 -65 -76 -59 -15 -112 43 -82 89 16
24 15 25 -28 48 l-43 23 -35 -27 c-59 -45 -107 -32 -107 27 0 44 13 58 46 54
21 -2 29 -8 29 -23 0 -13 -6 -20 -17 -19 -22 2 -23 -9 -4 -25 17 -14 50 -1 60
24 8 22 -11 59 -40 76 -23 14 -29 13 -70 -5 -53 -25 -61 -46 -44 -115 10 -43
9 -53 -5 -75 -17 -26 -17 -26 8 -26 14 0 29 5 32 10 8 13 76 13 109 0 20 -7
26 -17 26 -39 0 -49 -28 -73 -88 -74 -48 -2 -54 1 -70 26 -14 22 -15 31 -4 47
10 17 10 20 -2 20 -36 0 -61 -61 -35 -87 18 -18 4 -40 -41 -63 -32 -17 -40
-18 -40 -6 0 8 7 19 16 24 24 14 -1 25 -25 12 -11 -6 -18 -17 -15 -24 3 -8 0
-24 -6 -36 -10 -19 -18 -22 -52 -17 -49 7 -59 20 -46 59 13 37 4 58 -24 58
-29 0 -68 -26 -68 -46 0 -11 4 -12 19 -4 33 17 36 12 36 -50 1 -33 -4 -60 -9
-60 -5 0 -28 -9 -51 -20 -42 -20 -67 -22 -231 -20 -60 1 -106 -4 -138 -15 -55
-19 -86 -14 -66 10 10 13 9 15 -9 15 -14 0 -25 -9 -31 -24 -10 -27 -30 -40
-75 -49 -16 -4 -24 -4 -17 -1 6 3 12 10 12 16 0 17 -79 2 -103 -19 -34 -29
-65 -43 -91 -43 -14 0 -27 -4 -30 -9 -4 -6 -133 -7 -156 0 -3 1 -42 2 -87 3
-75 1 -85 4 -127 34 -58 40 -109 42 -183 7 -40 -18 -73 -25 -134 -26 -44 -2
-82 -6 -84 -10 -3 -3 6 -22 18 -40 20 -30 28 -34 72 -36 49 -1 49 -1 10 6 -48
8 -61 16 -76 42 -10 19 -7 20 68 18 59 -1 91 4 128 19 87 35 108 35 166 -1 46
-28 61 -32 118 -31 81 1 79 5 80 -170 1 -111 -1 -127 -14 -116 -18 15 -37 9
-142 -50 -74 -42 -97 -50 -140 -50 -49 0 -53 2 -96 50 l-46 51 -146 -56 c-80
-30 -148 -55 -151 -55 -3 0 -4 10 -2 21 2 17 43 42 178 110 240 122 218 119
-44 -5 -107 -51 -158 -64 -141 -36 8 13 149 108 265 178 47 29 105 70 130 93
49 44 37 42 -21 -3 -24 -19 -42 -27 -55 -22 -14 4 -15 3 -6 -4 11 -7 -10 -22
-80 -59 -51 -27 -128 -75 -170 -107 l-77 -58 2 -55 c2 -37 8 -59 17 -65 10 -6
56 5 143 36 71 25 134 46 141 46 8 0 33 -19 56 -42 40 -41 46 -43 100 -43 51
1 66 6 153 58 52 31 102 57 110 57 8 0 22 -9 32 -20 24 -27 32 -25 49 9 20 38
35 40 331 50 181 6 251 12 285 24 28 11 34 15 15 11 -16 -3 -120 -7 -230 -9
-110 -3 -213 -7 -230 -10 l-30 -5 0 93 c-1 50 -4 104 -8 120 -7 26 -6 27 29
27 61 0 224 38 342 79 l111 39 -6 -43 c-5 -37 16 -174 33 -219 4 -11 -13 -15
-83 -21 -48 -3 -119 -10 -158 -15 -59 -8 -51 -8 55 -5 69 3 141 7 160 11 32 5
36 3 46 -25 l12 -30 93 6 c58 4 113 13 144 26 28 11 68 24 90 29 21 5 46 14
54 21 9 8 58 13 135 13 124 2 221 18 317 53 96 34 105 34 142 1 31 -27 35 -37
41 -98 9 -89 40 -214 83 -331 22 -62 41 -143 53 -226 11 -71 25 -157 31 -190
10 -55 8 -72 -22 -205 -18 -80 -40 -154 -49 -165 -10 -11 -20 -29 -24 -39 -10
-28 -15 -17 -26 65 -22 154 -123 230 -177 134 -26 -47 -29 -98 -8 -148 19 -45
19 -115 1 -237 -8 -52 -13 -97 -10 -99 5 -5 3 -9 42 73 57 118 99 178 125 174
17 -2 23 -11 25 -40 3 -33 1 -36 -18 -31 -12 3 -29 -2 -42 -13 -21 -19 -78
-129 -78 -151 0 -24 18 -13 25 14 12 53 60 128 85 131 12 2 27 -2 31 -10 13
-20 11 -31 -6 -25 -21 9 -52 -22 -74 -76 l-20 -47 43 2 c33 1 43 5 39 15 -5
13 13 43 27 43 4 0 10 -13 14 -30 l6 -30 580 0 c420 0 579 3 574 11 -5 8 -1 8
14 0 28 -15 59 -14 65 3 38 98 -6 226 -77 226 -10 0 -36 16 -57 35 -22 19 -43
35 -47 35 -4 0 -21 59 -36 130 -23 103 -27 146 -23 203 10 127 45 330 70 402
13 39 45 151 71 250 45 167 50 182 84 213 20 18 46 32 60 32 14 0 78 -18 144
-40 136 -46 250 -66 458 -79 109 -7 158 -14 200 -31 117 -47 157 -52 410 -60
219 -6 251 -9 305 -30 33 -12 76 -23 95 -24 39 -3 214 -62 244 -82 30 -20 111
2 159 44 30 27 18 35 -13 8 -17 -14 -49 -30 -71 -36 -36 -10 -50 -7 -159 35
-66 25 -135 45 -155 45 -20 0 -48 6 -63 14 -55 28 -149 39 -352 41 -215 2
-267 10 -411 63 -34 13 -93 23 -150 27 -205 12 -247 16 -319 31 -41 8 -130 34
-197 56 l-122 42 -40 -19 c-55 -24 -73 -58 -111 -195 -44 -163 -110 -362 -126
-380 -25 -29 -185 -283 -180 -287 4 -4 85 116 151 224 22 35 34 48 31 33 -21
-101 -48 -293 -47 -342 0 -58 0 -58 -22 -43 -12 8 -37 15 -57 14 -29 0 -31 -2
-15 -9 11 -5 32 -9 46 -9 36 -1 53 -31 73 -125 21 -100 21 -97 -13 -80 -15 8
-64 24 -107 35 -69 19 -109 22 -304 23 -194 1 -242 -2 -347 -21 -66 -13 -126
-23 -131 -23 -5 0 3 53 19 118 33 135 34 168 15 260 -8 37 -22 114 -31 171 -9
58 -30 141 -47 185 -60 164 -77 226 -91 327 -13 95 -17 105 -47 132 -28 24
-39 28 -74 24 -22 -3 -67 -14 -100 -26 -94 -33 -215 -52 -317 -49 l-94 3 2 44
c1 24 -7 87 -17 139 -14 70 -16 99 -8 109 17 21 103 40 258 58 179 20 229 35
302 91 31 24 66 48 78 52 13 5 61 3 109 -3 88 -12 123 -8 166 22 11 7 34 13
52 13 17 0 35 4 38 10 3 5 18 7 33 4 19 -4 32 0 41 10 11 13 15 14 35 1 19
-13 25 -13 41 -1 13 9 27 11 40 6 12 -5 28 -4 35 0 8 5 19 5 26 -1 7 -5 27
-10 45 -10 51 0 94 -5 107 -13 6 -3 24 -5 39 -4 16 1 33 -1 39 -4 5 -4 16 -3
23 1 7 5 43 -2 84 -17 56 -19 102 -27 207 -32 145 -8 186 -20 248 -69 59 -46
149 -81 272 -108 163 -34 350 -82 374 -96 12 -6 73 -14 136 -18 104 -6 135
-13 325 -72 248 -78 407 -107 455 -82 16 8 40 15 53 15 13 0 38 14 56 31 l32
30 139 -2 c77 -2 145 -6 152 -10 22 -14 -72 -48 -132 -50 l-55 -1 34 -15 c55
-23 221 -123 279 -166 49 -37 83 -77 65 -77 -4 0 -68 25 -141 55 -73 30 -150
57 -170 60 -20 3 -30 2 -22 -1 8 -4 47 -19 85 -34 102 -40 265 -122 265 -133
0 -14 -61 0 -123 28 -72 31 -193 68 -209 63 -7 -3 10 -12 37 -21 118 -40 209
-86 223 -114 8 -15 20 -31 26 -35 19 -13 73 -9 86 7 9 11 22 14 46 9 26 -5 35
-2 40 9 3 9 21 25 40 36 40 24 44 41 10 41 -24 0 -43 16 -33 26 3 3 28 5 55 6
57 0 60 4 61 100 1 53 -22 78 -72 78 -26 0 -29 3 -25 25 6 29 -13 48 -87 90
-62 35 -58 31 -50 46 6 8 10 7 17 -5 11 -20 28 -12 28 15 0 26 16 24 45 -6 22
-22 25 -22 25 -5 0 21 -49 60 -75 60 -43 0 -105 -53 -99 -83 2 -12 27 -44 54
-71 68 -66 64 -82 -22 -78 -39 2 -69 -1 -73 -7 -15 -24 -84 -11 -162 31 l-78
43 36 5 c58 10 95 42 96 85 1 32 -4 40 -32 56 -52 31 -55 59 -7 59 21 0 22 2
12 15 -18 21 -57 19 -70 -5 -14 -27 -3 -66 26 -89 13 -10 24 -22 24 -26 0 -5
-56 -5 -124 -1 -134 7 -164 1 -191 -41 -10 -15 -25 -23 -45 -23 -16 0 -41 -5
-55 -12 -32 -14 -160 3 -208 28 -62 32 -68 35 -77 29 -6 -3 -44 10 -85 29 -52
24 -73 39 -69 49 4 11 -17 15 -103 21 -110 7 -143 20 -143 55 -1 16 -77 61
-104 61 -28 0 -26 -19 4 -35 19 -10 30 -23 30 -37 0 -19 -4 -20 -52 -14 -29 4
-63 7 -75 7 -32 -1 -93 27 -93 43 0 7 7 19 15 26 11 9 12 16 5 25 -6 7 -10 17
-9 21 4 21 -2 35 -11 29 -6 -4 -8 -11 -5 -16 21 -32 -54 -90 -92 -71 -10 5
-38 12 -62 16 -24 4 -55 16 -69 26 -13 11 -32 20 -42 20 -9 0 -25 9 -36 21
-26 29 -64 55 -93 64 l-24 7 22 -28 c16 -20 19 -30 10 -33 -19 -6 -100 90 -95
112 3 13 -1 17 -12 15 -23 -4 -27 -44 -8 -73 9 -13 16 -31 16 -40 0 -20 -27
-7 -87 41 -23 19 -47 34 -53 34 -7 0 -10 7 -6 15 3 8 3 29 -1 45 -4 23 -11 30
-28 30 -12 0 -30 9 -40 20 -18 20 -18 21 13 47 32 26 43 65 22 78 -5 3 -10 -3
-10 -13 0 -30 -22 -42 -64 -35 l-39 6 6 -34 c3 -19 9 -47 13 -63 10 -41 -15
-56 -91 -56 -68 0 -90 12 -74 42 7 14 6 18 -5 18 -9 0 -18 -11 -22 -25 -3 -14
-10 -25 -15 -25 -24 0 -79 30 -79 43 0 8 26 27 58 43 35 18 66 43 80 64 21 31
23 44 20 117 -4 71 -10 93 -43 160 -47 92 -126 176 -205 217 -35 18 -61 40
-71 59 -27 54 -59 70 -146 73 -43 2 -94 -1 -113 -6z m216 -54 c45 -45 44 -56
-3 -45 -48 11 -175 11 -233 -1 -25 -4 -47 -7 -48 -5 -9 9 35 66 58 74 14 5 63
10 109 10 82 1 84 0 117 -33z m109 -100 c79 -39 128 -86 182 -177 33 -56 63
-151 63 -202 0 -75 -64 -139 -155 -156 -53 -10 -85 1 -85 30 0 9 -7 22 -15 29
-24 20 -18 40 13 40 20 0 30 7 40 27 16 35 15 50 -2 56 -7 3 -16 24 -20 47
-22 139 -124 208 -292 198 -128 -7 -215 -77 -244 -195 -13 -54 -14 -70 -5
-131 5 -33 3 -44 -9 -48 -21 -8 -20 -24 1 -24 15 0 15 -2 -2 -14 -16 -12 -25
-12 -58 0 -131 46 -165 121 -117 260 59 170 208 288 384 302 142 12 237 -1
321 -42z m-500 -377 c11 -17 -1 -21 -15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z
m535 -8 c0 -24 -18 -37 -32 -23 -8 8 -7 16 2 27 17 21 30 19 30 -4z m-257
-112 c-6 -6 -18 -5 -35 3 -21 11 -23 17 -15 36 l10 22 25 -25 c17 -17 22 -29
15 -36z m185 -1 c8 -10 11 -18 6 -18 -17 0 -34 23 -33 45 0 14 2 16 6 5 3 -8
12 -23 21 -32z m-113 -16 c-6 -7 -35 18 -35 31 0 5 9 2 20 -8 11 -10 18 -20
15 -23z m-306 5 c-22 -22 -39 -25 -39 -9 0 7 37 29 54 31 5 0 -2 -9 -15 -22z
m-1065 -429 c-3 -4 -14 -2 -24 4 -11 7 -15 15 -9 18 5 4 7 15 3 26 -3 10 3 6
14 -10 12 -17 19 -33 16 -38z m-68 -9 c8 -17 14 -35 12 -40 -2 -5 -12 11 -24
35 -22 49 -13 53 12 5z m-229 -24 c-2 -35 -4 -41 -11 -26 -8 18 -2 71 8 71 3
0 4 -20 3 -45z m-68 -28 c0 -35 7 -85 15 -112 9 -27 14 -51 12 -53 -5 -4 -32
80 -41 126 -6 30 1 102 9 102 2 0 4 -28 5 -63z m241 -14 c-59 -22 -89 -29 -84
-21 9 14 45 27 74 27 15 -1 19 -3 10 -6z m157 -85 c-2 -18 -4 -4 -4 32 0 36 2
50 4 33 2 -18 2 -48 0 -65z m-1077 72 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10
-3 6 -1 10 4 10 6 0 11 -4 11 -10z m126 2 c6 -4 15 -25 18 -48 l7 -41 -30 5
c-18 2 -41 -2 -55 -11 l-24 -16 -5 52 c-5 58 1 67 48 67 17 0 35 -4 41 -8z
m-116 -62 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4
10 -10z m130 -50 c24 -24 26 -57 3 -82 -33 -36 -83 -11 -83 42 0 31 22 60 46
60 8 0 23 -9 34 -20z m822 -21 c-18 -16 -37 -29 -42 -29 -5 0 7 15 28 34 20
19 39 32 42 29 3 -2 -10 -18 -28 -34z m-942 -25 c0 -8 -4 -14 -10 -14 -5 0
-10 9 -10 21 0 11 5 17 10 14 6 -3 10 -13 10 -21z m5511 -40 c17 -15 17 -19 3
-46 -16 -30 -49 -36 -49 -8 0 8 -4 21 -9 28 -22 35 22 56 55 26z m-5455 -15
c3 -6 22 -9 41 -7 26 3 33 1 31 -11 -2 -11 -17 -17 -44 -19 -38 -3 -42 -1 -46
22 -5 26 5 35 18 15z m-26 -30 c0 -10 -4 -19 -10 -19 -5 0 -10 12 -10 26 0 14
4 23 10 19 6 -3 10 -15 10 -26z m-30 -4 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10
15 0 8 5 15 10 15 6 0 10 -7 10 -15z m1668 -898 c31 -33 51 -88 59 -159 5 -55
4 -61 -10 -55 -27 10 -46 -2 -73 -50 -15 -24 -29 -41 -32 -38 -3 3 0 11 6 17
16 16 16 144 0 154 -6 4 -16 0 -23 -9 -11 -15 -13 -15 -22 6 -10 22 5 95 28
140 13 24 41 21 67 -6z m-104 -51 c-3 -15 -8 -25 -11 -23 -2 3 -1 17 3 31 3
15 8 25 11 23 2 -3 1 -17 -3 -31z m734 -193 l-3 -108 -35 -2 c-19 -1 -65 -4
-102 -8 -51 -4 -68 -2 -69 7 -3 31 2 185 7 201 5 15 19 17 105 17 l100 0 -3
-107z m189 91 c46 -7 45 -3 56 -174 l2 -35 -70 4 c-38 2 -83 4 -100 5 l-30 1
-3 107 -3 107 58 -5 c32 -3 72 -7 90 -10z m-425 -90 c-2 -49 -8 -97 -13 -106
-10 -18 -43 -26 -124 -30 l-50 -3 2 35 c1 19 5 64 10 99 l8 65 75 17 c41 9 80
15 85 14 6 -1 9 -37 7 -91z m588 65 l69 -12 16 -46 c8 -25 18 -69 22 -99 l6
-53 -59 7 c-123 13 -128 16 -136 59 -3 22 -9 66 -13 98 -7 66 -12 63 95 46z
m-781 -31 c0 -7 -6 -49 -13 -93 -8 -44 -12 -83 -9 -88 2 -4 -7 -7 -21 -7 -24
0 -26 3 -26 44 0 25 5 46 12 48 7 3 8 10 4 17 -7 11 -10 11 -17 0 -6 -10 -9
-6 -9 13 0 14 -3 33 -6 42 -4 11 4 18 28 25 46 13 58 13 57 -1z m969 -20 c25
-21 52 -90 52 -137 0 -43 0 -43 -31 -37 -17 3 -40 6 -50 6 -15 0 -19 8 -19 38
0 22 -7 61 -15 88 -21 70 -20 74 16 64 17 -5 38 -15 47 -22z m-1054 -83 c3
-33 2 -73 -3 -90 l-9 -30 -3 30 c-1 17 -3 47 -5 68 -1 21 -5 49 -8 63 -8 29 3
54 14 33 4 -8 10 -41 14 -74z m1207 -15 c6 -20 9 -47 7 -60 -3 -18 -7 -10 -16
30 -7 30 -20 66 -29 80 l-16 25 22 -19 c11 -11 26 -36 32 -56z m-34 -11 c14
-53 16 -119 5 -119 -29 0 -62 93 -62 174 0 35 44 -7 57 -55z m-1376 -32 c-10
-9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z" className="svg-elem-1"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M880 1495 c0 -6 4 -16 9 -24 8 -12 14 -12 33 -4 22 11 22 12 3 12
-12 1 -26 6 -33 13 -7 7 -12 8 -12 3z" className="svg-elem-2"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M2430 485 c0 -3 7 -16 14 -28 8 -12 18 -53 22 -92 4 -38 11 -77 16
-85 15 -25 -2 140 -17 171 -14 26 -35 47 -35 34z" className="svg-elem-3"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3008 283 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" className="svg-elem-4"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3001 260 c-7 -4 -11 -18 -9 -31 5 -35 42 -33 46 2 3 28 -16 43 -37
29z" className="svg-elem-5"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3234 235 c-7 -18 3 -35 21 -35 15 0 28 27 19 41 -8 14 -34 11 -40
-6z" className="svg-elem-6"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M2764 225 c-8 -21 14 -45 33 -38 12 5 14 3 8 -7 -5 -8 -4 -11 2 -7 5
3 8 20 5 37 -3 21 -10 30 -23 30 -11 0 -22 -7 -25 -15z" className="svg-elem-7"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3454 215 c-4 -9 -2 -21 4 -27 15 -15 44 -1 40 19 -4 23 -36 29 -44
8z" className="svg-elem-8"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3645 190 c-7 -12 2 -30 16 -30 5 0 9 9 9 20 0 21 -15 27 -25 10z" className="svg-elem-9"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3751 2291 c-18 -33 -13 -43 14 -25 24 16 25 15 34 -7 8 -22 10 -23
17 -5 16 42 -44 77 -65 37z" className="svg-elem-10"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M1735 2047 c-34 -19 -40 -27 -40 -56 0 -19 6 -36 13 -38 7 -3 12 4
12 18 0 13 14 38 32 56 17 18 30 35 27 37 -3 3 -22 -5 -44 -17z" className="svg-elem-11"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3123 1965 c5 -45 4 -46 -14 -29 -18 16 -21 17 -36 1 -16 -15 -15
-20 5 -60 13 -26 22 -63 22 -90 l0 -45 -52 -7 c-75 -10 -102 -29 -134 -97 -33
-70 -36 -132 -10 -222 10 -32 15 -61 11 -64 -7 -8 -102 94 -110 119 -4 10 -11
19 -17 19 -11 0 -6 -80 8 -126 5 -19 1 -22 -38 -26 -23 -3 -47 -1 -52 3 -6 5
-21 9 -34 9 -22 0 -24 -3 -18 -32 9 -45 9 -51 5 -68 -6 -23 37 -24 60 -1 16
16 34 21 75 21 45 0 63 -6 109 -36 53 -34 55 -38 67 -97 32 -165 29 -159 59
-152 14 3 33 8 42 11 14 4 17 -11 22 -102 5 -92 4 -111 -13 -141 -26 -48 -7
-86 27 -52 8 8 16 7 30 -2 30 -18 57 -4 47 24 -4 12 -9 79 -11 150 -5 141 -5
141 61 113 32 -13 34 -13 34 8 0 37 43 206 52 206 5 0 25 14 43 30 30 26 42
30 93 30 45 0 63 -5 80 -21 31 -29 59 -19 50 17 -4 15 -2 32 5 40 9 11 9 17 0
28 -10 11 -28 13 -82 9 -38 -3 -69 -4 -69 -1 0 3 4 18 10 34 13 42 19 94 11
94 -5 0 -21 -20 -36 -44 -22 -35 -85 -97 -85 -84 0 2 7 28 15 58 22 83 19 184
-6 238 -24 49 -89 97 -146 108 l-33 6 0 63 c0 43 5 66 15 75 30 25 5 80 -30
66 -12 -4 -15 2 -15 29 0 19 -5 35 -11 35 -8 0 -10 -15 -6 -45z m-89 -510 c20
-9 34 -20 31 -25 -10 -16 -57 -12 -77 7 -38 34 -15 43 46 18z m266 6 c0 -18
-30 -32 -62 -29 -41 4 -43 21 -3 29 45 10 65 10 65 0z m-397 -123 c66 -44 156
-68 258 -68 116 0 181 24 239 87 40 43 42 44 36 17 -11 -47 -59 -117 -96 -140
-19 -12 -46 -32 -59 -44 -19 -18 -25 -19 -32 -8 -7 10 -9 9 -9 -4 0 -10 -9
-22 -20 -28 -17 -9 -20 -8 -20 10 0 11 -4 20 -10 20 -5 0 -10 -13 -10 -29 0
-20 -6 -30 -19 -34 -25 -6 -36 39 -12 53 13 8 11 9 -9 10 -24 0 -26 -3 -22
-34 4 -31 2 -34 -17 -29 -16 4 -21 13 -21 39 0 19 -4 34 -10 34 -5 0 -10 -11
-10 -25 0 -14 -3 -25 -7 -25 -19 1 -38 21 -38 41 0 12 -6 24 -13 26 -8 3 -10
-1 -5 -13 4 -12 3 -15 -5 -10 -7 4 -12 13 -12 20 0 7 -18 21 -39 31 -53 24
-107 81 -126 134 -23 66 -18 78 16 35 16 -21 49 -51 72 -66z m246 -15 c1 -7
-8 -13 -19 -13 -23 0 -25 12 -8 43 11 21 11 21 19 2 4 -11 8 -26 8 -32z" className="svg-elem-12"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M2312 1696 c20 -29 51 -56 90 -76 32 -17 58 -29 58 -26 0 3 -28 24
-62 45 -35 22 -71 54 -80 71 -9 16 -22 30 -27 30 -6 0 3 -20 21 -44z" className="svg-elem-13"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M5946 1681 c-3 -5 1 -11 9 -15 8 -3 15 -15 15 -26 0 -12 5 -18 10
-15 16 10 12 52 -6 59 -20 8 -22 8 -28 -3z" className="svg-elem-14"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3935 1646 c-11 -7 -55 -32 -97 -56 -43 -24 -76 -45 -73 -48 4 -5
158 78 190 102 24 19 8 20 -20 2z" className="svg-elem-15"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M4640 1509 c71 -59 229 -114 355 -123 l70 -5 -55 10 c-138 26 -222
52 -305 93 -49 25 -79 36 -65 25z" className="svg-elem-16"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M2679 1402 c18 -17 42 -33 53 -35 30 -8 6 15 -44 42 l-43 22 34 -29z" className="svg-elem-17"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3540 1390 c-41 -21 -72 -39 -68 -40 16 -1 113 42 136 60 37 30 15
23 -68 -20z" className="svg-elem-18"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M465 1371 c-22 -11 -36 -20 -31 -20 18 -2 86 22 86 31 0 12 -10 10
-55 -11z" className="svg-elem-19"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M438 1288 c8 -8 17 -8 34 0 22 10 21 11 -11 11 -27 1 -32 -2 -23 -11z" className="svg-elem-20"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M5695 1270 c11 -5 29 -9 40 -9 17 -1 17 1 5 9 -8 5 -26 9 -40 9 -23
0 -23 -1 -5 -9z" className="svg-elem-21"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M2690 947 c0 -14 155 -276 158 -267 2 4 -23 52 -54 106 -63 109 -104
173 -104 161z" className="svg-elem-22"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3124 560 c0 -74 1 -105 3 -67 2 37 2 97 0 135 -2 37 -3 6 -3 -68z" className="svg-elem-23"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M2738 572 c-16 -9 -28 -21 -28 -26 0 -4 6 -4 13 2 7 7 29 18 48 26
23 11 28 15 14 15 -11 0 -32 -7 -47 -17z" className="svg-elem-24"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M2890 511 c30 -27 57 -47 60 -45 6 7 -65 70 -95 85 -11 5 5 -13 35
-40z" className="svg-elem-25"> </motion.path>
<motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="red"
                        strokeDasharray="0 1"
                        style={{
                            pathLength
                        }}  d="M3310 474 c-66 -52 -62 -64 4 -14 31 23 56 44 56 46 0 11 -19 0 -60
-32z" className="svg-elem-26"> </motion.path>
                </motion.g>
            </svg>
            <div className="space-block" />
        </div>
    )
}

export default SvgAce
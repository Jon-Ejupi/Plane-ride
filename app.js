
// LEVEL DATA
const createObs = (x, y, type = 'up') => {
    return { 
        x: x, 
        y: y, 
        key: type === 'up' ? 'bufferup' : 'bufferdown' 
    };
};
 const levels = [
    
    {
        // level 1
        speed: 160,
        obstacles: [
            createObs(800, 650),
            createObs(1500, 150, 'down'),
            createObs(2200, 650),
            createObs(3000, 150, 'down'),
            createObs(3800, 650),
            createObs(4500, 150, 'down'),
            createObs(5200, 650),
            createObs(6000, 150, 'down'),
 
        ],
        stars: [
            {x: 600, y: 400}, {x: 1200, y: 300}, {x: 1800, y: 400}, 
            {x: 2500, y: 300}, {x: 3500, y: 400}, {x: 4200, y: 300}, {x: 5000, y: 400}, {x: 5800, y: 300}, {x: 6800, y: 400}
        ]
    },
    
    {
        // level 2
        speed: 200,
        obstacles: [
            createObs(600, 650),
            createObs(1000, 150, 'down'), 
            createObs(1300, 650),
            createObs(1600, 150, 'down'),
            createObs(1900, 650),
            createObs(2200, 150, 'down'),
            createObs(2500, 650),
            createObs(2900, 150, 'down'),
            createObs(3200, 650),
            createObs(3500, 150, 'down'),
            createObs(3700, 650),
            createObs(4000, 150, 'down'),
            createObs(4300, 650),
            createObs(4600, 150, 'down'),
            createObs(4900, 650),
            createObs(5300, 150 , 'down'),
            createObs(5600, 650),
            createObs(5900, 150, 'down'),
            createObs(6200, 650),
            createObs(6500, 150, 'down'),
            createObs(6800, 650),
            createObs(7100, 150, 'down'),
            createObs(7500, 650),
            createObs(8000, 150, 'down'),
        
        ],
        stars: [
            {x: 750, y: 450}, {x: 1100, y: 450}, {x: 1600, y: 450}, 
            {x: 2100, y: 450}, {x: 2800, y: 450}, {x: 3300, y: 450}, {x: 4000, y: 450}, {x: 4700, y: 450},
            {x: 5400, y: 450}, {x: 6100, y: 450}, { x: 6800, y: 450 }, {x: 7900, y: 450}, {x: 8300, y: 450}
        ]
    },
   
    {
        // level 3
        speed: 250,
        obstacles: [
            createObs(800, 700), createObs(800, 100, 'down'), 
            createObs(1500, 600),
            createObs(2000, 150, 'down'),
            createObs(2500, 700), createObs(2500, 100, 'down'),
            createObs(3200, 500),
            createObs(3800, 150, 'down'),
            createObs(4500, 700), createObs(4500, 100, 'down'),
            createObs(5200, 600),
            createObs(5800, 150, 'down'),
            createObs(6500, 700), createObs(6500, 100, 'down'),
            createObs(7000, 700),
            createObs(7500, 150, 'down'),
            createObs(8200, 700), createObs(8200, 100, 'down'),
            createObs(8700, 600),
            createObs(9400, 150, 'down'),
            createObs(10100, 700), createObs(10100, 100, 'down'),
            createObs(10800, 500),
            createObs(11500, 150, 'down'),
            createObs(12200, 700), createObs(12200, 100, 'down'),
            createObs(12900, 600),
            createObs(13600, 150, 'down'),
            createObs(14300, 700), createObs(14300, 100, 'down'),
            createObs(15000, 500),
            createObs(15700, 150, 'down'),
            createObs(16400, 700), createObs(16400, 100, 'down'),
            createObs(17800, 150, 'down'),
            createObs(18100, 700),
            createObs(18500, 700), createObs(18500, 100, 'down'),
            createObs(19200, 500),
            createObs(19900, 150, 'down'),
            createObs(20600, 700), createObs(20600, 100, 'down'),
            createObs(21300, 600),
            createObs(22000, 150, 'down'),
            createObs(22700, 700), createObs(22700, 100, 'down'),
            createObs(23400, 500),
            createObs(24100, 150, 'down'),
            createObs(24800, 700), createObs(24800, 100, 'down'),
            createObs(25500, 600),
            createObs(26200, 150, 'down'),
            createObs(26900, 700), createObs(26900, 100, 'down')
         
         
 
 
        ],
        stars: [
            {x: 1100, y: 400}, {x: 1750, y: 350}, {x: 2250, y: 500}, 
            {x: 2800, y: 300}, {x: 3500, y: 400}, {x: 4200, y: 350}, {x: 4700, y: 500}, {x: 5400, y: 300},
            {x: 6100, y: 400}, {x: 6800, y: 350}, {x: 7500, y: 500}, {x: 8200, y: 300}, 
            {x: 8900, y: 400}, {x: 9600, y: 350}, {x: 10300, y: 500}, {x: 11000, y: 300},
            {x: 11700, y: 400}, {x: 12400, y: 350}, {x: 13100, y: 500}, {x: 13800, y: 300},
            {x: 14500, y: 400}, {x: 15200, y: 350}, {x: 15900, y: 500}, {x: 16600, y: 300},
            {x: 17300, y: 400}, {x: 18000, y: 350}, {x: 18700, y: 500},  {x: 19400, y: 300}, {x: 20100, y: 400}, {x: 20800, y: 350}, {x: 21500, y: 500}, {x: 22200, y: 300},
            {x: 22900, y: 400}, {x: 23600, y: 350}, {x: 24300, y: 500}, {x: 25000, y: 300},
            {x: 25700, y: 400}, {x: 26400, y: 350}, {x: 27100, y: 500}
        ]
    },
    
    {
        // level 4
        speed: 320,
        obstacles: [
            createObs(500, 650), createObs(1000, 650), createObs(1500, 650),
            createObs(2000, 150, 'down'), createObs(2500, 150, 'down'),
            createObs(3000, 650), createObs(3500, 150, 'down'),
            createObs(4000, 650), createObs(4500, 150, 'down'),
            createObs(5000, 650), createObs(5500, 150, 'down'),
            createObs(6000, 650), createObs(6500, 150, 'down'),
            createObs(7000, 650), createObs(7500, 150, 'down'),
            createObs(8000, 650), createObs(8500, 150, 'down'),
            createObs(9000, 650), createObs(9500, 150, 'down'),
            createObs(10000, 650), createObs(10500, 150, 'down'),
            createObs(11000, 650), createObs(11500, 150, 'down'),
            createObs(12000, 650), createObs(12500, 150, 'down'),
            createObs(13000, 650), createObs(13500, 150, 'down'),
            createObs(14000, 650), createObs(14500, 150, 'down'),
            createObs(15000, 650), createObs(15500, 150, 'down'),
            createObs(16000, 650), createObs(16500, 150, 'down'),
            
        ],
        stars: [
            {x: 750, y: 300}, {x: 1750, y: 500}, {x: 2750, y: 300}, 
            {x: 3750, y: 500}, {x: 4750, y: 300}, {x: 5750, y: 500}, {x: 6750, y: 300},
            {x: 7750, y: 500}, {x: 8750, y: 300}, {x: 9750, y: 500}, {x: 10750, y: 300},
            {x: 11750, y: 500}, {x: 12750, y: 300}, {x: 13750, y: 500}, {x: 14750, y: 300},
            {x: 15750, y: 500}, {x: 16250, y: 300}
        ]
    }, 
       
     {
        // level 5
        speed: 370,
        obstacles: [
            createObs(600, 650), createObs(600, 150, 'down'),
            createObs(1100, 600), createObs(1100, 200, 'down'),
            createObs(1600, 650), createObs(1600, 150, 'down'),
            createObs(2100, 600), createObs(2100, 200, 'down'),
            createObs(2600, 650), createObs(2600, 150, 'down'),
            createObs(3100, 600), createObs(3100, 200, 'down'),
            createObs(3600, 650), createObs(3600, 150, 'down'),
            createObs(4100, 600), createObs(4100, 200, 'down'),
            createObs(4600, 650), createObs(4600, 150, 'down'),
            createObs(5100, 600), createObs(5100, 200, 'down'),
            createObs(5600, 650), createObs(5600, 150, 'down'),
            createObs(6100, 600), createObs(6100, 200, 'down'),
            createObs(6600, 650), createObs(6600, 150, 'down'),
            createObs(7100, 600), createObs(7100, 200, 'down'),
            createObs(7600, 650), createObs(7600, 150, 'down'),
            createObs(8100, 600), createObs(8100, 200, 'down'),
            createObs(8600, 650), createObs(8600, 150, 'down'),
            createObs(9100, 600), createObs(9100, 200, 'down'),
            createObs(9600, 650), createObs(9600, 150, 'down'),
            createObs(10100, 600), createObs(10100, 200, 'down'),
        ],
        stars: [
            {x: 850, y: 400}, {x: 1350, y: 280}, {x: 1850, y: 500},
            {x: 2350, y: 780}, {x: 2850, y: 400}, {x: 3350, y: 380},
            {x: 3850, y: 250}, {x: 4350, y: 380}, {x: 4850, y: 600},
            {x: 5350, y: 290}, {x: 5850, y: 460}, {x: 6350, y: 680},
            {x: 6850, y: 400}, {x: 7350, y: 380}, {x: 7850, y: 650},
            {x: 8350, y: 380}, {x: 8850, y: 400}, {x: 9350, y: 280},
            {x: 9850, y: 400},
        ]
    },
    
    {
        // level 6
        speed: 400,
        obstacles: [
            createObs(500, 650), createObs(800, 150, 'down'), createObs(1100, 650),
            createObs(1700, 150, 'down'), createObs(2000, 650), createObs(2300, 150, 'down'),
            createObs(3000, 650), createObs(3000, 150, 'down'),
            createObs(3700, 650), createObs(3700, 150, 'down'),
            createObs(4400, 650), createObs(4400, 150, 'down'),
            createObs(4900, 150, 'down'), createObs(5200, 650), createObs(5500, 150, 'down'),
            createObs(6200, 650), createObs(6200, 150, 'down'),
            createObs(7000, 650), createObs(7000, 150, 'down'),
            createObs(7700, 650), createObs(7700, 150, 'down'),
            createObs(8400, 150, 'down'), createObs(8700, 650), createObs(9000, 150, 'down'),
            createObs(9700, 650), createObs(9700, 150, 'down'),
            createObs(10400, 650), createObs(10400, 150, 'down'),
            createObs(11100, 650), createObs(11100, 150, 'down'),
        ],
        stars: [
            {x: 650, y: 300}, {x: 1400, y: 400}, {x: 2600, y: 550},
            {x: 3350, y: 200}, {x: 4150, y: 350}, {x: 5050, y: 700},
            {x: 5900, y: 650}, {x: 6600, y: 250}, {x: 7350, y: 850},
            {x: 8100, y: 600}, {x: 8850, y: 750}, {x: 9500, y: 700},
            {x: 10150, y: 700}, {x: 10850, y: 600},
        ]
    },
    
    {
        // level 7
        speed: 430,
        obstacles: [
            createObs(700, 700), createObs(700, 100, 'down'),
            createObs(1300, 500),
            createObs(1800, 180, 'down'),
            createObs(2300, 700), createObs(2300, 100, 'down'),
            createObs(2900, 480),
            createObs(3400, 160, 'down'),
            createObs(3900, 700), createObs(3900, 100, 'down'),
            createObs(4500, 520),
            createObs(5000, 130, 'down'),
            createObs(5500, 700), createObs(5500, 100, 'down'),
            createObs(6100, 490),
            createObs(6700, 150, 'down'),
            createObs(7200, 700), createObs(7200, 100, 'down'),
            createObs(7800, 500),
            createObs(8400, 140, 'down'),
            createObs(8900, 700), createObs(8900, 100, 'down'),
            createObs(9500, 510),
            createObs(10100, 170, 'down'),
            createObs(10600, 700), createObs(10600, 100, 'down'),
            createObs(11200, 480),
            createObs(11800, 150, 'down'),
            createObs(12300, 700), createObs(12300, 100, 'down'),
        ],
        stars: [
            {x: 1000, y: 400}, {x: 1550, y: 650}, {x: 2050, y: 800},
            {x: 2600, y: 750}, {x: 3150, y: 600}, {x: 3650, y: 450},
            {x: 4200, y: 600}, {x: 4750, y: 350}, {x: 5250, y: 400},
            {x: 5800, y: 350}, {x: 6400, y: 200}, {x: 6950, y: 150},
            {x: 7500, y: 500}, {x: 8150, y: 750}, {x: 8650, y: 650},
            {x: 9200, y: 150}, {x: 9800, y: 300}, {x: 10350, y: 750},
            {x: 10850, y: 200}, {x: 11500, y: 450}, {x: 12050, y: 800},
        ]
},
 
{
   // level 8
    speed: 460,
    obstacles: [
        createObs(400, 650), createObs(750, 150, 'down'),
        createObs(1050, 650), createObs(1350, 150, 'down'),
        createObs(1600, 650), createObs(1900, 150, 'down'),
        createObs(2150, 650), createObs(2450, 150, 'down'),
        createObs(2700, 650), createObs(3000, 150, 'down'),
        createObs(3250, 650), createObs(3550, 150, 'down'),
        createObs(3800, 650), createObs(4100, 150, 'down'),
        createObs(4350, 650), createObs(4650, 150, 'down'),
        createObs(4900, 650), createObs(5200, 150, 'down'),
        createObs(5450, 650), createObs(5750, 150, 'down'),
        createObs(6000, 650), createObs(6300, 150, 'down'),
        createObs(6550, 650), createObs(6850, 150, 'down'),
        createObs(7100, 650), createObs(7400, 150, 'down'),
        createObs(7650, 650), createObs(7950, 150, 'down'),
        createObs(8200, 650), createObs(8500, 150, 'down'),
        createObs(8750, 650), createObs(9050, 150, 'down'),
        createObs(9300, 650), createObs(9600, 150, 'down'),
    ],
    stars: [
         {x: 525, y: 400}, {x: 875, y: 280}, {x: 1225, y: 500},
        {x: 1575, y: 200}, {x: 1925, y: 600}, {x: 2275, y: 680},
        {x: 2625, y: 700}, {x: 2975, y: 180}, {x: 3325, y: 700},
        {x: 3675, y: 280}, {x: 4025, y: 600}, {x: 4375, y: 380},
        {x: 4725, y: 700}, {x: 5075, y: 580}, {x: 5425, y: 400},
        {x: 5775, y: 380}, {x: 6125, y: 400}, {x: 6475, y: 380},
        {x: 6825, y: 660}, {x: 7175, y: 250}, {x: 7525, y: 750},
        {x: 7875, y: 680}, {x: 8225, y: 400}, {x: 8575, y: 300},
        {x: 8925, y: 400}, {x: 9275, y: 380}, {x: 9625, y: 400},
        {x: 9875, y: 180}
    
    ]
},
 
{
    // level 9
    speed: 450,
    obstacles: [
        createObs(600, 700), createObs(1000, 100, 'down'),
        createObs(1000, 700), createObs(1000, 100, 'down'),
        createObs(1400, 650),
        createObs(1800, 150, 'down'),
        createObs(2100, 650),
        createObs(2400, 150, 'down'),
        createObs(2700, 700), createObs(2700, 100, 'down'),
        createObs(3100, 700), createObs(3100, 100, 'down'),
        createObs(3500, 700), createObs(3500, 100, 'down'),
        createObs(3950, 650),
        createObs(4350, 150, 'down'),
        createObs(4650, 650),
        createObs(4950, 150, 'down'),
        createObs(5250, 700), createObs(5250, 100, 'down'),
        createObs(5650, 700), createObs(5650, 100, 'down'),
        createObs(6100, 650),
        createObs(6500, 150, 'down'),
        createObs(6800, 650),
        createObs(7100, 150, 'down'),
        createObs(7400, 700), createObs(7400, 100, 'down'),
        createObs(7800, 700), createObs(7800, 100, 'down'),
        createObs(8200, 700), createObs(8200, 100, 'down'),
        createObs(8700, 650),
        createObs(9100, 150, 'down'),
        createObs(9400, 650),
        createObs(9700, 150, 'down'),
        createObs(10000, 700), createObs(10000, 100, 'down'),
        createObs(10400, 700), createObs(10400, 100, 'down'),
    ],
    stars: [
           {x: 525, y: 400}, {x: 875, y: 280}, {x: 1225, y: 500},
        {x: 1575, y: 200}, {x: 1925, y: 600}, {x: 2275, y: 680},
        {x: 2625, y: 700}, {x: 2975, y: 180}, {x: 3325, y: 700},
        {x: 3675, y: 280}, {x: 4025, y: 600}, {x: 4375, y: 380},
        {x: 4725, y: 700}, {x: 5075, y: 580}, {x: 5425, y: 400},
        {x: 5775, y: 380}, {x: 6125, y: 400}, {x: 6475, y: 380},
        {x: 6825, y: 660}, {x: 7175, y: 250}, {x: 7525, y: 750},
        {x: 7875, y: 680}, {x: 8225, y: 400}, {x: 8575, y: 300},
        {x: 8925, y: 400}, {x: 9275, y: 380}, {x: 9625, y: 400},
        {x: 9975, y: 180}, {x: 10325, y: 400}
    
    ]
},
 
{
    // level 10 
    speed: 520,
    obstacles: [
        createObs(500, 700), createObs(900, 100, 'down'),
        createObs(950, 700), createObs(1100, 100, 'down'),
        createObs(1400, 700), createObs(1400, 100, 'down'),
        createObs(1850, 700), createObs(1850, 100, 'down'),
        createObs(2300, 700), createObs(2300, 100, 'down'),
        createObs(2750, 700), createObs(2750, 100, 'down'),
        createObs(3200, 700), createObs(3200, 100, 'down'),
        createObs(3650, 700), createObs(3650, 100, 'down'),
        createObs(4100, 700), createObs(4100, 100, 'down'),
        createObs(4550, 700), createObs(4550, 100, 'down'),
        createObs(5000, 700), createObs(5000, 100, 'down'),
        createObs(5450, 700), createObs(5450, 100, 'down'),
        createObs(5900, 700), createObs(5900, 100, 'down'),
        createObs(6350, 700), createObs(6350, 100, 'down'),
        createObs(6800, 700), createObs(6800, 100, 'down'),
        createObs(7250, 700), createObs(7250, 100, 'down'),
        createObs(7700, 700), createObs(7700, 100, 'down'),
        createObs(8150, 700), createObs(8150, 100, 'down'),
        createObs(8600, 700), createObs(8600, 100, 'down'),
        createObs(9050, 700), createObs(9050, 100, 'down'),
        createObs(9500, 700), createObs(9500, 100, 'down'),
        createObs(9950, 700), createObs(9950, 100, 'down'),
    ],
    stars: [
        {x: 725, y: 400}, {x: 1175, y: 280}, {x: 1625, y: 600},
        {x: 2075, y: 500}, {x: 2525, y: 700}, {x: 2975, y: 180},
        {x: 3425, y: 650}, {x: 3875, y: 280}, {x: 4325, y: 450},
        {x: 4775, y: 680}, {x: 5225, y: 400}, {x: 5675, y: 300},
        {x: 6125, y: 500}, {x: 6575, y: 180}, {x: 7025, y: 200},
        {x: 7475, y: 380}, {x: 7925, y: 450}, {x: 8375, y: 180},
        {x: 8825, y: 550}, {x: 9275, y: 380}, {x: 9725, y: 400},
    ]
},
 
{
    // level 11
    speed: 550,
    obstacles: [
        createObs(600, 700), createObs(800, 100, 'down'),
        createObs(1000, 550),
        createObs(1300, 180, 'down'),
        createObs(1700, 700), createObs(1700, 100, 'down'),
        createObs(2100, 530),
        createObs(2400, 160, 'down'),
        createObs(2800, 700), createObs(2800, 100, 'down'),
        createObs(3200, 560),
        createObs(3500, 190, 'down'),
        createObs(3900, 700), createObs(3900, 100, 'down'),
        createObs(4300, 540),
        createObs(4600, 170, 'down'),
        createObs(5000, 700), createObs(5000, 100, 'down'),
        createObs(5400, 520),
        createObs(5700, 185, 'down'),
        createObs(6100, 700), createObs(6100, 100, 'down'),
        createObs(6500, 560),
        createObs(6800, 160, 'down'),
        createObs(7200, 700), createObs(7200, 100, 'down'),
        createObs(7600, 530),
        createObs(7900, 175, 'down'),
        createObs(8300, 700), createObs(8300, 100, 'down'),
        createObs(8700, 550),
        createObs(9000, 165, 'down'),
        createObs(9400, 700), createObs(9400, 100, 'down'),
        createObs(9800, 540),
        createObs(10100, 180, 'down'),
        createObs(10500, 700), createObs(10500, 100, 'down'),
    ],
    stars: [
        {x: 800, y: 400}, {x: 1150, y: 380}, {x: 1500, y: 200},
        {x: 1900, y: 580}, {x: 2250, y: 600}, {x: 2600, y: 280},
        {x: 3000, y: 700}, {x: 3350, y: 180}, {x: 3700, y: 550},
        {x: 4100, y: 480}, {x: 4450, y: 200}, {x: 4800, y: 380},
        {x: 5200, y: 600}, {x: 5550, y: 580}, {x: 5900, y: 400},
        {x: 6300, y: 280}, {x: 6650, y: 500}, {x: 7000, y: 780},
        {x: 7400, y: 400}, {x: 7750, y: 380}, {x: 8100, y: 300},
        {x: 8500, y: 280}, {x: 8850, y: 200}, {x: 9200, y: 300},
        {x: 9600, y: 750}, {x: 9950, y: 180}, {x: 10300, y: 450},
    ]
},
 

{
    // level 12
    speed: 620,
    obstacles: [
        createObs(400, 700), createObs(900, 100, 'down'),
        createObs(800, 700), createObs(1180, 100, 'down'),
        createObs(1200, 700),
        createObs(1600, 700), createObs(1600, 100, 'down'),
        createObs(2000, 700), createObs(2000, 100, 'down'),
        createObs(2400, 700), createObs(2400, 100, 'down'),
        createObs(2800, 700), createObs(2800, 100, 'down'),
        createObs(3200, 700), createObs(3200, 100, 'down'),
        createObs(3600, 700), createObs(3600, 100, 'down'),
        createObs(4000, 700), createObs(4000, 100, 'down'),
        createObs(4400, 700), createObs(4400, 100, 'down'),
        createObs(4800, 700), createObs(4800, 100, 'down'),
        createObs(5200, 700), createObs(5200, 100, 'down'),
        createObs(5600, 700), createObs(5600, 100, 'down'),
        createObs(6000, 700), createObs(6000, 100, 'down'),
        createObs(6400, 700), createObs(6400, 100, 'down'),
        createObs(6800, 700), createObs(6800, 100, 'down'),
        createObs(7200, 700), createObs(7200, 100, 'down'),
        createObs(7600, 700), createObs(7600, 100, 'down'),
        createObs(8000, 700), createObs(8000, 100, 'down'),
        createObs(8400, 700), createObs(8400, 100, 'down'),
        createObs(8800, 700), createObs(8800, 100, 'down'),
        createObs(9200, 700), createObs(9200, 100, 'down'),
        createObs(9600, 700), createObs(9600, 100, 'down'),
        createObs(10000, 700), createObs(10000, 100, 'down'),
        createObs(10400, 700), createObs(10400, 100, 'down'),
        createObs(10800, 700), createObs(10800, 100, 'down'),
        createObs(11200, 700), createObs(11200, 100, 'down'),
        createObs(11600, 700), createObs(11600, 100, 'down'),
        createObs(12000, 700), createObs(12000, 100, 'down'),
    ],
    stars: [
        {x: 600, y: 400}, {x: 1000, y: 380}, {x: 1400, y: 700},
        {x: 1800, y: 280}, {x: 2200, y: 500}, {x: 2600, y: 660},
        {x: 3000, y: 700}, {x: 3400, y: 260}, {x: 3800, y: 550},
        {x: 4200, y: 180}, {x: 4600, y: 400}, {x: 5000, y: 580},
        {x: 5400, y: 400}, {x: 5800, y: 380}, {x: 6200, y: 600},
        {x: 6600, y: 260}, {x: 7000, y: 400}, {x: 7400, y: 780},
        {x: 7800, y: 350}, {x: 8200, y: 380}, {x: 8600, y: 450},
        {x: 9000, y: 220}, {x: 9400, y: 480}, {x: 9800, y: 650},
        {x: 10200, y: 300}, {x: 10600, y: 780}, {x: 11000, y: 480},
        {x: 11400, y: 570}, {x: 11800, y: 300},
    ]
},
 
{
    // level 13
    speed: 650,
    obstacles: [
        createObs(350, 700), createObs(850, 100, 'down'),
        createObs(700, 700), createObs(1000, 100, 'down'),
        createObs(1050, 700), 
        createObs(1400, 700), createObs(1400, 100, 'down'),
        createObs(1750, 700), createObs(1750, 100, 'down'),
        createObs(2100, 700), createObs(2100, 100, 'down'),
        createObs(2450, 700), createObs(2450, 100, 'down'),
        createObs(2800, 700), createObs(2800, 100, 'down'),
        createObs(3150, 700), createObs(3150, 100, 'down'),
        createObs(3500, 700), createObs(3500, 100, 'down'),
        createObs(3850, 700), createObs(3850, 100, 'down'),
        createObs(4200, 700), createObs(4200, 100, 'down'),
        createObs(4550, 700), createObs(4550, 100, 'down'),
        createObs(4900, 700), createObs(4900, 100, 'down'),
        createObs(5250, 700), createObs(5250, 100, 'down'),
        createObs(5600, 700), createObs(5600, 100, 'down'),
        createObs(5950, 700), createObs(5950, 100, 'down'),
        createObs(6300, 700), createObs(6300, 100, 'down'),
        createObs(6650, 700), createObs(6650, 100, 'down'),
        createObs(7000, 700), createObs(7000, 100, 'down'),
        createObs(7350, 700), createObs(7350, 100, 'down'),
        createObs(7700, 700), createObs(7700, 100, 'down'),
        createObs(8050, 700), createObs(8050, 100, 'down'),
        createObs(8400, 700), createObs(8400, 100, 'down'),
        createObs(8750, 700), createObs(8750, 100, 'down'),
        createObs(9100, 700), createObs(9100, 100, 'down'),
        createObs(9450, 700), createObs(9450, 100, 'down'),
        createObs(9800, 700), createObs(9800, 100, 'down'),
        createObs(10150, 700), createObs(10150, 100, 'down'),
        createObs(10500, 700), createObs(10500, 100, 'down'),
        createObs(10850, 700), createObs(10850, 100, 'down'),
        createObs(11200, 700), createObs(11200, 100, 'down'),
        createObs(11550, 700), createObs(11550, 100, 'down'),
        createObs(11900, 700), createObs(11900, 100, 'down'),
        createObs(12250, 700), createObs(12250, 100, 'down'),
    ],
    stars: [
        {x: 525, y: 400}, {x: 875, y: 280}, {x: 1225, y: 500},
        {x: 1575, y: 200}, {x: 1925, y: 600}, {x: 2275, y: 680},
        {x: 2625, y: 700}, {x: 2975, y: 180}, {x: 3325, y: 700},
        {x: 3675, y: 280}, {x: 4025, y: 600}, {x: 4375, y: 380},
        {x: 4725, y: 700}, {x: 5075, y: 580}, {x: 5425, y: 400},
        {x: 5775, y: 380}, {x: 6125, y: 400}, {x: 6475, y: 380},
        {x: 6825, y: 660}, {x: 7175, y: 250}, {x: 7525, y: 750},
        {x: 7875, y: 680}, {x: 8225, y: 400}, {x: 8575, y: 300},
        {x: 8925, y: 400}, {x: 9275, y: 380}, {x: 9625, y: 400},
        {x: 9975, y: 180}, {x: 10325, y: 400}, {x: 10675, y: 250},
        {x: 11025, y: 500}, {x: 11375, y: 380}, {x: 11725, y: 190},
        {x: 12075, y: 780},
    ]
},
 
{
   // level 14
    speed: 680,
    obstacles: [
        createObs(300, 700), createObs(850, 100, 'down'),
        createObs(600, 700), createObs(1000, 100, 'down'),
        createObs(900, 700), createObs(1300, 100, 'down'),
        createObs(1300, 650),
        createObs(1600, 150, 'down'),
        createObs(1900, 650),
        createObs(2200, 700), createObs(2200, 100, 'down'),
        createObs(2500, 700), createObs(2500, 100, 'down'),
        createObs(2800, 700), createObs(2800, 100, 'down'),
        createObs(3200, 650),
        createObs(3500, 150, 'down'),
        createObs(3800, 650),
        createObs(4100, 700), createObs(4100, 100, 'down'),
        createObs(4400, 700), createObs(4400, 100, 'down'),
        createObs(4700, 700), createObs(4700, 100, 'down'),
        createObs(5100, 650),
        createObs(5400, 150, 'down'),
        createObs(5700, 650),
        createObs(6000, 700), createObs(6000, 100, 'down'),
        createObs(6300, 700), createObs(6300, 100, 'down'),
        createObs(6600, 700), createObs(6600, 100, 'down'),
        createObs(7000, 650),
        createObs(7300, 150, 'down'),
        createObs(7600, 650),
        createObs(7900, 700), createObs(7900, 100, 'down'),
        createObs(8200, 700), createObs(8200, 100, 'down'),
        createObs(8500, 700), createObs(8500, 100, 'down'),
        createObs(8900, 650),
        createObs(9200, 150, 'down'),
        createObs(9500, 650),
        createObs(9800, 700), createObs(9800, 100, 'down'),
        createObs(10100, 700), createObs(10100, 100, 'down'),
        createObs(10400, 700), createObs(10400, 100, 'down'),
        createObs(10800, 650),
        createObs(11100, 150, 'down'),
        createObs(11400, 650),
        createObs(11700, 700), createObs(11700, 100, 'down'),
        createObs(12000, 700), createObs(12000, 100, 'down'),
        createObs(12300, 700), createObs(12300, 100, 'down'),
        createObs(12700, 650),
        createObs(13000, 150, 'down'),
        createObs(13300, 650),
        createObs(13600, 700), createObs(13600, 100, 'down'),
        createObs(13900, 700), createObs(13900, 100, 'down'),
        createObs(14200, 700), createObs(14200, 100, 'down'),
    ],
    stars: [
        {x: 525, y: 400}, {x: 875, y: 280}, {x: 1225, y: 500},
        {x: 1575, y: 200}, {x: 1925, y: 600}, {x: 2275, y: 680},
        {x: 2625, y: 700}, {x: 2975, y: 180}, {x: 3325, y: 700},
        {x: 3675, y: 280}, {x: 4025, y: 600}, {x: 4375, y: 380},
        {x: 4725, y: 700}, {x: 5075, y: 580}, {x: 5425, y: 400},
        {x: 5775, y: 380}, {x: 6125, y: 400}, {x: 6475, y: 380},
        {x: 6825, y: 660}, {x: 7175, y: 250}, {x: 7525, y: 750},
        {x: 7875, y: 680}, {x: 8225, y: 400}, {x: 8575, y: 300},
        {x: 8925, y: 400}, {x: 9275, y: 380}, {x: 9625, y: 400},
        {x: 9975, y: 180}, {x: 10325, y: 400}, {x: 10675, y: 250},
        {x: 11025, y: 500}, {x: 11375, y: 380}, {x: 11725, y: 190},
        {x: 12075, y: 780},{x: 13150, y: 500}, {x: 13450, y: 480},
        {x: 13750, y: 380}, {x: 14050, y: 400},
    ]
},

{
    // level 15
    speed: 670,
    obstacles: [

        createObs(400, 700), createObs(700, 100, "down"),
        createObs(600, 700), createObs(1000, 100, "down"), 
        createObs(1050, 700), createObs(1300, 100, "down"), 
        createObs(1400, 700), createObs(1550, 100, "down"), 
        createObs(1850, 700), createObs(2050, 100, "down"), 
        createObs(2200, 100, "down"),
        createObs(2550, 700), createObs(2700, 100, "down"),
        createObs(3000, 700), createObs(3150, 150, "down"),
        createObs(3450, 750), createObs(3450, 100, "down"), 
        createObs(3750, 600), createObs(3900, 200, "down"),
        createObs(4100, 600), createObs(4250, 200, "down"),
        createObs(4600, 100, "down"),
        createObs(4900, 100, "down"),
        createObs(5200, 750),
        createObs(5700, 150, "down"),

    ],
    stars: [
        {x: 450, y: 400}, 
        {x: 750, y: 700}, 
        {x: 1050, y: 200},
        {x: 1450, y: 200},
        {x: 2000, y: 600},
        {x: 2200, y: 200},
        {x: 2400, y: 600}, 
        {x: 3400, y: 400}, 
        {x: 3775, y: 500},
        {x: 4075, y: 650},
        {x: 5200, y: 470},
        {x: 5500, y: 300},
        {x: 5700, y: 700}
    ]
 }
]
 

 



// MENU SCENE
class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    preload() {
        this.load.image('background', './PNG/background.png');
    }

    create() {
        // calculate scale factor to fill screen while maintaining aspect ratio
        const { width, height } = this.scale;
        this.add.image(0, 0, 'background').setOrigin(0, 0).setDisplaySize(width, height);

        // Title
        this.add.text(width / 2, height * 0.3, 'PLANE RIDE', {
            fontSize: '80px', fill: '#fff', fontStyle: 'bold'
        }).setOrigin(0.5);

        // Display total stars collected across sessions
        const savedStars = localStorage.getItem('totalstars') || 0;
        this.add.text(width / 2, height * 0.45, `Stars Collected: ${savedStars}`, {
            fontSize: '32px', fill: '#FFD700'
        }).setOrigin(0.5);

        // Start Button
        const startBtn = this.add.text(width / 2, height * 0.7, 'START MISSION', {
            fontSize: '40px', backgroundColor: '#000', padding: { x: 20, y: 10 }, fill: '#0f0'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        
        // Level Button
        const LevelBtn = this.add.text(width / 2, height * 0.8, 'LEVEL SELECT', {
            fontSize: '40px', backgroundColor: '#000', padding: { x: 20, y: 10 }, fill: '#0f0'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

         LevelBtn.on('pointerdown', () => this.scene.start('LevelScene'));
        startBtn.on('pointerdown', () => this.scene.start('GameScene'));
    }
};

// LOADING SCENE 
class LoadingScene extends Phaser.Scene {
    constructor() {
        super('LoadingScene');
    }

    preload() {
        const {width, height}= this.scale;

        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();

        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height - 2, 320, 50);

        let loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 30,
            text: "Loading",
            style: { font: '20px monospace', fill: '#ffffff' },
        }).setOrigin(0.5);

      this.load.on("progress", (value) => {
            progressBar.clear();
            progressBar.fillStyle(0x00ff00, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 + 10, 300 * value, 30);
      });

      this.load.on('complete', () => {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
      });
      

        this.load.image("background", './PNG/background.png');
        this.load.image("ground", './PNG/groundGrass.png');
        this.load.image("bufferup", './PNG/rockGrass.png');
        this.load.image("bufferdown", './PNG/rockGrassDown.png');
        this.load.image("star", "./PNG/starGold.png");
        this.load.image("smoke", "./PNG/puffLarge.png");
        this.load.spritesheet("plane", './PNG/Planes/planeGreen1.png', { frameWidth: 64, frameHeight: 96 });
        
        
        this.load.audio('bgMusic', './backgroundmusicforvideos-game-minecraft-gaming-background-music-402451.mp3');
        this.load.audio('starMusic', './starcollect.wav');
        this.load.audio('crashMusic', './crashmusic.mp3');
        
        
    }

    create() {
        
        this.scene.start('MenuScene');

        
    }
}

// LEVEL SCENE
class LevelScene extends Phaser.Scene {
    constructor() {
        super('LevelScene');
    }

   
    create() {
        const { width, height } = this.scale;
        const isMobile = height > width;
        const worldHeight = 5000;
        const worldWidth = width;
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
         // Background
         this.add.image(0, 0, "background").setOrigin(0, 0).setDisplaySize(width, height);


        // Back Button
        const MenuBtn = this.add.text(width / 5, height * 0.1, "<- BACK", {
             fontSize: '40px', padding: { x: 20, y: 10 }, fill: '#000'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        MenuBtn.on('pointerdown', () => this.scene.start('MenuScene'));
        // Next Button
        const NextBtn = this.add.text(width / 1.3, height * 0.1, "NEXT ->", {
             fontSize: '40px', padding: { x: 20, y: 10 }, fill: '#000'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        NextBtn.on('pointerdown', () => this.scene.start('LevelScene2'));

        const cols = 3;
        const row = 3;
        const startX = width * 0.2;
        const startY = height * 0.35;
        const spacingX = width * 0.3;
        const spacingY = height * 0.25;

        for(let i = 0; i <= 9; i++) {
            const col = i % cols;
            const row = Math.floor(i / cols);
            
            const x = startX + (col * spacingX);
            const y = startY + (row * spacingY);

            let levelNum = i + 1;

            const levelBtn = this.add.text(x, y, `Level ${levelNum}`, {
                fontSize: '32px', 
                fill: '#fff', 
                backgroundColor: '#333', 
                padding: { x: 20, y: 10 }
            }).setOrigin(0.5).setInteractive({ useHandCursor: true });

            // On click: Set the level index in GameScene and start it
            levelBtn.on('pointerdown', () => {
                const gameScene = this.scene.get('GameScene');
                gameScene.currentLevelIndex = i; // Map button 1 to index 0, etc.
                this.scene.start('GameScene');
            });

            // Hover effects for "Polished" feel
            levelBtn.on('pointerover', () => levelBtn.setStyle({ fill: '#0f0' }));
            levelBtn.on('pointerout', () => levelBtn.setStyle({ fill: '#fff' }));
        }
        }
       
    }
    
  

// LEVEL SCENE 2
class LevelScene2 extends Phaser.Scene {
    constructor() {
        super('LevelScene2');
    }

   
    create() {
        const { width, height } = this.scale;
        const isMobile = height > width;
        const worldHeight = 5000;
        const worldWidth = width;
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
         // Background
         this.add.image(0, 0, "background").setOrigin(0, 0).setDisplaySize(width, height);


        // Back Button
        const MenuBtn = this.add.text(width / 5, height * 0.1, "<- BACK", {
             fontSize: '40px', padding: { x: 20, y: 10 }, fill: '#000'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        MenuBtn.on('pointerdown', () => this.scene.start('LevelScene'));
      
            
        const  startIndex = 9;
        const endIndex = 14;

        const cols = 3;
        const startX = width * 0.2;
        const startY = height * 0.35;
        const spacingX = width * 0.3;
        const spacingY = height * 0.25;

        for(let i = startIndex; i <= endIndex; i++) {
            const relativeIndex = i - startIndex;

            const col = relativeIndex % cols;
            const rowPos = Math.floor(relativeIndex / cols);

            const x = startX + (col * spacingX);
            const y = startY + (rowPos * spacingY);

            const levelNum = i + 1;

            const levelBtn = this.add.text(x, y, `Level ${levelNum}`, {
                fontSize: '32px', 
                fill: '#fff', 
                backgroundColor: '#333', 
                padding: { x: 20, y: 10 }
            }).setOrigin(0.5).setInteractive({ useHandCursor: true });

          
            levelBtn.on('pointerdown', () => {
                const gameScene = this.scene.get('GameScene');
                gameScene.currentLevelIndex = i; // Map button 1 to index 0, etc.
                this.scene.start('GameScene');
            });

            
            levelBtn.on('pointerover', () => levelBtn.setStyle({ fill: '#0f0' }));
            levelBtn.on('pointerout', () => levelBtn.setStyle({ fill: '#fff' }));
        }
        }
       
    }
    
 

// GAME SCENE
class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        // Scene-specific variables
        this.currentLevelIndex = 0;
        this.totalstars = 0;
        this.levelStars = 0;
        this.isGameStarted = false;
        this.isGameEnd = false;
        this.hasLanded = false;
        this.hasBumped = false;
       
       
    }

 
  

    create() {
        // Reset State
        this.isGameStarted = false;
        this.isGameEnd = false;
        this.hasLanded = false;
        this.hasBumped = false;
        this.levelStars = 0;
        this.hasPlayedCrash = false;


        const { width, height } = this.scale;
        const isMobile = height > width;
        const currentLevel = levels[this.currentLevelIndex];

        this.smoke = this.physics.add.staticGroup();
        this.levelLength = Math.max(...currentLevel.obstacles.map(o => o.x)) + 500;

   
        this.totalstars = parseInt(localStorage.getItem('totalstars')) || 0;

        this.add.image(0, 0, "background").setOrigin(0, 0).setDisplaySize(width, height).setScrollFactor(0);
        
       
        if (!this.sound.get('bgMusic')) {
            this.bgMusic = this.sound.add('bgMusic', { volume: 0.4, loop: true });
            this.bgMusic.play();
        } else {
            this.bgMusic = this.sound.get('bgMusic');
        }

        const roads = this.physics.add.staticGroup();
        const ground = this.add.tileSprite(0, height - 32, this.levelLength, 64, 'ground').setOrigin(0, 0.5);
        const obstacles = this.physics.add.group({
            setScale: { x: 2.5, y: 2.5 },
            allowGravity: false,
            immovable: true,
            setOrigin: { x: 0.5, y: 1 }
        });
        this.physics.add.existing(ground, true);
        roads.add(ground);
        currentLevel.obstacles.forEach(obs => {
        
        let obstacle = obstacles.create(obs.x, 0, obs.key);

        if (obs.y > 400) { 
            
            obstacle.setOrigin(0.5, 1); 
            obstacle.y = height - 20;  
            
            if (isMobile) {
                
                obstacle.setScale(2, 2); 
            } else {

                obstacle.setScale(1.2, 1.2);
            }
        } else {

            obstacle.setOrigin(0.5, 0); 
            obstacle.y = 0;             
            
            if (isMobile) {
                obstacle.setScale(2, 2);
            } else {
                obstacle.setScale(1.2, 1.2);
            }
        }

    
        obstacle.refreshBody();
    });
        const stars = this.physics.add.staticGroup();
        currentLevel.stars.forEach(s => {
            let finalStarY = s.y;
    
          
            if (s.y >= 400) {
                finalStarY = height - 600;
            } 
           
            else if (s.y <= 300) {
                finalStarY = 550; 
            }
            stars.create(s.x, finalStarY, "star")
    });

        // Player
        this.plane = this.physics.add.sprite(100, 400, 'plane');
        this.plane.setBounce(0.5);
        this.plane.body.allowGravity = false;
        this.plane.setCollideWorldBounds(true);

        // Camera
        this.physics.world.setBounds(0, 0, this.levelLength, height);
        this.cameras.main.setBounds(0, 0, this.levelLength, height);
        this.cameras.main.startFollow(this.plane, true, 0.1, 0.1);

        // UI
        this.scoreText = this.add.text(16, 16, `Stars: ${this.totalstars}`, { fontSize: '32px', fill: '#000' }).setScrollFactor(0).setDepth(100);
        this.messageText = this.add.text(width / 2, height / 2, `LEVEL ${this.currentLevelIndex + 1}\nUP or Tap to Fly`, { fontSize: '40px', align: 'center', backgroundColor: '#02fff0'}).setOrigin(0.5).setScrollFactor(0);
        
        this.retryText = this.add.text(width / 2, height / 2, 'GAME OVER\nPress R or Tap to Retry', { fontSize: '40px', backgroundColor: '#000' }).setOrigin(0.5).setScrollFactor(0).setVisible(false);
        this.winText = this.add.text(width / 2, height / 2, 'LEVEL COMPLETE!\nPress N or Tap for Next', { fontSize: '40px', backgroundColor: '#0f0' }).setOrigin(0.5).setScrollFactor(0).setVisible(false);

        // Audio
        this.starMusic = this.sound.add('starMusic', { volume: 0.4 });
        this.crashMusic = this.sound.add('crashMusic', { volume: 0.2 });

        // Physics
        this.physics.add.collider(this.plane, roads, () => this.hasLanded = true);
        this.physics.add.collider(this.plane, obstacles, () => this.hasBumped = true);
        this.physics.add.overlap(this.plane, stars, (p, s) => {
            s.disableBody(true, true);
            this.levelStars++;
            this.totalstars++;
            this.scoreText.setText(`Stars: ${this.totalstars}`);
            this.starMusic.play();
        });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyR = this.input.keyboard.addKey('R');
        this.keyN = this.input.keyboard.addKey('N');
    }

    update() {
        if (!this.plane) return;
        const interacting = this.cursors.up.isDown || this.input.activePointer.isDown;

        if (!this.isGameStarted && interacting) {
            this.isGameStarted = true;
            this.plane.body.allowGravity = true;
            this.messageText.destroy();
            
        }

        if (this.isGameStarted && !this.isGameEnd) {
            if (!this.hasLanded && !this.hasBumped) {
                this.plane.setVelocityX(levels[this.currentLevelIndex].speed);
                if (interacting) this.plane.setVelocityY(-160);

                // Win Condition
                if (this.plane.x >= this.levelLength - 200) {
                    this.isGameEnd = true;
                    localStorage.setItem('totalstars', this.totalstars);
                    this.plane.setVelocity(0);
                    this.plane.body.allowGravity = false;
                    this.winText.setVisible(true);
                    
                }
            } else if (this.hasLanded  || this.hasBumped) {
                // Game Over
                this.plane.setVelocityX(0);
                this.plane.setTint(0xff0000);
                this.retryText.setVisible(true);
                if (!this.hasPlayedCrash) {
                    this.crashMusic.play();
                    const emiter = this.add.particles(this.plane.x, this.plane.y, "smoke", {
                           speed: {min: 50, max: 150},
                           scale: {min: 0.7, max: 0},
                           alpha: {start: 1, end: 0},
                           angle: {min: 0, max: 360},
                           lifespan: 800,
                           blendMode: 'ADD',
                           emitting: false
                    });
                    emiter.setDepth(50);
                    emiter.explode(15)
                    this.hasPlayedCrash = true;
                   
                }
            }
            
        }

           const tapIs = this.input.activePointer.isDown;

        // Scene Switching
        if (Phaser.Input.Keyboard.JustDown(this.keyR) || (tapIs && (this.hasLanded || this.hasBumped))) {
          
            this.totalstars -= this.levelStars; 
            this.scene.restart({currentLevelIndex: this.currentLevelIndex,totalstars: this.totalstars});
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyN) || (tapIs && this.isGameEnd)) {
            this.currentLevelIndex = (this.currentLevelIndex + 1) % levels.length;
            this.scene.restart({currentLevelIndex: this.currentLevelIndex, totalstars: this.totalstars});
        }
    
    }

}
// CONFIGURATION
const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT, 
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000, 
        height: 1000
    },
    physics: { 
        default: "arcade", 
        arcade: { gravity: { y: 600 }, debug: false } 
    },
    scene: [LoadingScene, MenuScene, LevelScene, LevelScene2, GameScene]
};

const Game = new Phaser.Game(config);
// Class 5 Mathematics practice bank, part 2: shapes and nets, perimeter and area, volume, time, money and the unitary method, patterns, data handling.
StudyData.addPractice(5, "maths", {
  "shapes-and-nets": {
    mcq: [
      { q: "How many faces does a cuboid have?", options: ["4", "6", "8", "12"], answer: 1, explain: "A cuboid has 6 rectangular faces: top, bottom and four sides.", level: 1 },
      { q: "Which solid shape has no edges and no corners?", options: ["Cube", "Cone", "Sphere", "Cylinder"], answer: 2, explain: "A sphere, like a ball, is perfectly round. It has no edges and no vertices.", level: 1 },
      { q: "An ice-cream cone has the shape of which solid?", options: ["Cone", "Cylinder", "Cube", "Sphere"], answer: 0, explain: "A cone has a circular base and a pointed top, just like an ice-cream cone.", level: 1 },
      { q: "How many flat faces does a cylinder have?", options: ["1", "3", "4", "2"], answer: 3, explain: "A cylinder has 2 flat circular faces (top and bottom) and 1 curved surface.", level: 1 },
      { q: "How many edges does a cuboid have?", options: ["8", "12", "6", "10"], answer: 1, explain: "A cuboid has 12 edges, the same as a cube: 4 on the top, 4 on the bottom and 4 going up the sides.", level: 1 },
      { q: "How many flat faces does a cone have?", options: ["1", "2", "0", "3"], answer: 0, explain: "A cone has only one flat face, its circular base. The rest of it is a curved surface.", level: 2 },
      { q: "Riya opens a cardboard box and lays it flat on the table. What is the flat pattern she gets called?", options: ["A face", "A net", "An edge", "A vertex"], answer: 1, explain: "A flat pattern that folds up to make a solid shape is called a net.", level: 2 },
      { q: "How many squares are needed in the net of a cube?", options: ["4", "5", "6", "8"], answer: 2, explain: "A cube has 6 square faces, so its net is made of 6 squares joined together.", level: 2 },
      { q: "Which statement about a cuboid is true?", options: ["All 6 faces are always squares", "Opposite faces are equal", "It has 1 curved surface", "It has 6 vertices"], answer: 1, explain: "In a cuboid the faces are rectangles and opposite faces are equal. It has 8 vertices and no curved surface.", level: 2 },
      { q: "Which object is shaped like a cylinder?", options: ["A dice", "A matchbox", "A cricket ball", "A tin of oil"], answer: 3, explain: "A tin of oil has two flat circles and a curved side, so it is a cylinder. A dice is a cube, a matchbox is a cuboid and a cricket ball is a sphere.", level: 2 },
      { q: "A cube and a cuboid are kept on a table. How many vertices do the two solids have in all?", options: ["8", "12", "16", "24"], answer: 2, explain: "A cube has 8 vertices and a cuboid also has 8 vertices. Together they have 8 + 8 = 16.", level: 3 },
      { q: "Every edge of a cube is 5 cm long. If you add the lengths of all its edges, what do you get?", options: ["60 cm", "30 cm", "25 cm", "20 cm"], answer: 0, explain: "A cube has 12 edges, all equal. Total length = 12 × 5 = 60 cm. (30 cm would come from counting only 6 edges.)", level: 3 }
    ],
    written: [
      { q: "How many faces does a cuboid have?", a: "6 faces.", marks: 1 },
      { q: "Name the solid shape that is round like a ball.", a: "A sphere.", marks: 1 },
      { q: "Fill in the blank: A cube has ____ vertices.", a: "8", marks: 1 },
      { q: "Write two differences between a cube and a cylinder.", a: "A cube has 6 flat square faces, but a cylinder has 2 flat circular faces and 1 curved surface.\nA cube has 8 vertices (corners), but a cylinder has no corners.", marks: 2 },
      { q: "What is a net? Describe in words one net of a cube.", a: "A net is a flat pattern that can be folded to make a solid shape.\nOne net of a cube: a row of 4 squares joined side by side, with one more square joined above the row and one more joined below it (6 equal squares in all).", marks: 2 },
      { q: "A cuboid box is 10 cm long, 6 cm wide and 4 cm high. Name the shape of its faces and give the size of each pair of equal faces. How many faces are there in all?", a: "All the faces are rectangles, and opposite faces are equal.\nTop and bottom: 10 cm by 6 cm (2 faces).\nFront and back: 10 cm by 4 cm (2 faces).\nTwo sides: 6 cm by 4 cm (2 faces).\nIn all there are 2 + 2 + 2 = 6 faces.", marks: 3 }
    ]
  },

  "perimeter-and-area": {
    mcq: [
      { q: "What is the perimeter of a square with side 9 cm?", options: ["18 cm", "81 cm", "27 cm", "36 cm"], answer: 3, explain: "Perimeter of a square = 4 × side = 4 × 9 = 36 cm. (81 is the area, in cm².)", level: 1 },
      { q: "What is the area of a rectangle 8 cm long and 3 cm wide?", options: ["11 cm²", "22 cm²", "24 cm²", "24 cm"], answer: 2, explain: "Area = length × breadth = 8 × 3 = 24 cm². Area is always written in square units, so '24 cm' is wrong.", level: 1 },
      { q: "The perimeter of a shape is:", options: ["the distance around its boundary", "the space inside it", "the space a solid takes up", "the number of its corners"], answer: 0, explain: "The perimeter is the total length of the boundary of a shape, like a fence around a garden.", level: 1 },
      { q: "What is the area of a square with side 10 m?", options: ["40 m²", "20 m²", "100 m", "100 m²"], answer: 3, explain: "Area = side × side = 10 × 10 = 100 m². The unit must be m², not m.", level: 1 },
      { q: "A square has an area of 1 m². How long is each of its sides?", options: ["10 m", "1 m", "100 m", "2 m"], answer: 1, explain: "A square with sides of 1 m has an area of 1 × 1 = 1 m².", level: 1 },
      { q: "A rectangle is 15 cm long and its perimeter is 50 cm. What is its breadth?", options: ["10 cm", "35 cm", "20 cm", "5 cm"], answer: 0, explain: "Length + breadth is half the perimeter, 50 ÷ 2 = 25 cm. So the breadth is 25 − 15 = 10 cm.", level: 2 },
      { q: "Riya wants to sew lace around the edge of a rectangular tablecloth 120 cm long and 80 cm wide. How much lace does she need?", options: ["200 cm", "400 cm", "9,600 cm", "320 cm"], answer: 1, explain: "The lace goes around the edge, so we need the perimeter: 2 × (120 + 80) = 2 × 200 = 400 cm.", level: 2 },
      { q: "A room floor is 6 m long and 5 m wide. How many tiles, each 1 m by 1 m, are needed to cover it?", options: ["22", "11", "30", "25"], answer: 2, explain: "The number of 1 m² tiles equals the area: 6 × 5 = 30 tiles. (22 is the perimeter.)", level: 2 },
      { q: "A rectangle is 12 cm by 5 cm and a square has a side of 8 cm. Which has the greater area, and by how much?", options: ["Rectangle, by 4 cm²", "Square, by 4 cm²", "Square, by 8 cm²", "Both are equal"], answer: 1, explain: "Rectangle: 12 × 5 = 60 cm². Square: 8 × 8 = 64 cm². The square is larger by 64 − 60 = 4 cm².", level: 2 },
      { q: "A square has an area of 49 cm². What is its perimeter?", options: ["14 cm", "49 cm", "196 cm", "28 cm"], answer: 3, explain: "7 × 7 = 49, so the side is 7 cm. Perimeter = 4 × 7 = 28 cm.", level: 2 },
      { q: "A farmer fences a rectangular field 40 m by 25 m with wire going round it twice. The wire costs ₹10 per metre. What is the total cost of the wire?", options: ["₹2,600", "₹1,300", "₹10,000", "₹26,000"], answer: 0, explain: "Perimeter = 2 × (40 + 25) = 130 m. Two rounds = 260 m. Cost = 260 × 10 = ₹2,600. (₹1,300 is for only one round.)", level: 3 },
      { q: "A square piece of paper has a side of 10 cm. A small square of side 2 cm is cut from one corner. What is the area of the paper that is left?", options: ["98 cm²", "92 cm²", "104 cm²", "96 cm²"], answer: 3, explain: "Whole paper: 10 × 10 = 100 cm². Piece cut off: 2 × 2 = 4 cm². Area left = 100 − 4 = 96 cm².", level: 3 }
    ],
    written: [
      { q: "Find the perimeter of a square with side 12 cm.", a: "Perimeter = 4 × 12 = 48 cm.", marks: 1 },
      { q: "Find the area of a rectangle 7 m long and 6 m wide.", a: "Area = 7 × 6 = 42 m².", marks: 1 },
      { q: "Fill in the blank: The area of a square with side 9 cm is ____ cm².", a: "81", marks: 1 },
      { q: "A rectangle has an area of 54 cm² and a length of 9 cm. Find its breadth and its perimeter.", a: "Breadth = area ÷ length = 54 ÷ 9 = 6 cm.\nPerimeter = 2 × (9 + 6) = 2 × 15 = 30 cm.", marks: 2 },
      { q: "A boy runs 3 rounds of a rectangular ground that is 50 m long and 30 m wide. How far does he run?", a: "One round is the perimeter: 2 × (50 + 30) = 160 m.\nThree rounds: 3 × 160 = 480 m.", marks: 2 },
      { q: "A room is 6 m long and 4 m wide. A carpet costs ₹120 per m². How much will it cost to cover the whole floor with carpet?", a: "Area of the floor = 6 × 4 = 24 m².\nCost = 24 × 120 = ₹2,880.\nThe carpet costs ₹2,880.", marks: 3 }
    ]
  },

  "volume": {
    mcq: [
      { q: "What is the volume of a cube with side 3 cm?", options: ["9 cm³", "27 cm³", "18 cm³", "81 cm³"], answer: 1, explain: "Volume = side × side × side = 3 × 3 × 3 = 27 cm³.", level: 1 },
      { q: "What is the volume of a cuboid that is 2 cm long, 5 cm wide and 6 cm high?", options: ["13 cm³", "30 cm³", "60 cm³", "60 cm²"], answer: 2, explain: "Volume = 2 × 5 × 6 = 60 cm³. The unit of volume is the cubic centimetre, not cm².", level: 1 },
      { q: "A cube has sides of 1 cm. Its volume is:", options: ["1 cm³", "1 cm²", "1 cm", "6 cm³"], answer: 0, explain: "1 × 1 × 1 = 1 cm³. This is the unit cube used to measure volume.", level: 1 },
      { q: "Volume tells us:", options: ["the distance around a shape", "the flat surface a shape covers", "how long something takes", "the space a solid takes up"], answer: 3, explain: "Volume is the amount of space a solid takes up.", level: 1 },
      { q: "A layer of a box has 2 rows with 5 cubes in each row. How many cubes are in one layer?", options: ["7", "10", "12", "25"], answer: 1, explain: "One layer has 2 × 5 = 10 cubes.", level: 1 },
      { q: "A box has 4 layers. Each layer has 3 rows of 5 cubes. How many cubes fill the box?", options: ["60", "12", "35", "45"], answer: 0, explain: "One layer has 3 × 5 = 15 cubes. Four layers have 4 × 15 = 60 cubes.", level: 2 },
      { q: "Riya packs 1 cm cubes into a box 10 cm long, 5 cm wide and 2 cm high. How many cubes fill the box exactly?", options: ["17", "50", "100", "500"], answer: 2, explain: "The number of cubes is the volume: 10 × 5 × 2 = 100 cubes.", level: 2 },
      { q: "A cuboid has a volume of 48 cm³. Its length is 6 cm and its breadth is 4 cm. What is its height?", options: ["12 cm", "2 cm", "8 cm", "4 cm"], answer: 1, explain: "Length × breadth = 6 × 4 = 24. Height = 48 ÷ 24 = 2 cm.", level: 2 },
      { q: "A cube of side 4 cm and a cuboid of 5 cm × 4 cm × 3 cm are compared. Which has the greater volume, and by how much?", options: ["Cuboid, by 4 cm³", "Cube, by 14 cm³", "They are equal", "Cube, by 4 cm³"], answer: 3, explain: "Cube: 4 × 4 × 4 = 64 cm³. Cuboid: 5 × 4 × 3 = 60 cm³. The cube is bigger by 4 cm³.", level: 2 },
      { q: "The volume of a cube is 8 cm³. What is the length of one side?", options: ["4 cm", "8 cm", "2 cm", "3 cm"], answer: 2, explain: "2 × 2 × 2 = 8, so each side is 2 cm. (4 comes from wrongly dividing 8 by 2.)", level: 2 },
      { q: "A water tank is a cuboid 50 cm long, 40 cm wide and 30 cm high. What is its volume?", options: ["120 cm³", "6,000 cm³", "12,000 cm³", "60,000 cm³"], answer: 3, explain: "Volume = 50 × 40 × 30 = 2,000 × 30 = 60,000 cm³. (120 comes from adding the sides, which is not volume.)", level: 3 },
      { q: "Two cubes, each of side 2 cm, are joined face to face to make a cuboid. What is the volume of the cuboid?", options: ["16 cm³", "8 cm³", "32 cm³", "12 cm³"], answer: 0, explain: "Each cube has a volume of 2 × 2 × 2 = 8 cm³. Joining them does not change the space they fill, so the volume is 8 + 8 = 16 cm³. (The cuboid is 4 cm × 2 cm × 2 cm.)", level: 3 }
    ],
    written: [
      { q: "Find the volume of a cube with side 4 cm.", a: "Volume = 4 × 4 × 4 = 64 cm³.", marks: 1 },
      { q: "Fill in the blank: Volume of a cuboid = length × ____ × ____.", a: "breadth × height", marks: 1 },
      { q: "A box has 2 layers of 6 cubes each. Each cube has a volume of 1 cm³. What is the volume of the box?", a: "Number of cubes = 2 × 6 = 12.\nVolume = 12 cm³.", marks: 1 },
      { q: "Find the volume of a cuboid that is 8 cm long, 5 cm wide and 3 cm high.", a: "Volume = length × breadth × height = 8 × 5 × 3 = 120 cm³.", marks: 2 },
      { q: "A cuboid has a volume of 90 cm³, a length of 6 cm and a breadth of 5 cm. Find its height.", a: "Length × breadth = 6 × 5 = 30.\nHeight = 90 ÷ 30 = 3 cm.", marks: 2 },
      { q: "Box A is a cuboid 10 cm long, 4 cm wide and 3 cm high. Box B is a cube of side 5 cm. Which box can hold more, and by how much?", a: "Volume of box A = 10 × 4 × 3 = 120 cm³.\nVolume of box B = 5 × 5 × 5 = 125 cm³.\nBox B holds more, by 125 − 120 = 5 cm³.", marks: 3 }
    ]
  },

  "time": {
    mcq: [
      { q: "How many seconds are there in 1 minute?", options: ["100", "30", "60", "24"], answer: 2, explain: "1 minute = 60 seconds.", level: 1 },
      { q: "How many hours are there in 1 day?", options: ["12", "24", "60", "7"], answer: 1, explain: "1 day = 24 hours.", level: 1 },
      { q: "How many minutes are there in 3 hours?", options: ["120", "300", "60", "180"], answer: 3, explain: "1 hour = 60 minutes, so 3 hours = 3 × 60 = 180 minutes.", level: 1 },
      { q: "How is 2:00 pm written in the 24-hour clock?", options: ["14:00", "02:00", "12:00", "20:00"], answer: 0, explain: "For a pm time, add 12 to the hour: 2 + 12 = 14, so it is 14:00.", level: 1 },
      { q: "How many days are there in 2 weeks?", options: ["7", "14", "21", "10"], answer: 1, explain: "1 week = 7 days, so 2 weeks = 14 days.", level: 1 },
      { q: "How is 9:45 pm written in the 24-hour clock?", options: ["09:45", "19:45", "21:45", "20:45"], answer: 2, explain: "9 + 12 = 21, and the minutes stay the same. So 9:45 pm is 21:45.", level: 2 },
      { q: "Riya's school starts at 8:30 am and ends at 2:15 pm. How long is the school day?", options: ["5 hours 45 minutes", "6 hours 15 minutes", "5 hours 15 minutes", "6 hours 45 minutes"], answer: 0, explain: "In the 24-hour clock the school runs from 08:30 to 14:15. From 08:30 to 14:30 is 6 hours, and 14:15 is 15 minutes earlier. So the time is 5 hours 45 minutes.", level: 2 },
      { q: "How is 17:20 written in the 12-hour clock?", options: ["7:20 pm", "5:20 am", "4:20 pm", "5:20 pm"], answer: 3, explain: "For times after 12:59, subtract 12 from the hour: 17 − 12 = 5. It is an evening time, so 5:20 pm.", level: 2 },
      { q: "How many minutes are there in 2 hours 30 minutes?", options: ["230", "150", "120", "90"], answer: 1, explain: "2 hours = 120 minutes. Adding 30 minutes gives 150 minutes.", level: 2 },
      { q: "A film is 2 hours 20 minutes long. It starts at 4:50 pm. When does it end?", options: ["7:20 pm", "7:30 pm", "7:10 pm", "6:30 pm"], answer: 2, explain: "4:50 pm + 2 hours = 6:50 pm. Adding 20 more minutes: 6:50 + 10 minutes is 7:00, then 10 more minutes is 7:10 pm.", level: 2 },
      { q: "A train leaves at 21:40 and reaches its stop at 03:10 the next morning. How long is the journey?", options: ["5 hours 30 minutes", "6 hours 30 minutes", "18 hours 30 minutes", "5 hours 50 minutes"], answer: 0, explain: "From 21:40 to midnight is 2 hours 20 minutes. From midnight to 03:10 is 3 hours 10 minutes. Total = 5 hours 30 minutes.", level: 3 },
      { q: "A bus takes 1 hour 45 minutes for one trip. It makes 3 trips one after the other without a break. How long does it take in all?", options: ["4 hours 45 minutes", "5 hours 45 minutes", "3 hours 45 minutes", "5 hours 15 minutes"], answer: 3, explain: "3 × 1 hour = 3 hours and 3 × 45 minutes = 135 minutes = 2 hours 15 minutes. Total = 5 hours 15 minutes.", level: 3 }
    ],
    written: [
      { q: "How many minutes are there in 5 hours?", a: "5 × 60 = 300 minutes.", marks: 1 },
      { q: "Write 11:25 pm in the 24-hour clock.", a: "11 + 12 = 23, so it is 23:25.", marks: 1 },
      { q: "Write 15:30 in the 12-hour clock using am or pm.", a: "15 − 12 = 3, so it is 3:30 pm.", marks: 1 },
      { q: "Find the time taken from 9:35 am to 1:10 pm.", a: "In the 24-hour clock the times are 09:35 and 13:10.\n13:10 − 09:35 = 3 hours 35 minutes.", marks: 2 },
      { q: "Write 19:05 and 07:05 in the 12-hour clock with am or pm.", a: "19:05: 19 − 12 = 7, so it is 7:05 pm.\n07:05 is 7:05 am.", marks: 2 },
      { q: "A train leaves Amritsar at 14:25 and the journey takes 6 hours 50 minutes. At what time does it arrive? Write the answer in the 24-hour clock and in the 12-hour clock.", a: "Start: 14:25. Add 6 hours: 20:25.\nAdd 50 minutes: 20:25 + 35 minutes = 21:00, and 15 more minutes = 21:15.\nArrival time: 21:15, which is 9:15 pm.", marks: 3 }
    ]
  },

  "money-and-unitary-method": {
    mcq: [
      { q: "How is ₹2 and 50 paise written with a decimal point?", options: ["₹2.05", "₹250", "₹2.50", "₹25.0"], answer: 2, explain: "50 paise is half a rupee, 0.50, so ₹2 and 50 paise is ₹2.50. (₹2.05 would be 5 paise.)", level: 1 },
      { q: "200 paise is equal to:", options: ["₹2", "₹20", "₹0.20", "₹200"], answer: 0, explain: "100 paise = ₹1, so 200 paise = ₹2.", level: 1 },
      { q: "One pen costs ₹7. What is the cost of 4 pens?", options: ["₹11", "₹28", "₹74", "₹21"], answer: 1, explain: "Cost of 4 pens = 4 × 7 = ₹28.", level: 1 },
      { q: "A bill is ₹65 and Ravi pays with a ₹100 note. How much change does he get?", options: ["₹45", "₹165", "₹25", "₹35"], answer: 3, explain: "Change = money paid − price = 100 − 65 = ₹35.", level: 1 },
      { q: "3 oranges cost ₹30. What is the cost of 1 orange?", options: ["₹90", "₹27", "₹10", "₹33"], answer: 2, explain: "Cost of 1 orange = 30 ÷ 3 = ₹10.", level: 1 },
      { q: "8 kg of rice cost ₹480. What do 5 kg of the same rice cost?", options: ["₹60", "₹300", "₹384", "₹96"], answer: 1, explain: "1 kg costs 480 ÷ 8 = ₹60. So 5 kg cost 5 × 60 = ₹300. (₹60 is the price of only 1 kg.)", level: 2 },
      { q: "Riya buys a pencil box for ₹85 and a pen for ₹15. She pays with a ₹200 note. How much change should she get back?", options: ["₹110", "₹185", "₹100", "₹90"], answer: 2, explain: "Total price = 85 + 15 = ₹100. Change = 200 − 100 = ₹100.", level: 2 },
      { q: "12 eggs cost ₹96. What do 18 eggs cost?", options: ["₹144", "₹108", "₹192", "₹72"], answer: 0, explain: "1 egg costs 96 ÷ 12 = ₹8. So 18 eggs cost 18 × 8 = ₹144.", level: 2 },
      { q: "How many paise are there in ₹3.75?", options: ["37 paise", "75 paise", "3,750 paise", "375 paise"], answer: 3, explain: "₹3.75 = 3 rupees and 75 paise. 3 × 100 + 75 = 375 paise.", level: 2 },
      { q: "12 bananas cost ₹60. What is the cost of 5 bananas?", options: ["₹12", "₹30", "₹25", "₹5"], answer: 2, explain: "1 banana costs 60 ÷ 12 = ₹5. So 5 bananas cost 5 × 5 = ₹25.", level: 2 },
      { q: "A shopkeeper sells 6 notebooks for ₹90. Ravi buys 9 notebooks and pays with ₹200. How much change does he get?", options: ["₹110", "₹65", "₹45", "₹135"], answer: 1, explain: "1 notebook costs 90 ÷ 6 = ₹15. 9 notebooks cost 9 × 15 = ₹135. Change = 200 − 135 = ₹65.", level: 3 },
      { q: "4 packets of biscuits cost ₹52. Meena has ₹100. What is the greatest number of packets she can buy?", options: ["7", "8", "6", "25"], answer: 0, explain: "1 packet costs 52 ÷ 4 = ₹13. 7 packets cost 91 and 8 packets cost 104, which is more than ₹100. So she can buy 7 packets.", level: 3 }
    ],
    written: [
      { q: "Write 45 paise in rupees.", a: "100 paise = ₹1, so 45 paise = ₹0.45.", marks: 1 },
      { q: "One metre of cloth costs ₹120. What is the cost of 3 metres?", a: "Cost = 3 × 120 = ₹360.", marks: 1 },
      { q: "Fill in the blank: Change = money paid − ____.", a: "the price (of the items bought)", marks: 1 },
      { q: "7 books cost ₹560. Find the cost of 1 book and of 4 books.", a: "Cost of 1 book = 560 ÷ 7 = ₹80.\nCost of 4 books = 4 × 80 = ₹320.", marks: 2 },
      { q: "Meena buys 2 kg of flour at ₹38 per kg and pays with a ₹100 note. How much change does she get?", a: "Price of flour = 2 × 38 = ₹76.\nChange = 100 − 76 = ₹24.", marks: 2 },
      { q: "15 pens cost ₹180. Find the cost of 1 pen and the cost of 22 pens. How much more do 22 pens cost than 15 pens?", a: "Cost of 1 pen = 180 ÷ 15 = ₹12.\nCost of 22 pens = 22 × 12 = ₹264.\nDifference = 264 − 180 = ₹84 more.", marks: 3 }
    ]
  },

  "patterns": {
    mcq: [
      { q: "What is the next number in 4, 8, 12, 16, …?", options: ["18", "24", "20", "32"], answer: 2, explain: "The rule is to add 4 each time. 16 + 4 = 20.", level: 1 },
      { q: "What is the next number in 50, 45, 40, 35, …?", options: ["25", "30", "40", "32"], answer: 1, explain: "The rule is to subtract 5 each time. 35 − 5 = 30.", level: 1 },
      { q: "What is the rule of the pattern 2, 4, 8, 16, …?", options: ["Multiply by 2", "Add 2", "Add 4", "Multiply by 4"], answer: 0, explain: "Each term is 2 times the one before: 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16.", level: 1 },
      { q: "What is the next number in 7, 14, 21, 28, …?", options: ["32", "42", "36", "35"], answer: 3, explain: "The rule is to add 7 each time. 28 + 7 = 35.", level: 1 },
      { q: "Each number or shape in a pattern is called a:", options: ["rule", "term", "tally", "net"], answer: 1, explain: "Each number or shape in a pattern is called a term.", level: 1 },
      { q: "What is the next term in 3, 9, 27, 81, …?", options: ["108", "162", "243", "84"], answer: 2, explain: "Each term is 3 times the one before, so the next term is 81 × 3 = 243.", level: 2 },
      { q: "Riya saves ₹5 on day 1, ₹10 on day 2, ₹15 on day 3 and goes on in the same way. How much does she save on day 8?", options: ["₹35", "₹40", "₹45", "₹80"], answer: 1, explain: "She saves ₹5 more each day, so on day 8 she saves 8 × 5 = ₹40.", level: 2 },
      { q: "Matchsticks make triangles in a row, with 2 × n + 1 sticks for n triangles. How many sticks are needed for 7 triangles?", options: ["15", "14", "21", "16"], answer: 0, explain: "2 × 7 + 1 = 14 + 1 = 15 sticks.", level: 2 },
      { q: "The colours red, blue, green and yellow repeat in this order again and again. What is the 10th colour?", options: ["red", "green", "yellow", "blue"], answer: 3, explain: "The colours repeat in groups of 4. Terms 9 and 10 are the first two colours of the next group: red, then blue. So the 10th colour is blue.", level: 2 },
      { q: "What number is missing in 2, 6, 18, __, 162?", options: ["36", "72", "54", "90"], answer: 2, explain: "Each term is 3 times the one before. 18 × 3 = 54, and check: 54 × 3 = 162.", level: 2 },
      { q: "What is the 10th term of the pattern 3, 7, 11, 15, …?", options: ["39", "43", "40", "35"], answer: 0, explain: "The rule is to add 4. The terms are 3, 7, 11, 15, 19, 23, 27, 31, 35, 39. The 10th term is 39.", level: 3 },
      { q: "Matchsticks make triangles in a row, with 2 × n + 1 sticks for n triangles. Ravi has 21 sticks. How many triangles can he make using all the sticks?", options: ["9", "11", "20", "10"], answer: 3, explain: "2 × n + 1 = 21, so 2 × n = 20 and n = 10. Check: 2 × 10 + 1 = 21.", level: 3 }
    ],
    written: [
      { q: "Write the next two terms of 11, 22, 33, 44, …", a: "The rule is to add 11. The next terms are 55 and 66.", marks: 1 },
      { q: "Write the rule of the pattern 90, 80, 70, 60, …", a: "Subtract 10 each time.", marks: 1 },
      { q: "Write the next term of 1, 3, 9, 27, …", a: "Each term is 3 times the one before. The next term is 27 × 3 = 81.", marks: 1 },
      { q: "Find the rule and the next two terms of the pattern 6, 12, 24, 48, …", a: "Each term is 2 times the one before. Rule: multiply by 2.\nNext terms: 48 × 2 = 96 and 96 × 2 = 192.", marks: 2 },
      { q: "Matchsticks are used to make 6 triangles in a row. How many sticks are needed? Show how you found it.", a: "Rule: number of sticks = 2 × n + 1.\nFor 6 triangles: 2 × 6 + 1 = 13 sticks.\nCheck: 3, 5, 7, 9, 11, 13.", marks: 2 },
      { q: "Look at the pattern 5, 8, 11, 14, … Write its rule and its 8th term. Is 40 a term of this pattern? Give a reason.", a: "Rule: add 3 each time.\nThe terms are 5, 8, 11, 14, 17, 20, 23, 26. The 8th term is 26.\nContinuing: 29, 32, 35, 38, 41. The pattern goes from 38 to 41, so 40 is not a term.", marks: 3 }
    ]
  },

  "data-handling": {
    mcq: [
      { q: "In tally marks, how many does one crossed group of marks stand for?", options: ["4", "5", "10", "6"], answer: 1, explain: "Four upright lines crossed by a fifth make one group, which stands for 5.", level: 1 },
      { q: "A tally chart shows 2 crossed groups and 3 more single marks. What number is this?", options: ["23", "12", "13", "15"], answer: 2, explain: "Two groups of 5 are 10, and 3 more marks make 10 + 3 = 13.", level: 1 },
      { q: "In a bar graph, the tallest bar shows:", options: ["the biggest value", "the smallest value", "the total of all values", "the shortest time"], answer: 0, explain: "The taller the bar, the bigger the value it stands for.", level: 1 },
      { q: "Each slice of a pie chart shows:", options: ["a tally mark", "the total of the data", "a bar", "a part of the whole"], answer: 3, explain: "A pie chart is a circle divided into slices, and each slice shows one part of the whole.", level: 1 },
      { q: "What is the total of the data 5, 8, 3 and 4?", options: ["15", "12", "20", "22"], answer: 2, explain: "5 + 8 + 3 + 4 = 20.", level: 1 },
      { q: "A bar graph shows mangoes sold: Monday 12, Tuesday 20, Wednesday 8 and Thursday 16. On which day were the fewest mangoes sold, and how many fewer than the best day?", options: ["Wednesday, 12 fewer", "Monday, 8 fewer", "Wednesday, 8 fewer", "Thursday, 4 fewer"], answer: 0, explain: "The fewest were sold on Wednesday (8) and the most on Tuesday (20). The difference is 20 − 8 = 12.", level: 2 },
      { q: "Riya asked 20 friends their favourite fruit. 9 said mango, 5 said apple, 4 said banana and the rest said grapes. How many chose grapes?", options: ["3", "18", "2", "11"], answer: 2, explain: "9 + 5 + 4 = 18 chose the other fruits. Grapes: 20 − 18 = 2.", level: 2 },
      { q: "In a bar graph, each step on the scale stands for 5 students. A bar rises to 6 steps. How many students does it show?", options: ["30", "6", "11", "35"], answer: 0, explain: "Each step is 5 students, so 6 steps stand for 6 × 5 = 30 students.", level: 2 },
      { q: "A tally chart shows blue with 2 crossed groups and 4 more marks, and red with 1 crossed group and 2 more marks. How many more is blue than red?", options: ["8", "7", "21", "14"], answer: 1, explain: "Blue = 10 + 4 = 14. Red = 5 + 2 = 7. The difference is 14 − 7 = 7.", level: 2 },
      { q: "In a pie chart of a family's monthly spending, the slice for food is the biggest. What does this tell us?", options: ["Food costs the least", "The family spends the least on food", "The family buys only food", "The family spends the most on food"], answer: 3, explain: "A bigger slice means a bigger share of the whole. So more of the money goes to food than to any other item.", level: 2 },
      { q: "Four friends scored 14, 18, 20 and 8 marks. A fifth friend joins, and the total of all five scores is 80. How many marks did the fifth friend score?", options: ["18", "60", "10", "20"], answer: 3, explain: "The first four total 14 + 18 + 20 + 8 = 60. The fifth score is 80 − 60 = 20.", level: 3 },
      { q: "A bar graph shows books read: Asha 7, Ravi 11 and Meena 9. How many fewer books did Ravi read than Asha and Meena together?", options: ["4", "16", "5", "27"], answer: 2, explain: "Asha and Meena read 7 + 9 = 16 books together. Ravi read 11, which is 16 − 11 = 5 fewer.", level: 3 }
    ],
    written: [
      { q: "What number is shown by 3 crossed groups of tally marks and 2 more single marks?", a: "3 × 5 = 15, and 2 more makes 17.", marks: 1 },
      { q: "Name the chart that shows a whole divided into slices.", a: "A pie chart.", marks: 1 },
      { q: "Find the total of the data 6, 9, 5 and 7.", a: "6 + 9 + 5 + 7 = 27.", marks: 1 },
      { q: "In a vote for class monitor, Asha got 9 votes, Ravi got 14 votes and Sam got 6 votes. Who won, and by how many votes did the winner beat the second one?", a: "Ravi got the most votes (14), so Ravi won.\nThe second was Asha with 9 votes.\nRavi won by 14 − 9 = 5 votes.", marks: 2 },
      { q: "Show the number 23 using tally marks. Explain how you made it.", a: "23 = 20 + 3.\nDraw 4 crossed groups of five (4 × 5 = 20), then 3 single marks.", marks: 2 },
      { q: "30 students chose their favourite sport. 12 chose cricket, 8 chose hockey, 6 chose kabaddi and the rest chose football. How many chose football? Which sport is the most popular? How many more students chose cricket than football?", a: "Students for the first three sports: 12 + 8 + 6 = 26.\nFootball: 30 − 26 = 4 students.\nCricket is the most popular (12 students).\nCricket − football = 12 − 4 = 8 more students.", marks: 3 }
    ]
  }
});

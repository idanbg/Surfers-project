const products=[
    {
        name: "Omega 3/2 Back Zip Wetsuit" ,
        price: 179.95 ,
        picture: "./pics/men-wetsuit.webp",
        category:"Wetsuits" ,
        quantity: 123 ,
        gender: "male"  
    },////
    {
        name: "E-Bomb 4/3 Zip Free Hooded Wetsuit" ,
        price: 258.99 ,
        picture:"./pics/men-fullwetsuit.webp",
        category: "Wetsuits",
        quantity:92 ,
        gender:"male"  
    },//
    
    {
        name:"Sundays Pro Performance 19' Boardshorts" ,
        price: 59.95,
        picture:"./pics/men-boardshorts2.jpeg" ,
        category:"Shorts" ,
        quantity:111 ,
        gender: "male" 
    },//
    {
        name:"Sundays Layback 17' Boardshorts"  ,
        price: 59.95,
        picture:"./pics/men-boardshort1.jpeg" ,
        category:"Shorts" ,
        quantity:87 ,
        gender:"male"  
    },//
    {
        name:"2mm Absolute Wetsuit Hood" ,
        price: 39.95,
        picture:"./pics/men-wetsuithood.jpeg" ,
        category:"Hat" ,
        quantity:67 ,
        gender:"male"  
    },//
    
    {
        name:"Tides Straw Lifeguard Hat" ,
        price: 22.95,
        picture:"./pics/men-hat1.jpeg" ,
        category:"Hat" ,
        quantity:93 ,
        gender: "male" 
    },//
    
    {
        name:"Jetty Bucket Hat" ,
        price:39.99,
        picture:"./pics/men-hat2.jpeg" ,
        category:"Hat" ,
        quantity:71 ,
        gender:"male"  
    },//
    
    {
        name:"Surf Wetsuit Hat" ,
        price:29.95 ,
        picture:"./pics/men-surfhat.jpeg" ,
        category:"Hat" ,
        quantity: 100,
        gender:"male"  
    },//
    
    {
        name:"Onesize Tahiti 2mm Reef Walker Boot" ,
        price:19.99 ,
        picture:"./pics/men-reefwalker.jpeg" ,
        category:"Boots" ,
        quantity:55 ,
        gender:"male" 
    },//
    {
        name: "Spring Fever Long Sleeve Spring Suit" ,
        price: 149.95 ,
        picture: "./pics/women-springsuit.jpeg",
        category:"Wetsuits" ,
        quantity: 102 ,
        gender: "female"  
    },
    {
        name: "Synergy Back Zip Full Wetsuit" ,
        price: 279.95 ,
        picture: "./pics/women-fullsuit.jpeg",
        category:"Wetsuits" ,
        quantity: 88 ,
        gender: "female"  
    },//
    {
        name: "Summer Sky One-Piece Swimsuit" ,
        price: 99.95 ,
        picture: "./pics/women-onepiece.jpeg",
        category:"Wetsuits" ,
        quantity: 77 ,
        gender: "female"  
    },//
    {
        name: "So Essential Tote Bag" ,
        price: 49.95 ,
        picture: "./pics/women-tote.jpeg",
        category:"Bags" ,
        quantity: 97 ,
        gender: "female"  
    },//
    {
        name: "Sol Searcher Multi-Way Triangle Bikini Top" ,
        price: 45.95 ,
        picture: "./pics/women-bikini.jpeg",
        category:"Bikinis" ,
        quantity: 80 ,
        gender: "female"  
    },//
    {
        name: "New Comer Straw Hat" ,
        price: 25.95 ,
        picture: "./pics/women-strawhat.jpeg",
        category:"Hats" ,
        quantity: 50 ,
        gender: "female"  
    },//
    
    
    {
        name:"SumBum Water Bottle" ,
        price: 14.99,
        picture:"./pics/SumBum.webp" ,
        category:"More" ,
        quantity:123 
    },//
    
    {
        name:"Matkot 15'" ,
        price:29.99 ,
        picture:"./pics/matkot.avif" ,
        category:"More" ,
        quantity:100 
    },//
    
    {
        name:"Mikasa In Yellow & Blue" ,
        price:39.99 ,
        picture:"./pics/mikasa-yellow.webp" ,
        category:"More" ,
        quantity:182  
    },//
    
    {
        name:"Mikasa In Classic Black & White" ,
        price:34.99 ,
        picture:"./pics/Mikasa.webp" ,
        category:"More" ,
        quantity:79  
    },//
    
    {
        name:"Cool Polar-Box In Pink" ,
        price:24.99 ,
        picture:"./pics/Polarbox.webp" ,
        category:"More" ,
        quantity:99 
    },//
    {
        name:"Sun Trip Tiki One-Piece Swimsuit" ,
        price: 109.95,
        picture:"/=./pics/Sun-Trip.jpeg" ,
        category:"female" ,
        quantity:80
    },
    {
        name:"Beach Vibes Beach Cover-Up" ,
        price: 59.95,
        picture:"./pics/beach-coverup.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"Right On Long Sleeve Shirt" ,
        price: 69.95,
        picture:"./pics/right-on.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"Day Tripper Elastic Shorts" ,
        price: 45.95,
        picture:"./pics/Day-Tripper.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"New Waves 2 Elastic Waist Pants" ,
        price: 49.95,
        picture:"./pics/New-Waves.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"Paradise Cove Maxi Dress" ,
        price: 99.95,
        picture:"./pics/Maxi-Dress.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"Shoreline Sands Sweatshirt" ,
        price: 59.95,
        picture:"./pics/Sweatshirt.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"So Right Sarong" ,
        price: 39.95,
        picture:"./pics/So-Right.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"Bright Side Carry Tote Bag" ,
        price: 55.95,
        picture:"./pics/Side-Carry.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"Loveland 2 Kimono Beach Cover Up" ,
        price: 59.95,
        picture:"./pics/kimono.jpeg" ,
        category:"female" ,
        quantity:99
    },
    {
        name:"All Day Airlite Performance 19 Boardshorts" ,
        price: 65.95,
        picture:"./pics/all-day.jpeg" ,
        category:"male" ,
        quantity:99
    },
    {
        name:"Pilpeled Tribe Snapback Headwear Clipback" , 
        price: 30.95,
        picture:"./pics/Pilpeled-cap.jpeg" ,
        category:"male" ,
        quantity:99
    },
    {
        name:"Sundays Vacay Short Sleeve Shirt" , 
        price: 59.95,
        picture:"./pics/sundays.jpeg" ,
        category:"male" ,
        quantity:99
    },
    {
        name:"Boys Lary Cord Shorts"  , 
        price: 39.95,
        picture:"./pics/cord.jpeg" ,
        category:"male" ,
        quantity:99
    },
    {
        name:"Arch Mesh UPF 50 Long Sleeve Surf Tee"  , 
        price: 39.95,
        picture:"./pics/Arch.jpeg" ,
        category:"male" ,
        quantity:99
    },
    {
        name:"Eclipse Hooded Long Sleeve Surf T-Shirt" , 
        price: 55.95,
        picture:"./pics/Eclipse.jpeg" ,
        category:"male" ,
        quantity:99
    },
    {
        name:"JBL Flip 4 Waterproof Portable Bluetooth Speaker - White" , 
        price: 89.95,
        picture:"./pics/jbl.jpg" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Neso 1 Sunshade" , 
        price: 99.95,
        picture:"./pics/Neso 1.avif" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Deluxe Beach Chair" , 
        price: 120.95,
        picture:"./pics/Deluxe chair.webp" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Beach Bats" , 
        price: 30.95,
        picture:"./pics/matkot 2.avif" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Beach Umbrella"  , 
        price: 120.95,
        picture:"./pics/Umbrella.webp" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Kids Dive Set Medium"  , 
        price: 52.50,
        picture:"./pics/kid-dive.webp" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Ride With Me Surfboard Float"  , 
        price: 28.50,
        picture:"./pics/Kids-Surf.webp" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Beach Cooler Box Sounds"  , 
        price: 105.50,
        picture:"./pics/cooler.webp" ,
        category:"more" ,
        quantity:99
    },
    {
        name:"Luxe Beach & Picnic Blanket"  , 
        price: 75.50,
        picture:"./pics/beach blanket.webp" ,
        category:"more" ,
        quantity:99
    },










    ]


    module.exports=products;
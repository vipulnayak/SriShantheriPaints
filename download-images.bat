@echo off
REM Create directories if they don't exist
mkdir "public\products" 2>nul
mkdir "public\rooms" 2>nul

REM Download room images
curl -L -o "public\rooms\living-room.jpg" "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1200&q=80"
curl -L -o "public\rooms\bedroom.jpg" "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80"
curl -L -o "public\rooms\kitchen.jpg" "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80"
curl -L -o "public\rooms\bathroom.jpg" "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80"

REM Download product images
curl -L -o "public\products\exterior-allguard.jpg" "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
curl -L -o "public\products\interior-easyclean.jpg" "https://images.unsplash.com/photo-1626290131022-4e5a5e167173?w=800&q=80"
curl -L -o "public\products\silk-luxury.jpg" "https://images.unsplash.com/photo-1515489896120-7a65b644e505?w=800&q=80"
curl -L -o "public\products\weathercoat-antidustt.jpg" "https://images.unsplash.com/photo-1572969057162-d4ef8e6e8e0b?w=800&q=80"
curl -L -o "public\products\wood-finish.jpg" "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80"
curl -L -o "public\products\metal-coating.jpg" "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80"
curl -L -o "public\products\waterproofing.jpg" "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=800&q=80"
curl -L -o "public\products\designer-finish.jpg" "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80"
curl -L -o "public\products\primer.jpg" "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&q=80"

REM Download fallback image
curl -L -o "public\products\fallback.jpg" "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80" 
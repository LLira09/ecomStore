Product.create(category: "Mechanical Keyboard", name: "Ducky One 2 Mini", image_url: "https://mechanicalkeyboards.com/shop/images/products/large_5027_large_DKON1861ST-USPDWWT1_main.png", brand: "Ducky", description: "Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard", price: 99, num_in_stock: 12)
Product.create(category: "Mechanical Keyboard", name: "Ducky x MK Frozen Llama Mecha Mini v2", image_url: "https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_main.jpg", brand: "Ducky", description: "RGB LED 60% Double Shot PBT Mechanical Keyboard", price: 129, num_in_stock: 12)
Product.create(category: "Mechanical Keyboard", name: "Varmilo VA87M", image_url: "https://mechanicalkeyboards.com/shop/images/products/large_2843_87CMYK_1.jpg", brand: "Varmilo", description: "VA87M CMPYO White LED TKL Dye Sub PBT Mechanical Keyboard", price: 129, num_in_stock: 12)
Product.create(category: "Mechanical Keyboard", name: "Obinslab Anne Pro 2", image_url: "https://mechanicalkeyboards.com/shop/images/products/large_KB181-White_main.jpg", brand: "Obinslab", description: "White RGB LED 60% Double Shot PBT Mechanical Keyboard", price: 94, num_in_stock: 12)
Product.create(category: "Mouse", name: "Feather", image_url: "https://mechanicalkeyboards.com/shop/images/products/large_DMFE20O-OAAPA81_main.jpg", brand: "Ducky", description: "The feather RBG mouse", price: 65, num_in_stock: 10)
Product.create(category: "Mouse", name: "DeathAdder Essential", image_url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6311/6311863_sd.jpg;maxHeight=640;maxWidth=550", brand: "Razer", description: "Essential Wired Optical Gaming Mouse - Black", price: 49, num_in_stock: 10)

User.create(username: "admin", email: "admin@admin.com", password: "12345678", admin: true, address: "1234 Test St.")

# Order.create(user_id: 1, product_ids: [1,2])
puts 'Seeded'

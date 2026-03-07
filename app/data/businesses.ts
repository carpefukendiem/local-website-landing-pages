export interface Service {
  name: string;
  description: string;
  price?: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface Business {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  heroColor: string;
  accentColor: string;
  services: Service[];
  testimonials: Testimonial[];
  features: string[];
}

export const businesses: Business[] = [
  {
    slug: "marias-italian-kitchen",
    name: "Maria's Italian Kitchen",
    tagline: "Authentic Italian Flavors Since 1987",
    description:
      "Family-owned Italian restaurant serving handmade pasta, wood-fired pizza, and classic Italian dishes made from recipes passed down through generations.",
    category: "Restaurant",
    phone: "(555) 234-5678",
    email: "info@mariasitaliankitchen.com",
    address: "142 Olive Street, Downtown",
    hours: "Mon–Thu 11am–9pm, Fri–Sat 11am–10pm, Sun 12pm–8pm",
    heroColor: "#b91c1c",
    accentColor: "#dc2626",
    services: [
      { name: "Dine-In", description: "Cozy atmosphere for families and date nights", price: "Entrées from $14" },
      { name: "Takeout", description: "Fresh meals ready in 20–30 minutes", price: "Full menu available" },
      { name: "Catering", description: "Corporate events, weddings, and private parties", price: "Starting at $25/person" },
      { name: "Private Dining", description: "Exclusive room for groups up to 30", price: "Inquire for pricing" },
    ],
    testimonials: [
      { name: "Sarah K.", text: "Best lasagna I've ever had outside of Italy. This place is a hidden gem!", rating: 5 },
      { name: "Mike T.", text: "We catered our office holiday party here — everyone raved about the food!", rating: 5 },
      { name: "Linda M.", text: "Warm, welcoming staff and incredible homemade bread. We come every Friday.", rating: 5 },
    ],
    features: ["Homemade pasta daily", "Vegetarian & vegan options", "Full wine & cocktail bar", "Gluten-free menu available"],
  },
  {
    slug: "riverside-auto-repair",
    name: "Riverside Auto Repair",
    tagline: "Honest Repairs. Fair Prices. Every Time.",
    description:
      "ASE-certified mechanics providing full-service auto repair and maintenance for all makes and models. Serving the community for over 20 years with transparency and integrity.",
    category: "Auto Repair",
    phone: "(555) 876-4321",
    email: "service@riversideautorepair.com",
    address: "88 Mechanic Lane, Riverside District",
    hours: "Mon–Fri 7:30am–5:30pm, Sat 8am–2pm",
    heroColor: "#1d4ed8",
    accentColor: "#2563eb",
    services: [
      { name: "Oil Change", description: "Full synthetic, conventional, or high-mileage oil", price: "From $39.99" },
      { name: "Brake Service", description: "Pads, rotors, calipers, and fluid flush", price: "From $149" },
      { name: "Engine Diagnostics", description: "Comprehensive computer scan and inspection", price: "From $75" },
      { name: "Transmission Service", description: "Fluid change, filter, and full inspection", price: "From $199" },
    ],
    testimonials: [
      { name: "James R.", text: "They diagnosed and fixed my check engine light for a fair price. No upselling!", rating: 5 },
      { name: "Priya S.", text: "I've been coming here for 8 years. Honest, reliable, and fast service.", rating: 5 },
      { name: "Tom W.", text: "They walked me through every repair with photos. Super transparent process.", rating: 5 },
    ],
    features: ["ASE-certified technicians", "Free loaner vehicles", "Lifetime warranty on parts", "Same-day service available"],
  },
  {
    slug: "downtown-dental-care",
    name: "Downtown Dental Care",
    tagline: "Comfortable, Modern Dentistry for the Whole Family",
    description:
      "A welcoming dental practice focused on preventive care, cosmetic dentistry, and patient comfort. We use the latest technology to make your dental visits stress-free.",
    category: "Dental",
    phone: "(555) 345-6789",
    email: "hello@downtowndentalcare.com",
    address: "321 Health Ave, Suite 200",
    hours: "Mon–Thu 8am–5pm, Fri 8am–3pm",
    heroColor: "#0e7490",
    accentColor: "#0891b2",
    services: [
      { name: "Teeth Cleaning", description: "Professional cleaning and oral exam", price: "From $89" },
      { name: "Teeth Whitening", description: "In-office Zoom whitening treatment", price: "From $299" },
      { name: "Dental Implants", description: "Permanent tooth replacement solutions", price: "From $1,500" },
      { name: "Invisalign", description: "Clear aligner treatment for straighter teeth", price: "From $3,500" },
    ],
    testimonials: [
      { name: "Amanda F.", text: "I used to be terrified of the dentist. This team made me feel completely at ease.", rating: 5 },
      { name: "Carlos V.", text: "My Invisalign results are incredible. Worth every penny!", rating: 5 },
      { name: "Nancy O.", text: "Modern equipment, friendly staff, and they always run on time. Love this place.", rating: 5 },
    ],
    features: ["Digital X-rays (90% less radiation)", "Sedation dentistry available", "Insurance accepted", "Emergency appointments"],
  },
  {
    slug: "summit-fitness-studio",
    name: "Summit Fitness Studio",
    tagline: "Train Hard. Live Better.",
    description:
      "A community-focused fitness studio offering personal training, group classes, and state-of-the-art equipment. For all fitness levels — beginners to athletes.",
    category: "Fitness",
    phone: "(555) 567-8901",
    email: "join@summitfitness.com",
    address: "500 Athlete Way, Uptown",
    hours: "Mon–Fri 5am–10pm, Sat–Sun 6am–8pm",
    heroColor: "#15803d",
    accentColor: "#16a34a",
    services: [
      { name: "Personal Training", description: "1-on-1 sessions with certified trainers", price: "From $65/session" },
      { name: "Group Classes", description: "HIIT, yoga, spin, pilates, and more", price: "Included with membership" },
      { name: "Nutrition Coaching", description: "Personalized meal plans and guidance", price: "From $120/month" },
      { name: "Memberships", description: "Monthly and annual plans available", price: "From $39/month" },
    ],
    testimonials: [
      { name: "Keisha B.", text: "Lost 30 lbs in 6 months with the help of my trainer here. Life-changing!", rating: 5 },
      { name: "David H.", text: "The group classes are so fun — I actually look forward to working out now.", rating: 5 },
      { name: "Rachel P.", text: "State-of-the-art equipment and the cleanest gym I've ever been to.", rating: 5 },
    ],
    features: ["Open 7 days a week", "Childcare available", "No contracts required", "First week free trial"],
  },
  {
    slug: "elite-hair-salon",
    name: "Elite Hair Salon",
    tagline: "Where Beauty Meets Expertise",
    description:
      "A premier full-service hair salon offering cuts, color, styling, and treatments for all hair types. Our expert stylists stay ahead of trends while honoring your unique look.",
    category: "Beauty & Wellness",
    phone: "(555) 678-9012",
    email: "book@elitehairsalon.com",
    address: "77 Style Blvd, Midtown",
    hours: "Tue–Sat 9am–7pm, Sun 10am–5pm",
    heroColor: "#7c3aed",
    accentColor: "#8b5cf6",
    services: [
      { name: "Haircut & Style", description: "Precision cuts for men, women, and kids", price: "From $45" },
      { name: "Color & Highlights", description: "Balayage, ombre, full color, and more", price: "From $95" },
      { name: "Keratin Treatment", description: "Smooth and frizz-free hair for months", price: "From $250" },
      { name: "Bridal Styling", description: "Hair and makeup for your special day", price: "Custom quote" },
    ],
    testimonials: [
      { name: "Brianna L.", text: "My balayage looks absolutely stunning. Best hair color I've ever had!", rating: 5 },
      { name: "Jennifer C.", text: "They did my bridal hair and I felt like royalty on my wedding day.", rating: 5 },
      { name: "Marcus D.", text: "Finally found a stylist who understands my curly hair. Won't go anywhere else!", rating: 5 },
    ],
    features: ["Expert color specialists", "Organic & vegan products", "Online booking", "Complimentary consultations"],
  },
  {
    slug: "greenleaf-landscaping",
    name: "Greenleaf Landscaping",
    tagline: "Transforming Outdoor Spaces Into Paradise",
    description:
      "Full-service landscaping and lawn care company serving residential and commercial clients. From weekly maintenance to complete garden design and installation.",
    category: "Landscaping",
    phone: "(555) 789-0123",
    email: "info@greenleaflandscaping.com",
    address: "29 Garden Road, Westside",
    hours: "Mon–Sat 7am–6pm",
    heroColor: "#166534",
    accentColor: "#15803d",
    services: [
      { name: "Lawn Maintenance", description: "Weekly mowing, edging, and cleanup", price: "From $45/visit" },
      { name: "Garden Design", description: "Custom landscape planning and planting", price: "From $500" },
      { name: "Irrigation Systems", description: "Installation and maintenance of sprinkler systems", price: "From $800" },
      { name: "Seasonal Cleanup", description: "Spring and fall cleanups, leaf removal", price: "From $150" },
    ],
    testimonials: [
      { name: "George T.", text: "My backyard went from a mess to a paradise. Absolutely incredible work!", rating: 5 },
      { name: "Diane W.", text: "Reliable, professional, and fair pricing. My lawn has never looked better.", rating: 5 },
      { name: "Sam K.", text: "They designed a complete outdoor kitchen and garden for us. Perfect execution.", rating: 5 },
    ],
    features: ["Licensed & insured", "Eco-friendly practices", "Free design consultations", "Satisfaction guaranteed"],
  },
  {
    slug: "apex-plumbing-services",
    name: "Apex Plumbing Services",
    tagline: "Fast, Reliable Plumbing — 24/7",
    description:
      "Licensed plumbers handling everything from leaky faucets to full pipe replacements. We respond fast, work clean, and back every job with a satisfaction guarantee.",
    category: "Plumbing",
    phone: "(555) 890-1234",
    email: "dispatch@apexplumbing.com",
    address: "Serving the Greater Metro Area",
    hours: "24/7 Emergency Service Available",
    heroColor: "#0c4a6e",
    accentColor: "#0369a1",
    services: [
      { name: "Emergency Repairs", description: "Burst pipes, major leaks, flooding", price: "Call for pricing" },
      { name: "Drain Cleaning", description: "Clog removal and hydro-jetting", price: "From $99" },
      { name: "Water Heater Service", description: "Installation, repair, and replacement", price: "From $299" },
      { name: "Bathroom Remodeling", description: "Full plumbing for bath and kitchen remodels", price: "Custom quote" },
    ],
    testimonials: [
      { name: "Erin M.", text: "Called at 2am with a burst pipe. They were here in 45 minutes. Absolute lifesavers!", rating: 5 },
      { name: "Bob N.", text: "Fixed a leak three other plumbers couldn't find. Professional and thorough.", rating: 5 },
      { name: "Cheryl D.", text: "Replaced our water heater same day. Great work and fair price.", rating: 5 },
    ],
    features: ["Licensed & bonded", "24/7 emergency response", "Upfront flat-rate pricing", "1-year warranty on labor"],
  },
  {
    slug: "bright-spark-electric",
    name: "Bright Spark Electric",
    tagline: "Powering Homes and Businesses Safely",
    description:
      "Master electricians providing residential and commercial electrical services. From panel upgrades to EV charger installation, we handle it all safely and up to code.",
    category: "Electrical",
    phone: "(555) 901-2345",
    email: "quotes@brightsparkelectric.com",
    address: "Serving All Neighborhoods",
    hours: "Mon–Fri 7am–6pm, Emergency service available",
    heroColor: "#854d0e",
    accentColor: "#ca8a04",
    services: [
      { name: "Panel Upgrades", description: "200-amp service upgrades and subpanel installation", price: "From $1,200" },
      { name: "EV Charger Installation", description: "Level 2 home charging station setup", price: "From $499" },
      { name: "Outlet & Switch Repair", description: "Repair or replace outlets, switches, and fixtures", price: "From $89" },
      { name: "Whole-Home Generator", description: "Standby generator installation and wiring", price: "From $3,500" },
    ],
    testimonials: [
      { name: "Paul G.", text: "Installed my EV charger quickly and cleanly. Passed city inspection first try!", rating: 5 },
      { name: "Sylvia R.", text: "Updated all our old wiring. Now we feel safe in our home. Thank you!", rating: 5 },
      { name: "Mark B.", text: "Professional, on time, and didn't leave a mess. Highest recommendation.", rating: 5 },
    ],
    features: ["Master electrician on every job", "Up-to-code guaranteed", "Free estimates", "Financing available"],
  },
  {
    slug: "pawsitive-veterinary-clinic",
    name: "Pawsitive Veterinary Clinic",
    tagline: "Compassionate Care for Your Furry Family",
    description:
      "A full-service veterinary clinic providing preventive care, surgery, dental services, and urgent care for dogs and cats. We treat your pets like our own.",
    category: "Veterinary",
    phone: "(555) 012-3456",
    email: "care@pawsitivevet.com",
    address: "404 Pet Lane, Eastside",
    hours: "Mon–Fri 8am–6pm, Sat 8am–1pm",
    heroColor: "#be185d",
    accentColor: "#db2777",
    services: [
      { name: "Wellness Exams", description: "Annual checkups and vaccinations", price: "From $59" },
      { name: "Dental Cleanings", description: "Professional teeth cleaning under anesthesia", price: "From $299" },
      { name: "Spay & Neuter", description: "Safe surgical procedures with full aftercare", price: "From $199" },
      { name: "Urgent Care", description: "Same-day appointments for sick or injured pets", price: "From $89" },
    ],
    testimonials: [
      { name: "Lisa F.", text: "Dr. Chen is the most caring vet I've ever met. My dog actually loves coming here!", rating: 5 },
      { name: "Tony A.", text: "They saved my cat's life with emergency surgery. Forever grateful.", rating: 5 },
      { name: "Emma S.", text: "Affordable, compassionate, and always thorough. Best vet clinic in town!", rating: 5 },
    ],
    features: ["Fear-free certified staff", "Digital health records", "Online appointment booking", "Microchipping available"],
  },
  {
    slug: "sunrise-real-estate",
    name: "Sunrise Real Estate",
    tagline: "Find Your Dream Home. Sell for Top Dollar.",
    description:
      "Award-winning real estate agents helping buyers and sellers navigate the local market with expertise, data, and personalized attention. Your best move starts here.",
    category: "Real Estate",
    phone: "(555) 123-4567",
    email: "homes@sunriserealestate.com",
    address: "55 Market Street, Suite 100",
    hours: "Mon–Sat 9am–6pm",
    heroColor: "#c2410c",
    accentColor: "#ea580c",
    services: [
      { name: "Home Buying", description: "Expert guidance from search to closing", price: "No buyer fees" },
      { name: "Home Selling", description: "Staging, marketing, and negotiation", price: "Competitive commission" },
      { name: "Market Analysis", description: "Free home valuation and market report", price: "Free" },
      { name: "Investment Properties", description: "Find income-producing rental properties", price: "Custom service" },
    ],
    testimonials: [
      { name: "Chris & Dana H.", text: "Sold our home for $40k over asking! The team's strategy was incredible.", rating: 5 },
      { name: "Aisha P.", text: "As a first-time buyer, I was nervous. They guided me every step of the way.", rating: 5 },
      { name: "Robert L.", text: "Professional, responsive, and got us into a competitive market. Highly recommend!", rating: 5 },
    ],
    features: ["Top 1% local agents", "Professional photography included", "MLS & social media marketing", "Virtual tour technology"],
  },
];

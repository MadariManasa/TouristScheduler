// This file provides structured data about famous places in 7 Indian and 7 World cities.

const DETAILED_PLACE_DATA = {
  // ====================================================================
  // 17 INDIAN CITIES (4 Places Each)
  // ====================================================================

  // Existing 7 cities...
  'hyderabad': [
    { id: 1, name: "Charminar", points: ["A historical four-minaret mosque built in 1591.", "Surrounded by the bustling Laad Bazaar, famous for bangles.", "The global icon of Hyderabad and a major center of history."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Charminar_04.jpg/300px-Charminar_04.jpg" },
    { id: 2, name: "Golconda Fort", points: ["Magnificent ruined citadel, famous for its incredible acoustics.", "Once the center of the diamond trade in the Deccan region.", "Capital of the Qutb Shahi dynasty."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Golconda_Fort_Hyderabad.jpg/300px-Golconda_Fort_Hyderabad.jpg" },
    { id: 3, name: "Hussain Sagar Lake", points: ["A large heart-shaped artificial lake built in 1563.", "Features a large monolithic Buddha statue in the center.", "Connects the twin cities of Hyderabad and Secunderabad."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hussain_Sagar_Lake.jpg/300px-Hussain_Sagar_Lake.jpg" },
    { id: 4, name: "Ramoji Film City", points: ["World's largest film studio complex by Guinness World Records.", "Popular tourist spot with theme park rides and sets.", "Sprawls over 1,666 acres of land."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ramoji_Film_City_-_Entrance.jpg/300px-Ramoji_Film_City_-_Entrance.jpg" },
  ],
  'delhi': [
    { id: 5, name: "India Gate", points: ["A war memorial for soldiers of the British Indian Army.", "Located on the Rajpath, surrounded by green lawns.", "Features the eternal flame, Amar Jawan Jyoti."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/India_Gate_Delhi.jpg/300px-India_Gate_Delhi.jpg" },
    { id: 6, name: "Red Fort", points: ["Historic fort that served as the main residence of Mughal emperors.", "Known for its massive enclosing walls of red sandstone.", "A UNESCO World Heritage Site."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Red_Fort_in_Delhi.jpg/300px-Red_Fort_in_Delhi.jpg" },
    { id: 7, name: "Qutub Minar", points: ["A 73-meter tall, five-storeyed tapering tower built in the 12th century.", "Made primarily of red sandstone and marble.", "The second tallest minar in India."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Qutub_Minar_at_night.jpg/300px-Qutub_Minar_at_night.jpg" },
    { id: 8, name: "Lotus Temple", points: ["Baháʼí House of Worship noted for its flower-like shape.", "Completed in 1986 and open to people of all faiths.", "Made of white marble."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lotus_Temple_New_Delhi.jpg/300px-Lotus_Temple_New_Delhi.jpg" },
  ],
  'mumbai': [
    { id: 9, name: "Gateway of India", points: ["Monument built to commemorate the visit of King George V.", "Major landmark overlooking the Arabian Sea.", "A symbol of the city."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Gateway_of_India_in_Mumbai.jpg/300px-Gateway_of_India_in_Mumbai.jpg" },
    { id: 10, name: "Marine Drive", points: ["A 3.6-kilometre long boulevard in South Mumbai.", "Known as the 'Queen's Necklace' due to the streetlights at night.", "Popular spot for walking and viewing the sunset."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Marine_Drive_in_Mumbai.jpg/300px-Marine_Drive_in_Mumbai.jpg" },
    { id: 11, name: "Elephanta Caves", points: ["A UNESCO World Heritage Site of rock-cut temples.", "Located on Elephanta Island in Mumbai Harbour.", "Known for the large statue of Trimurti Shiva."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Elephanta_Caves_Mumbai.jpg/300px-Elephanta_Caves_Mumbai.jpg" },
    { id: 12, name: "C.S. Terminus", points: ["Historic railway station and a UNESCO World Heritage Site.", "Stunning Victorian Gothic Revival architecture.", "One of the busiest stations in India."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Chhatrapati_Shivaji_Terminus_2016.jpg/300px-Chhatrapati_Shivaji_Terminus_2016.jpg" },
  ],
  'chennai': [
    { id: 13, name: "Marina Beach", points: ["The longest natural urban beach in India.", "Stretches for 13 km along the Bay of Bengal.", "Popular for walking and enjoying the sunrise."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Marina_Beach_Chennai.jpg/300px-Marina_Beach_Chennai.jpg" },
    { id: 14, name: "Kapaleeshwarar Temple", points: ["Ancient Shiva temple built in the 7th century.", "Features stunning Dravidian architecture and a large gopuram.", "Located in Mylapore."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kapaleeshwarar_Temple_Gopuram.jpg/300px-Kapaleeshwarar_Temple_Gopuram.jpg" },
    { id: 15, name: "San Thome Basilica", points: ["Minor Basilica built over the tomb of Saint Thomas.", "One of the only three known basilicas built over the tomb of an apostle.", "A significant pilgrimage center."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/San_Thome_Basilica_Chennai.jpg/300px-San_Thome_Basilica_Chennai.jpg" },
    { id: 16, name: "Fort St. George", points: ["The first English fortress in India, founded in 1644.", "Houses the Tamil Nadu legislative assembly.", "A symbol of colonial history."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fort_St_George_Chennai.jpg/300px-Fort_St_George_Chennai.jpg" },
  ],
  'kolkata': [
    { id: 17, name: "Victoria Memorial", points: ["Large marble building dedicated to Queen Victoria.", "Functions as a museum and tourist destination.", "Built in the Indo-Saracenic style."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Victoria_Memorial_Kolkata.jpg/300px-Victoria_Memorial_Kolkata.jpg" },
    { id: 18, name: "Howrah Bridge", points: ["A cantilever bridge over the Hooghly River.", "One of the busiest cantilever bridges in the world.", "Officially known as Rabindra Setu."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Howrah_Bridge_Kolkata.jpg/300px-Howrah_Bridge_Kolkata.jpg" },
    { id: 19, name: "Dakshineswar Kali Temple", points: ["Hindu temple located on the eastern bank of the Hooghly River.", "Associated with Ramakrishna Paramahamsa.", "Built in the traditional *Nava Ratna* style."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dakshineswar_Kali_Temple_2016.jpg/300px-Dakshineswar_Kali_Temple_2016.jpg" },
    { id: 20, name: "Indian Museum", points: ["The largest and oldest museum in India, founded in 1814.", "Known for its rare collections of antiques and fossils.", "Called the 'Jadughar'."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Indian_Museum_Kolkata.jpg/300px-Indian_Museum_Kolkata.jpg" },
  ],
  'jaipur': [
    { id: 21, name: "Hawa Mahal", points: ["Known as the 'Palace of Winds', built in 1799.", "Features 953 small windows called *jharokhas*.", "Part of the City Palace complex."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Hawa_Mahal_Jaipur.jpg/300px-Hawa_Mahal_Jaipur.jpg" },
    { id: 22, name: "Amer Fort", points: ["Also known as Amber Palace, a large fort situated on a hill.", "Famous for its artistic Hindu style elements.", "A major tourist attraction known for elephant rides."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Amber_Fort_Jaipur.jpg/300px-Amber_Fort_Jaipur.jpg" },
    { id: 23, name: "Jal Mahal", points: ["A palace located in the middle of the Man Sagar Lake.", "Built in the Rajput and Mughal styles.", "Only the top floor is visible above the water."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jal_Mahal_Jaipur.jpg/300px-Jal_Mahal_Jaipur.jpg" },
    { id: 24, name: "Nahargarh Fort", points: ["Sits on the edge of the Aravalli hills, overlooking the city.", "Built mainly for defense.", "Provides stunning panoramic views of Jaipur."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nahargarh_Fort_Jaipur.jpg/300px-Nahargarh_Fort_Jaipur.jpg" },
  ],
  'bengaluru': [
    { id: 25, name: "Vidhana Soudha", points: ["The seat of the state legislature of Karnataka.", "Known for its massive granite construction in Dravidian style.", "It is one of the most imposing buildings in the city."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Vidhana_Soudha_at_night.jpg/300px-Vidhana_Soudha_at_night.jpg" },
    { id: 26, name: "Lal Bagh", points: ["A famous botanical garden commissioned by Hyder Ali.", "Features a glass house and hosts an annual flower show.", "Covers an area of 240 acres."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lal_Bagh_glass_house_Bangalore.jpg/300px-Lal_Bagh_glass_house_Bangalore.jpg" },
    { id: 27, name: "Bangalore Palace", points: ["An urban palace built in the Tudor style.", "Modeled after Windsor Castle in England.", "Used for public events and concerts."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bangalore_palace.jpg/300px-Bangalore_palace.jpg" },
    { id: 28, name: "Tipu Sultan's Summer Palace", points: ["An example of Indo-Islamic architecture.", "Built entirely of teak wood.", "Once the summer residence of the Mysore ruler Tipu Sultan."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tippus_palace_Bangalore.jpg/300px-Tippus_palace_Bangalore.jpg" },
  ],
  
  // === NEW INDIAN CITIES (7) ===
  'ahmedabad': [
    { id: 29, name: "Sabarmati Ashram", points: ["Residence of Mahatma Gandhi from 1917 to 1930.", "Major site of the Salt Satyagraha (Dandi March).", "Now a national monument and museum."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sabarmati_Ashram.jpg/300px-Sabarmati_Ashram.jpg" },
    { id: 30, name: "Sidi Saiyyed Mosque", points: ["Famous worldwide for its intricately carved stone window (Jali).", "Known as the 'Sidi Saiyyed Jali'.", "Built in 1573."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sidi_Saiyyed_Mosque_Ahmedabad.jpg/300px-Sidi_Saiyyed_Mosque_Ahmedabad.jpg" },
    { id: 31, name: "Hutheesing Jain Temple", points: ["A beautifully carved Jain temple dedicated to Lord Dharmanatha.", "Built in 1848 with white marble.", "A major center of Jain pilgrimage."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hutheesing_Jain_Temple_Ahmedabad.jpg/300px-Hutheesing_Jain_Temple_Ahmedabad.jpg" },
    { id: 32, name: "Adalaj Stepwell", points: ["An intricate five-story stepwell near Ahmedabad.", "An excellent example of Indo-Islamic architecture.", "Served as a resting place for travelers."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Adalaj_Stepwell.jpg/300px-Adalaj_Stepwell.jpg" },
  ],
  'lucknow': [
    { id: 33, name: "Bara Imambara", points: ["A large complex with a beautiful mosque and the Asafi Imambara.", "Famous for its incredible unsupported central hall (Bada Hall).", "Also contains the famous Bhulbhulaiya (labyrinth)."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bara_Imambara_Lucknow.jpg/300px-Bara_Imambara_Lucknow.jpg" },
    { id: 34, name: "Chota Imambara", points: ["A 19th-century monument built by Muhammad Ali Shah.", "Also known as the Palace of Lights.", "Decorated with elaborate chandeliers and gold-plated domes."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chota_Imambara_Lucknow.jpg/300px-Chota_Imambara_Lucknow.jpg" },
    { id: 35, name: "Rumi Darwaza", points: ["An imposing sixty-foot-high gateway built in 1784.", "Often referred to as the Turkish Gate.", "A famous example of Awadhi architecture."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rumi_Darwaza_Lucknow.jpg/300px-Rumi_Darwaza_Lucknow.jpg" },
    { id: 36, name: "Ambedkar Memorial Park", points: ["A massive public park and memorial dedicated to B. R. Ambedkar.", "Built using red sandstone.", "Features statues of important social reformers."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ambedkar_Memorial_Park_Lucknow.jpg/300px-Ambedkar_Memorial_Park_Lucknow.jpg" },
  ],
  'varanasi': [
    { id: 37, name: "Dashashwamedh Ghat", points: ["The main and most spectacular ghat on the Ganges River.", "Site of the daily Ganga Aarti ceremony.", "Considered the most sacred ghat."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dashashwamedh_Ghat_Varanasi.jpg/300px-Dashashwamedh_Ghat_Varanasi.jpg" },
    { id: 38, name: "Kashi Vishwanath Temple", points: ["One of the most famous Hindu temples, dedicated to Lord Shiva.", "Located on the western bank of the river Ganga.", "Known for its golden dome."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Kashi_Vishwanath_Temple_Varanasi.jpg/300px-Kashi_Vishwanath_Temple_Varanasi.jpg" },
    { id: 39, name: "Assi Ghat", points: ["The southernmost ghat, known for its tranquil environment.", "Popular spot for morning yoga and river views.", "The meeting point of the Ganga and Assi rivers."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Assi_Ghat_Varanasi.jpg/300px-Assi_Ghat_Varanasi.jpg" },
    { id: 40, name: "Sarnath", points: ["A significant Buddhist pilgrimage site near Varanasi.", "Where Buddha gave his first sermon.", "Features the Dhamek Stupa and Ashoka Pillar ruins."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sarnath_Stupa_and_Ruins.jpg/300px-Sarnath_Stupa_and_Ruins.jpg" },
  ],
  'amritsar': [
    { id: 41, name: "Golden Temple (Harmandir Sahib)", points: ["The holiest gurdwara of Sikhism.", "Known for its golden exterior and reflective pool.", "A symbol of brotherhood and equality."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Golden_Temple_at_night.jpg/300px-Golden_Temple_at_night.jpg" },
    { id: 42, name: "Wagah Border", points: ["The border crossing ceremony between India and Pakistan.", "A daily military practice called 'Beating Retreat'.", "Known for its fervent display of patriotism."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Beating_Retreat_ceremony_at_Wagah_border.jpg/300px-Beating_Retreat_ceremony_at_Wagah_border.jpg" },
    { id: 43, name: "Jallianwala Bagh", points: ["A historic garden and memorial of national importance.", "Site of the 1919 massacre by British forces.", "Located near the Golden Temple."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jallianwala_Bagh_Amritsar.jpg/300px-Jallianwala_Bagh_Amritsar.jpg" },
    { id: 44, name: "Partition Museum", points: ["A museum dedicated to the memory of the Partition of India in 1947.", "Houses artifacts, documents, and oral histories.", "Located near the Golden Temple."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Partition_Museum%2C_Amritsar.jpg/300px-Partition_Museum%2C_Amritsar.jpg" },
  ],
  'shillong': [
    { id: 45, name: "Elephant Falls", points: ["A multi-tiered waterfall named by the British.", "One of the most famous tourist spots in Shillong.", "Requires descending several flights of steps."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Elephant_Falls_Shillong.jpg/300px-Elephant_Falls_Shillong.jpg" },
    { id: 46, name: "Shillong Peak", points: ["The highest point in Shillong, offering panoramic city views.", "Believed to be the abode of the patron deity of the city.", "Requires security clearance to visit."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Shillong_Peak_View.jpg/300px-Shillong_Peak_View.jpg" },
    { id: 47, name: "Ward's Lake", points: ["A beautiful artificial lake surrounded by a botanical garden.", "Known for its picturesque bridge and boating facilities.", "A popular spot for relaxation."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ward%27s_Lake%2C_Shillong.jpg/300px-Ward%27s_Lake%2C_Shillong.jpg" },
    { id: 48, name: "Don Bosco Museum", points: ["A seven-story museum displaying the culture of Northeast India.", "Highlights the rich and diverse heritage of the seven sister states.", "One of the largest cultural museums in Asia."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Don_Bosco_Museum_Shillong.jpg/300px-Don_Bosco_Museum_Shillong.jpg" },
  ],
  // 17th Indian City Placeholder (e.g., Goa)
  'goa': [
    { id: 49, name: "Basilica of Bom Jesus", points: ["A UNESCO World Heritage Site containing the mortal remains of St. Francis Xavier.", "One of the most famous churches in Goa.", "Showcases Portuguese colonial architecture."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Basilica_of_Bom_Jesus_Goa.jpg/300px-Basilica_of_Bom_Jesus_Goa.jpg" },
    { id: 50, name: "Baga Beach", points: ["One of the most popular and vibrant beaches in North Goa.", "Known for its nightlife, water sports, and beach shacks.", "Offers paragliding and jetskiing."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Baga_beach_goa.jpg/300px-Baga_beach_goa.jpg" },
    { id: 51, name: "Dudhsagar Falls", points: ["A four-tiered waterfall located on the Mandovi River.", "One of the tallest waterfalls in India.", "Means 'Sea of Milk' due to its white foam."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dudhsagar_falls_Goa.jpg/300px-Dudhsagar_falls_Goa.jpg" },
    { id: 52, name: "Fort Aguada", points: ["A 17th-century Portuguese fort overlooking the Arabian Sea.", "Features a four-story lighthouse.", "Offers stunning sunset views."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Fort_Aguada_Goa.jpg/300px-Fort_Aguada_Goa.jpg" },
  ],
  // 17th Indian City Placeholder (e.g., Pune)
  'pune': [
    { id: 53, name: "Shaniwar Wada", points: ["A historical fortification built in 1732, once the seat of the Peshwas.", "Known for its massive entrance gate (Dilli Darwaza).", "Was largely destroyed by an unexplained fire in 1828."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Shaniwar_Wada_Pune_India.jpg/300px-Shaniwar_Wada_Pune_India.jpg" },
    { id: 54, name: "Aga Khan Palace", points: ["A historical landmark built by Sultan Muhammed Shah Aga Khan III.", "Served as a prison for Mahatma Gandhi and others during the Quit India movement.", "Now houses a museum dedicated to Gandhi."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Aga_Khan_Palace_Pune.jpg/300px-Aga_Khan_Palace_Pune.jpg" },
    { id: 55, name: "Sinhagad Fort", points: ["A formidable fortress located on a hill 1300m above sea level.", "Played a crucial role in Maratha history.", "A popular trekking destination."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sinhagad_Fort_View_from_Top.jpg/300px-Sinhagad_Fort_View_from_Top.jpg" },
    { id: 56, name: "Osho Garden (Koregaon Park)", points: ["A peaceful, sprawling urban park and spiritual retreat center.", "Known for its unique meditative techniques.", "A stark contrast to the busy city life."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Osho_Garden_Pune.jpg/300px-Osho_Garden_Pune.jpg" },
  ],


  // ====================================================================
  // 17 WORLD CITIES (4 Places Each)
  // ====================================================================

  // Existing 7 cities...
  'paris': [
    { id: 57, name: "Eiffel Tower", points: ["An iconic wrought-iron lattice tower built in 1889.", "The global cultural icon of France.", "324 meters high, it's one of the most visited monuments in the world."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_%282020%29.jpg/300px-Tour_Eiffel_%282020%29.jpg" },
    { id: 58, name: "Louvre Museum", points: ["The world's largest art museum, housed in a former royal palace.", "Home to Leonardo da Vinci's *Mona Lisa*.", "Known for its striking glass pyramid entrance."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Louvre_Museum_Wikimedia_Commons.jpg/300px-Louvre_Museum_Wikimedia_Commons.jpg" },
    { id: 59, name: "Notre-Dame Cathedral", points: ["A medieval Catholic cathedral and fine example of French Gothic architecture.", "Located on the eastern half of the Île de la Cité.", "Currently undergoing reconstruction after the 2019 fire."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Notre_Dame_de_Paris_after_the_fire.jpg/300px-Notre_Dame_de_Paris_after_the_fire.jpg" },
    { id: 60, name: "Arc de Triomphe", points: ["Monument honoring those who fought and died for France.", "Stands at the western end of the famous Champs-Élysées.", "It is the largest monument of its kind in the world."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Arc_de_Triomphe%2C_Paris_29_September_2014.jpg/300px-Arc_de_Triomphe%2C_Paris_29_September_2014.jpg" },
  ],
  'rome': [
    { id: 61, name: "Colosseum", points: ["The largest ancient amphitheater ever built, completed in 80 AD.", "Used for gladiatorial contests and public spectacles.", "An enduring symbol of Imperial Rome and a UNESCO site."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Colosseo_2020.jpg/300px-Colosseo_2020.jpg" },
    { id: 62, name: "Trevi Fountain", points: ["The largest Baroque fountain in the city, completed in 1762.", "Visitors traditionally toss a coin into the fountain to ensure a return to Rome.", "Features the god of the sea, Neptune, on his chariot."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Fontana_di_Trevi_Roma.jpg/300px-Fontana_di_Trevi_Roma.jpg" },
    { id: 63, name: "Pantheon", points: ["A former Roman temple, now a church, known for its massive unsupported dome.", "One of the best preserved of all ancient Roman buildings.", "The large central opening (*oculus*) provides the only natural light source."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pantheon_in_Rome.jpg/300px-Pantheon_in_Rome.jpg" },
    { id: 64, name: "St. Peter's Basilica", points: ["The spiritual center of the Catholic Church, located in Vatican City.", "Features masterpieces by Renaissance artists like Michelangelo and Bernini.", "Believed to be the burial site of Saint Peter."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/St_Peters_Basilica_and_Square.jpg/300px-St_Peters_Basilica_and_Square.jpg" },
  ],
  'newyork': [
    { id: 65, name: "Statue of Liberty", points: ["A colossal neoclassical sculpture and a universal symbol of freedom.", "A gift from the people of France to the United States in 1886.", "Located on Liberty Island, accessible by ferry."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Statue_of_Liberty_from_Liberty_Island_cropped.jpg/300px-Statue_of_Liberty_from_Liberty_Island_cropped.jpg" },
    { id: 66, name: "Times Square", points: ["Major commercial intersection and entertainment district in Midtown Manhattan.", "Known as 'The Crossroads of the World' for its massive neon signs.", "One of the world's busiest pedestrian areas."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Times_Square_at_Night_2022.jpg/300px-Times_Square_at_Night_2022.jpg" },
    { id: 67, name: "Central Park", points: ["An urban park covering 843 acres in Manhattan.", "The most visited urban park in the United States.", "Features the Bethesda Terrace and Bow Bridge."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Bow_Bridge_Central_Park.jpg/300px-Bow_Bridge_Central_Park.jpg" },
    { id: 68, name: "Empire State Building", points: ["A 102-story Art Deco skyscraper in Midtown Manhattan.", "Held the title of the world's tallest building for nearly 40 years.", "Known for its distinctive lighting schemes and 86th-floor observatory."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Empire_State_Building_from_the_Rock.jpg/300px-Empire_State_Building_from_the_Rock.jpg" },
  ],
  'london': [
    { id: 69, name: "Big Ben", points: ["The nickname for the Great Clock and bell within the Elizabeth Tower.", "One of London's most famous landmarks, standing 96 meters tall.", "Its clock face is one of the most famous in the world."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Big_Ben_Clock_London.jpg/300px-Big_Ben_Clock_London.jpg" },
    { id: 70, name: "Tower Bridge", points: ["A combined bascule and suspension bridge over the River Thames.", "Features two massive towers and an upper walkway.", "Often mistakenly called London Bridge."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tower_Bridge_%28cropped%29.jpg/300px-Tower_Bridge_%28cropped%29.jpg" },
    { id: 71, name: "Buckingham Palace", points: ["The official London residence and administrative headquarters of the UK monarch.", "Site of the famous 'Changing of the Guard' ceremony.", "Features 775 rooms and beautiful state rooms open to visitors."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Buckingham_Palace_Facade.jpg/300px-Buckingham_Palace_Facade.jpg" },
    { id: 72, name: "British Museum", points: ["A public institution dedicated to human history, art, and culture.", "Home to world-famous artifacts like the Rosetta Stone.", "The Great Court is the largest covered public square in Europe."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_British_Museum_Entrance.jpg/300px-The_British_Museum_Entrance.jpg" },
  ],
  'dubai': [
    { id: 73, name: "Burj Khalifa", points: ["The tallest building and tallest structure in the world, standing 828m tall.", "Features observation decks on the 124th and 148th floors.", "A symbol of modern engineering and design."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Burj_Khalifa_%2827176503038%29.jpg/300px-Burj_Khalifa_%2827176503038%29.jpg" },
    { id: 74, name: "The Dubai Fountain", points: ["The world's largest choreographed fountain system, set on the Burj Khalifa Lake.", "Performs daily to a selection of Arabic and world music.", "Can spray water up to 152.4 m (500 ft) into the air."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Dubai_fountain_show.jpg/300px-Dubai_fountain_show.jpg" },
    { id: 75, name: "Palm Jumeirah", points: ["A massive man-made island designed in the shape of a palm tree.", "Home to luxury hotels, resorts, and residences.", "One of the most ambitious engineering projects."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Palm_Jumeirah_aerial.jpg/300px-Palm_Jumeirah_aerial.jpg" },
    { id: 76, name: "Jumeirah Beach", points: ["Popular white sand beach area known for its views of the Burj Al Arab.", "A hub for water sports and outdoor activities.", "The surrounding area features high-end hotels and resorts."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jumeirah_Beach%2C_Dubai.jpg/300px-Jumeirah_Beach%2C_Dubai.jpg" },
  ],
  'sydney': [
    { id: 77, name: "Sydney Opera House", points: ["Multi-venue performing arts centre with a distinctive shell-like design.", "A UNESCO World Heritage Site and one of the 20th century's most famous buildings.", "Features 1,000 rooms and five theatres."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sydney_Opera_House_and_Harbour_Bridge.jpg/300px-Sydney_Opera_House_and_Harbour_Bridge.jpg" },
    { id: 78, name: "Sydney Harbour Bridge", points: ["Steel arch bridge known as 'The Coathanger'.", "The largest steel arch bridge in the world.", "Offers tourist climbs to the summit."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sydney_Harbour_Bridge_from_Milsons_Point.jpg/300px-Sydney_Harbour_Bridge_from_Milsons_Point.jpg" },
    { id: 79, name: "Bondi Beach", points: ["One of Australia's most famous beaches.", "Popular destination for surfing and sunbathing.", "Hosts the world's oldest surf lifesaving club."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bondi_Beach_Sydney_2022.jpg/300px-Bondi_Beach_Sydney_2022.jpg" },
    { id: 80, name: "The Rocks", points: ["Historic neighborhood where the First Fleet landed.", "Known for its cobblestone streets and historical pubs.", "Located on the southern shore of Sydney Harbour."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/The_Rocks_Sydney_street_view.jpg/300px-The_Rocks_Sydney_street_view.jpg" },
  ],
  'tokyo': [
    { id: 81, name: "Tokyo Skytree", points: ["A broadcasting and observation tower in Sumida, Tokyo.", "The tallest tower in the world and the second tallest structure globally.", "Stands 634 meters high."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tokyo_Skytree_2022.jpg/300px-Tokyo_Skytree_2022.jpg" },
    { id: 82, name: "Shibuya Crossing", points: ["One of the world's busiest pedestrian crossings.", "Known for the 'scramble' when all traffic stops at once.", "A symbol of modern Tokyo."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Times_Square_at_Night_2022.jpg/300px-Shibuya_Crossing_Tokyo.jpg" },
    { id: 83, name: "Senso-ji Temple", points: ["Tokyo's oldest temple, a major Buddhist site.", "Features the iconic Kaminarimon (Thunder Gate).", "Founded in the 7th century."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sens%C5%8D-ji_Temple_Tokyo.jpg/300px-Sens%C5%8D-ji_Temple_Tokyo.jpg" },
    { id: 84, name: "Imperial Palace", points: ["The primary residence of the Emperor of Japan.", "Built on the site of the former Edo Castle.", "Large park area surrounded by ancient stone walls and moats."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Imperial_Palace_Tokyo_2016.jpg/300px-Imperial_Palace_Tokyo_2016.jpg" },
  ],
  
  // === NEW WORLD CITIES (7) ===
  'berlin': [
    { id: 85, name: "Brandenburg Gate", points: ["The iconic neoclassical triumphal arch and symbol of German reunification.", "Marks the entry to Unter den Linden, the famous boulevard.", "Built in the late 18th century."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Brandenburg_Gate_in_Berlin_-_2022_07_01.jpg/300px-Brandenburg_Gate_in_Berlin_-_2022_07_01.jpg" },
    { id: 86, name: "Reichstag Building", points: ["Seat of the German Parliament (Bundestag).", "Famous for its stunning modern glass dome open to visitors.", "Was severely damaged by fire in 1933."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Berlin_-_Reichstag_%284522934271%29.jpg/300px-Berlin_-_Reichstag_%284522934271%29.jpg" },
    { id: 87, name: "East Side Gallery", points: ["A long section of the Berlin Wall preserved as an international memorial.", "Features over 100 murals painted by artists from all over the world.", "The world's largest open-air gallery."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/East_Side_Gallery_in_Berlin_-_2022_07_01.jpg/300px-East_Side_Gallery_in_Berlin_-_2022_07_01.jpg" },
    { id: 88, name: "Museum Island", points: ["A complex of five globally important museums on a Spree River island.", "Houses collections spanning 6,000 years of human history and art.", "A UNESCO World Heritage Site."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Museumsinsel_Panorama_Mitte.jpg/300px-Museumsinsel_Panorama_Mitte.jpg" },
  ],
  'amsterdam': [
    { id: 89, name: "Rijksmuseum", points: ["The Dutch national museum dedicated to arts and history.", "Home to Rembrandt's *The Night Watch*.", "Located in the Museum Quarter."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Rijksmuseum_by_night.jpg/300px-Rijksmuseum_by_night.jpg" },
    { id: 90, name: "Anne Frank House", points: ["The house where Anne Frank and her family hid during WWII.", "A poignant museum dedicated to her life and diary.", "Requires booking tickets well in advance."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Westerkerk_and_Anne_Frank_House.jpg/300px-Westerkerk_and_Anne_Frank_House.jpg" },
    { id: 91, name: "Vondelpark", points: ["The largest and most famous public park in Amsterdam.", "Attracts millions of visitors annually with its open-air theatre.", "Named after the 17th-century writer Joost van den Vondel."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Vondelpark_2016.jpg/300px-Vondelpark_2016.jpg" },
    { id: 92, name: "Canal Ring", points: ["A network of historic canals forming concentric belts around the old city.", "Recognized as a UNESCO World Heritage Site.", "Perfect for boat tours and sightseeing."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amsterdam_Canal_Ring.jpg/300px-Amsterdam_Canal_Ring.jpg" },
  ],
  'bangkok': [
    { id: 93, name: "The Grand Palace", points: ["A complex of magnificent buildings, royal and ceremonial.", "Includes the revered Wat Phra Kaew (Temple of the Emerald Buddha).", "Was the official residence of the Kings of Siam (and Thailand) since 1782."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Grand_Palace_and_Wat_Phra_Kaew_Bangkok.jpg/300px-Grand_Palace_and_Wat_Phra_Kaew_Bangkok.jpg" },
    { id: 94, name: "Wat Arun (Temple of Dawn)", points: ["A stunning Buddhist temple located on the west bank of the Chao Phraya River.", "Distinguished by its colorful prang (spire) decorated with porcelain.", "Named after Aruna, the Indian God of Dawn."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wat_Arun_Temple_of_Dawn_Bangkok.jpg/300px-Wat_Arun_Temple_of_Dawn_Bangkok.jpg" },
    { id: 95, name: "Floating Markets", points: ["Vibrant markets where goods are sold from traditional boats.", "A major cultural experience showcasing Thai commerce.", "Damnoen Saduak is one of the most famous."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Damnoen_Saduak_Floating_Market_Thailand.jpg/300px-Damnoen_Saduak_Floating_Market_Thailand.jpg" },
    { id: 96, name: "Chatuchak Market", points: ["One of the world's largest outdoor weekend markets.", "Spanning 35 acres and featuring over 15,000 stalls.", "Sells everything from antiques to clothes and food."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Chatuchak_Weekend_Market.jpg/300px-Chatuchak_Weekend_Market.jpg" },
  ],
  'toronto': [
    { id: 97, name: "CN Tower", points: ["A 553.3 m high concrete communications and observation tower.", "Was the world's tallest free-standing structure from 1975 to 2007.", "Features the SkyPod and the thrilling EdgeWalk experience."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/CN_Tower_at_night_Toronto.jpg/300px-CN_Tower_at_night_Toronto.jpg" },
    { id: 98, name: "Casa Loma", points: ["A majestic Gothic Revival style house museum and garden.", "Built in 1914 for financier Sir Henry Pellatt.", "One of Toronto's most popular heritage attractions."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Casa_Loma_Toronto.jpg/300px-Casa_Loma_Toronto.jpg" },
    { id: 99, name: "Royal Ontario Museum (ROM)", points: ["The largest museum in Canada, focusing on natural history and world culture.", "Known for its Michael Lee-Chin Crystal entrance.", "Contains major exhibits on dinosaurs and ancient history."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Royal_Ontario_Museum_Main_Entrance.jpg/300px-Royal_Ontario_Museum_Main_Entrance.jpg" },
    { id: 100, name: "Distillery District", points: ["A Victorian-era industrial site converted into a trendy arts and entertainment area.", "Features cobblestone streets, Victorian architecture, and boutique shops.", "Site of the annual Toronto Christmas Market."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Distillery_District_Toronto.jpg/300px-Distillery_District_Toronto.jpg" },
  ],
  'rio': [
    { id: 101, name: "Christ the Redeemer", points: ["Art Deco statue of Jesus Christ atop Corcovado mountain.", "Considered one of the New Seven Wonders of the World.", "Stands 30 meters tall, not including its 8-meter pedestal."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Christ_the_Redeemer_Rio_de_Janeiro.jpg/300px-Christ_the_Redeemer_Rio_de_Janeiro.jpg" },
    { id: 102, name: "Sugarloaf Mountain", points: ["A peak overlooking Guanabara Bay in Rio de Janeiro.", "A famous cable car takes visitors to the summit for panoramic views.", "Rises 396 meters above the harbor."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sugarloaf_Mountain_Rio_de_Janeiro.jpg/300px-Sugarloaf_Mountain_Rio_de_Janeiro.jpg" },
    { id: 103, name: "Copacabana Beach", points: ["One of the most famous beaches in the world.", "Known for its distinctive mosaic boardwalk.", "A popular site for major events and New Year's celebrations."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Copacabana_Beach_Rio_de_Janeiro.jpg/300px-Copacabana_Beach_Rio_de_Janeiro.jpg" },
    { id: 104, name: "Maracanã Stadium", points: ["World-famous football stadium.", "Hosted the final matches of the 1950 and 2014 FIFA World Cups.", "Officially known as Estádio Jornalista Mário Filho."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Maracan%C3%A3_Stadium_2022.jpg/300px-Maracan%C3%A3_Stadium_2022.jpg" },
  ],
  
  // 17th World City Placeholder (e.g., Mexico City)
  'mexicocity': [
    { id: 105, name: "Zócalo (Plaza de la Constitución)", points: ["The main square in the heart of Mexico City.", "One of the largest city squares in the world.", "Surrounded by the Metropolitan Cathedral and the National Palace."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Zocalo_Mexico_City.jpg/300px-Zocalo_Mexico_City.jpg" },
    { id: 106, name: "Teotihuacan", points: ["Vast pre-Columbian city ruins, famous for the Pyramid of the Sun.", "A UNESCO World Heritage Site located northeast of the city.", "Was once the largest city in the pre-Columbian Americas."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pyramid_of_the_Sun_Teotihuacan.jpg/300px-Pyramid_of_the_Sun_Teotihuacan.jpg" },
    { id: 107, name: "Museo Nacional de Antropología", points: ["The largest and most visited museum in Mexico.", "Houses significant archaeological and anthropological artifacts.", "Famous for the Aztec Sun Stone."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Museo_Nacional_de_Antropolog%C3%ADa_exterior.jpg/300px-Museo_Nacional_de_Antropolog%C3%ADa_exterior.jpg" },
    { id: 108, name: "Chapultepec Castle", points: ["A historic castle located on Chapultepec Hill.", "It is the only royal castle in North America.", "Now houses the National Museum of History."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chapultepec_Castle_Mexico_City.jpg/300px-Chapultepec_Castle_Mexico_City.jpg" },
  ],
  // 17th World City Placeholder (e.g., Cairo)
  'cairo': [
    { id: 109, name: "Pyramids of Giza", points: ["Ancient pyramids located on the Giza Plateau near Cairo.", "The Great Pyramid is the oldest and largest of the three.", "The last remaining of the Seven Wonders of the Ancient World."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pyramids_of_Giza_Cairo.jpg/300px-Pyramids_of_Giza_Cairo.jpg" },
    { id: 110, name: "Great Sphinx of Giza", points: ["A limestone statue of a mythical creature with a lion's body and a human's head.", "The oldest known monumental sculpture in Egypt.", "Faces directly from West to East."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Great_Sphinx_of_Giza_2017.jpg/300px-Great_Sphinx_of_Giza_2017.jpg" },
    { id: 111, name: "Khan el-Khalili", points: ["A major souk (marketplace) in the historic center of Cairo.", "Known for its trade in spices, jewelry, and souvenirs.", "Dating back to the 14th century."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Khan_el-Khalili_Cairo.jpg/300px-Khan_el-Khalili_Cairo.jpg" },
    { id: 112, name: "Egyptian Museum", points: ["Home to the largest collection of ancient Egyptian artifacts in the world.", "Features the treasures of Tutankhamun.", "Located in Tahrir Square."], photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Egyptian_Museum_Cairo_2022.jpg/300px-Egyptian_Museum_Cairo_2022.jpg" },
  ],
};

// Map coordinates (requires supplementing the CITY_COORDINATES object)
export const CITY_COORDINATES = {
    // Existing 14 cities...
    hyderabad: { lat: 17.3850, lng: 78.4867 }, delhi: { lat: 28.6139, lng: 77.2090 }, mumbai: { lat: 19.0760, lng: 72.8777 }, 
    chennai: { lat: 13.0827, lng: 80.2707 }, kolkata: { lat: 22.5726, lng: 88.3639 }, jaipur: { lat: 26.9124, lng: 75.7873 },
    bengaluru: { lat: 12.9716, lng: 77.5946 }, 
    paris: { lat: 48.8566, lng: 2.3522 }, rome: { lat: 41.9028, lng: 12.4964 }, newyork: { lat: 40.7128, lng: -74.0060 },
    london: { lat: 51.5074, lng: 0.1278 }, dubai: { lat: 25.276987, lng: 55.296249 }, sydney: { lat: -33.8688, lng: 151.2093 },
    tokyo: { lat: 35.6895, lng: 139.6917 },
    
    // NEW COORDINATES
    ahmedabad: { lat: 23.0225, lng: 72.5714 }, lucknow: { lat: 26.8467, lng: 80.9462 }, varanasi: { lat: 25.3176, lng: 82.9739 },
    amritsar: { lat: 31.634, lng: 74.8722 }, shillong: { lat: 25.5788, lng: 91.8933 }, goa: { lat: 15.2993, lng: 74.1240 },
    pune: { lat: 18.5204, lng: 73.8567 }, mexicocity: { lat: 19.4326, lng: -99.1332 }, cairo: { lat: 30.0444, lng: 31.2357 },
    berlin: { lat: 52.5200, lng: 13.4050 }, amsterdam: { lat: 52.3676, lng: 4.9041 }, bangkok: { lat: 13.7563, lng: 100.5018 },
    toronto: { lat: 43.6532, lng: -79.3832 }, rio: { lat: -22.9068, lng: -43.1729 },
};

export const getCityCoordinates = (query) => {
    return CITY_COORDINATES[query.toLowerCase()] || null;
}

export const getFamousPlacesByCity = (query) => {
    return DETAILED_PLACE_DATA[query.toLowerCase()] || [];
}
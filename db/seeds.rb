# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Event.destroy_all
Category.destroy_all
Registration.destroy_all

demo = User.create!( email: 'demo@user.com', fname: 'demo', lname: 'user', password: 'demouser')
cow = User.create!( email: 'cowcow', fname: 'cowcow', lname: 'cowcow', password: 'cowcow')
kanye = User.create!( email: 'Kanye West', fname: 'Kanye', lname: 'West', password: 'Kanye West')
cowcow =User.create!( email: 'cowcowsssw', fname: 'Insomniac', lname: 'Inc', password: 'Insomniac')
cos = User.create!( email: 'cowcosss', fname: 'Quest', lname: 'Crew', password: 'cowcoww')
eth = User.create!( email: 'cowcowwssaa', fname: 'Vitalik', lname: 'Buterin', password: 'cowcoww')
kern = User.create!( email: 'cowcodafkw', fname: 'The', lname: 'Fung Bros', password: 'cowcoww')
cindy = User.create!( email: 'cowcoqwww', fname: 'Naruto', lname: 'Uzumaki', password: 'cowcoww')
wendy = User.create!( email: 'cowcoqweqweww', fname: 'Bryan', lname: 'Eats', password: 'cowcoww')
quang = User.create!( email: 'cowcsasoww', fname: 'Rich', lname: 'Brian', password: 'cowcoww')
alex = User.create!( email: 'cowcovvvvvww', fname: '21', lname: 'Savage', password: 'cowcoww')

Category.create!( category: 'Performing & Visual Arts')
Category.create!( category: 'Music Festival')
Category.create!( category: 'Travel & Outdoor')
Category.create!( category: 'Health')
Category.create!( category: 'Sports & Fitness')
Category.create!( category: 'Business')
Category.create!( category: 'Food & Drink')
Category.create!( category: 'Hobbies')




coachella = Event.create!(title: "Coachella Valley Music and Arts Festival", description: "The Coachella Valley Music and Arts Festival is the most important American music festival of the year. Taking place for one weekend (April 14-16) at Empire Polo Club in Indio, California, it returns this year for the first time since 2019 after a two-year hiatus due to the COVID-19 pandemic. This year’s headliners are Billie Eilish, Harry Styles, and the Weeknd with Swedish House Mafia; Phoebe Bridgers, Megan Thee Stallion, Doja Cat, Jamie xx, Run the Jewels, Disclosure, Caroline Polachek, 100 gecs, and many, many more are also on the lineup. Stay tuned for more info from Coachella, including the performance schedule, live stream details, and all the news from the festival.", location: "EMPIRE POLO CLUB. Indio, CA 92201", category: 'Music Festival' , start_date: "14/04/2023" , end_date: "16/04/2023", start_time: "07:00:00", end_time: "24:00:00" , host_id: demo.id )
file1 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/coachella1.png')
coachella.photo.attach(io: file1, filename:'coachella1.png')

outsidelands = Event.create!(title: "Outside Lands Music and Arts Festival", description: "Outside Lands is a 3-Day Festival celebrating music, food, wine, beer, art, cannabis, and everything we love about the Bay Area. The Outside Lands Music and Arts Festival is a music festival held annually in San Francisco, California, at Golden Gate Park. The festival is produced by Another Planet Entertainment, Superfly Presents, and Starr Hill Presents. It is the largest independently owned music festival in the US.", location: "GOLDEN GATE PARK, San Fransisco, CA", category: 'Music Festival' , start_date: "08/05/2022" , end_date: "08/07/2022", start_time: "11:00:00", end_time: "24:00:00" , host_id: kanye.id )
file2 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/outsidelands1.jpeg')
outsidelands.photo.attach(io: file2, filename:'outsidelands1.jpeg')

worldofdance = Event.create!(title: "World of Dance - National Dance Competition", description: "World of Dance is the largest International Urban Dance Competition with focus on the art of street dancing and today’s new aged choreography. \r\n World of Dance is the largest touring event that embraces Urban Dance and Lifestyle. \n Hundreds of participants with the country’s top dance teams, and thousands of spectators will partake in a performance festival setting, awarding today’s top dancers with the most prestigious acknowledgements. \n The 2019 World of Dance Tour promises to deliver an unparalleled experience to both participants and spectators in an effort to build a reputation as the Nation's authority in Urban Dance Culture.", location: "THE SOURCE Buena Park, CA 90621", category: 'Performing and Visual Arts' , start_date: "28/07/2022" , end_date: "01/08/2022", start_time: "12:00:00", end_time: "22:00:00" , host_id: cos.id )
file3 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/worldofdance5.jpeg')
worldofdance.photo.attach(io: file3, filename:'worldofdance5.jpeg')


ethdenver = Event.create!(title: "ETH DENVER 2023", description: "ETHDenver is a member-owned Community Innovation Festival. With the genesis of SporkDAO in June of 2021, ETHDenver is the first event based DAO in the world. The ETHDenver #BUIDLATHON is about bringing diverse creativity around a common purpose. Distributed computing is the future and Colorado is a leading community supporting this emerging technology. Our event empowers participants to shape this new world, while cementing the Rocky mountain region and the State of Colorado as a thriving hub of Ethereum and blockchain innovation.  ", location: "1000 N Broadway, Denver, CO 80203", category: 'Business' , start_date: "04/02/2023" , end_date: "24/02/2023", start_time: "01:00:00", end_time: "20:00:00" , host_id: eth.id )
file4 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/ethdenver.jpeg')
ethdenver.photo.attach(io: file4, filename:'ethdenver.jpeg')


nightmarket = Event.create!(title: "626 Night Market Bay Area 2023", description: "626 Night Market, the original and largest night market in the United States, returns Summer 2023. 626 Night Market is inspired by the famous open-air nighttime bazaars of Asia, where people come together to eat, drink, socialize, and be entertained. Established in 2012, the large-scale market is named after the 626 area code region of San Gabriel Valley, northeast of Los Angeles. The iconic Californian festival features 250+ food, merchandise, crafts, artists, games, live concerts, and entertainment attractions in an epic event that appeals to all ages with up to 100,000 attendees per 3-day weekend.", location: "405 Pleasanton Ave, Pleasanton, CA 94566", category: 'Food and Drink' , start_date: "11/06/2023" , end_date: "13/06/2023", start_time: "07:00:00", end_time: "21:00:00" , host_id: demo.id )
file5 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/626nightmarket.png')
nightmarket.photo.attach(io: file5, filename:'626nightmarket.png')


animeexpo = Event.create!(title: "Anime Expo | Los Angeles Anime Convention", description: "Anime Expo celebrated its 31st annual convention by returning to the Los Angeles Convention Center live and in-person, bringing together fans and industry professionals for the largest celebration of Japanese pop culture in North America. Hosted by The Society for the Promotion of Japanese Animation (SPJA), the sold-out four-day convention saw attendees from over 70 countries descend upon the city of Los Angeles to generate an estimated positive economic impact of over $100 Million for local hotels and businesses. Anime Expo fans that were unable to attend Anime Expo 2022 also had the opportunity to catch a glimpse of AX virtually through Anime Expo Lite through Twitch and YouTube.", location: "LOS ANGELES CONVETION CENTER", category: 'Hobbies' , start_date: "19/05/2023" , end_date: "22/05/2023", start_time: "08:00:00", end_time: "24:00:00" , host_id: cindy.id )
file6 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/animeexpo.jpeg')
animeexpo.photo.attach(io: file6, filename:'animeexpo.jpeg')


headintheclouds = Event.create!(title: "Head in the Clouds", description: "Head In The Clouds is a 2-day festival taking place on August 20 & 21, 2022 at Brookside at the Rose Bowl in Pasadena, CA
Brookside at the Rose Bowl is located at 1001 Rose Bowl Dr, Pasadena, CA 91103.
Venue opens at 2pm both days.
Show will take place rain or shine.
No ins/outs.
All ages are welcome. 
Food and beverages sold separately. 
Lineup and set times subject to change without notice.
Please visit our ADA page for ADA information.
Curfew 11pm Saturday / 10pm Sunday.", location: "ROSE BOWL STADIUM,Pasadena, CA", category: 'Music Festival' , start_date: "20/08/2022" , end_date: "21/08/2022", start_time: "09:00:00", end_time: "23:00:00" , host_id: quang.id )
file7 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/hitc4.jpeg')
headintheclouds.photo.attach(io: file7, filename:'hitc4.jpeg')


xgames = Event.create!(title: "X Games Aspen 2023", description: "X Games Aspen is the premiere extreme snow sports competition taking place every January in Aspen, Colorado. More than 200 world class ski, snowboard and snowmobile athletes compete on top of the Buttermilk Mountain surrounded by a stunning Colorado scenery. The competition showcases 18 different disciplines during four days. But X Games is not only just about sports. There are many live music acts from top artists and bands at X Games concert stage that will spice up your winter. It includes LCD Soundsystem, Marshmello, Martin Garrix, and Method & Redman, Lil’ Wayne, Louis The Child, The Chainsmokers and Kygo. X Games also featured Metallica, Kanye West, Tiesto, and Nicki Minaj. Concerts require a ticket, but many other events of X Games are free to attend.", location: "Aspen, Colorado", category: 'Sports and Fitness' , start_date: "12/02/2023" , end_date: "15/02/2023", start_time: "05:00:00", end_time: "23:00:00" , host_id: demo.id )
file8 = URI.open('https://active-storage-ensombryte-dev.s3.us-west-1.amazonaws.com/xgames.jpeg')
xgames.photo.attach(io: file8, filename:'xgames.jpeg')


colorguard = Event.create!(title: "California Color Guard Circuit Competition", description: "California Color Guard Circuit (CCGC) creates safe spaces where students and educators of indoor marching arts are visible and celebrated. CCGC serves the Northern California marching arts community of performers, instructors, judges, families, and alumni through the coordination of competitive contests and educational forums to instill our values of inclusion, sportsmanship, and excellence.", location: "Oak Grove high School", category: 'Performing & Visual Arts' , start_date: "07/17/2023" , end_date: "07/19/2023", start_time: "11:00:00", end_time: "23:00:00" , host_id: kanye.id )
file9 = URI.open('https://active-storage-ensombryte-pro.s3.us-west-1.amazonaws.com/colorguard.png')
colorguard.photo.attach(io: file9, filename:'colorguard.png')

scpa = Event.create!(title: "SCPA Finals", description: "SCPA is an all volunteer nonprofit public benefit corporation and is not organized for the private gain of any person. It is organized under the California Nonprofit Public Benefit Corporation Law for public purposes. The specific purpose of this corporation is to promote the growth of the percussive arts through competition, performance and educational activities and to encourage goodwill, good sportsmanship and camaraderie through such activities.", location: "Toyota Arena", category: 'Performing & Visual Arts' , start_date: "04/14/2023" , end_date: "04/16/2023", start_time: "11:00:00", end_time: "23:00:00" , host_id: kanye.id )
file10 = URI.open('https://active-storage-ensombryte-pro.s3.us-west-1.amazonaws.com/scpa.jpeg')
scpa.photo.attach(io: file10, filename:'scpa.jpeg')

wgi = Event.create!(title: "WGI Percussion World Championships", description: "The WGI Percussion and Winds World Championships is the premier winter showcase for indoor percussion and wind ensembles. The event is produced by WGI Sport of the Arts which also produces the WGI Color Guard World Championships on a separate weekend. The WGI Championships typically draw 15,000 participants over two weekends, including more than 350 color guards and 250 percussion ensembles from 40 states and 5 countries.

# The percussion contest on Thursday, Friday and Saturday features preliminary rounds in nine classes of competition, providing opportunities for units at all levels of expertise, from beginning to advanced. Scholastic units draw members from the same high school. Independent units draw members who are not necessarily affiliated with a particular school. Concert percussion units do not include marching in their programs. Up to 15 units in each division advance to the Finals round, where medals are awarded to the top three finishers.
# ", location: "Dayton, Ohio", category: 'Performing & Visual Arts' , start_date: "04/20/2023" , end_date: "04/22/2023", start_time: "06:00:00", end_time: "23:00:00" , host_id: kanye.id )
file11 = URI.open('https://active-storage-ensombryte-pro.s3.us-west-1.amazonaws.com/wgi.jpeg')
wgi.photo.attach(io: file11, filename:'wgi.jpeg')

Registration.create!(user_id: demo.id, event_id: coachella.id)
Registration.create!(user_id: cow.id, event_id: coahcella.id)
Registration.create!(user_id: demo.id, event_id: worldofdance.id)
Registration.create!(user_id: demo.id, event_id: outsidelands.id)
Registration.create!(user_id: cow.id, event_id: ethdenver.id)
Registration.create!(user_id: demo.id, event_id: xgames.id)
Registration.create!(user_id: demo.id, event_id: animeexpo.id)
Registration.create!(user_id: cow.id, event_id: outsidelands.id)
Registration.create!(user_id: cow.id, event_id: headintheclouds.id)

Like.create!(user_id: demo.id, event_id: xgames.id)
Like.create!(user_id: cow.id, event_id: headintheclouds.id)
Like.create!(user_id: cow.id, event_id: animeexpo.id)
Like.create!(user_id: demo.id, event_id: nightmarket.id)
Like.create!(user_id: demo.id, event_id: ethdenver.id)
Like.create!(user_id: demo.id, event_id: worldofdance.id)
Like.create!(user_id: demo.id, event_id: outsidelands.id)
Like.create!(user_id: cow.id, event_id: coachella.id)
Like.create!(user_id: cow.id, event_id: ethdenver.id)

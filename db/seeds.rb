# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

User.create!( email: 'demo@user.com', fname: 'demo', lname: 'user', password: 'demouser')
User.create!( email: 'cowcow', fname: 'cowcow', lname: 'cowcow', password: 'cowcow')
User.create!( email: 'cowcoww', fname: 'cowcoww', lname: 'cowcoww', password: 'cowcoww')

Category.create!( category: 'rave')
Category.create!( category: 'festival')



Event.create!(title: "coachella 20222", description: "top of the line event", location: "socal", category_id: 2 , start_date: "10/10/2020" , end_date: "10/10/2020", start_time: "19:00:00", end_time: "19:00:00" , host_id: 1 )

Event.create!(title: "outsidelands", description: "top of the line event", location: "socal", category_id: 1 , start_date: "10/10/2020" , end_date: "10/10/2020", start_time: "19:00:00", end_time: "19:00:00" , host_id: 2 )
Event.create!(title: "head in the clouds", description: "top of the line event", location: "socal", category_id: 2 , start_date: "10/10/2020" , end_date: "10/10/2020", start_time: "19:00:00", end_time: "19:00:00" , host_id: 3 )
Event.create!(title: "moms house", description: "top of the line event", location: "socal", category_id: 1 , start_date: "10/10/2020" , end_date: "10/10/2020", start_time: "19:00:00", end_time: "19:00:00" , host_id: 1 )
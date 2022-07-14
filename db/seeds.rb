# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!( email: 'demo@user.com', fname: 'demo', lname: 'user', password: 'demouser')
User.create!( email: 'cowcow', fname: 'cowcow', lname: 'cowcow', password: 'cowcow')

Category.create!( category: 'rave')
Category.create!( category: 'festival')

start_date = Date.parse("10/20/2020")
# User.create( )

Event.create!(title: "coachella 20222", description: "top of the line event", location: "socal", category_id: "2", start_date: start_date, end_date: start_date, start_time: '19:00:00' , end_time: '19:00:00', host_id: 1 )
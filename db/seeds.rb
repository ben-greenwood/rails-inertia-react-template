
puts "seeding db"

@account = Account.create!(
  email: 'account@example.com',
  password: 'Password12',
  name: 'John Doe'
)
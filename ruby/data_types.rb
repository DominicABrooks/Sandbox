# basically, just js types except
# things i stored as hashes instead of as a js object
# also, i noticed there's symbol instead of just storing everything as a str

num = 1
bool = true
str = "str"
str2 = 'str'
arr = [1,"uh",2,3,"dsds"]
hash = {
    "this": "is",
    :this => "test",
    basically: "basically",
    json: "but it's not"
}
fl = 1.4 +2

puts "Num #{num}"
puts "Bool #{bool}"
puts "str #{str}"
puts "str2 #{str2}"
puts (arr[-1])
puts hash
puts hash["this"]
puts hash[:this]
puts hash[0]
puts fl
def printsOne(a)
    puts a;
    #puts b;
end

def printsTwo(a,b)
    puts a;
    puts b;
end

puts printsOne(:a => 1)
puts printsOne(:a => 1, :b => 2)
puts printsTwo({:a => 1}, :b => 2)
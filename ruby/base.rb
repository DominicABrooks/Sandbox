#Nice.
class Base
    attr_accessor :field1

    def initialize(field1)
        @field1 = field1
    end
end

thing = Base.new("test")

puts thing.field1

class Animal
    attr_accessor :name, :legs, :age

    def speak
        puts "Animal"
    end
end

class Dog < Animal
    def speak()
        puts "Bark"
    end
end

class Engine
    def start
      puts "Engine starting..."
    end
end

# composition example in ruby
class Car
    def initialize
        @engine = Engine.new
    end

    def start
        @engine.start
    end
end
  
car = Car.new
car.start  # => Engine starting...  
#car.engine

class Dog2
    @@count = 0
  
    def self.count
      @@count
    end
  
    def initialize(name)
      @name = name
      @@count += 1
    end
end
  
dog1 = Dog2.new("Fido")
dog2 = Dog2.new("Rex")
puts Dog2.count  # => 2  

animal = Animal.new()
animal.speak

dog = Dog.new()
dog.speak()

def make_sound(animal)
    animal.speak if animal.respond_to?(:speak)
end

class Cat
    def speak
        puts "Meow"
    end
end

make_sound(Cat.new)  # => Meow
  
#No way to explicitly make abstracts in ruby supposedly
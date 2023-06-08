const square = (x) => {
    return x * x
}

const square2 = (x) =>  x * x

const event = {
    name: 'Birthday Party',
    guestlist: ["Andrew", "John", "Dom"],
    printGuesList() {
        console.log('Guest list for ' + this.name)

        this.guestlist.forEach((guest) => {
            console.log(guest + " has arrived!");
        })
    }
}

console.log(square(5));
event.printGuesList();
function createItem(name = "Unnamed Item", category="General", price=0, stock=0){
    return { name: name ,
        category: category ,
        price: price ,
        stock: stock ,


        updateStock: function (newStock) {
            if (typeof newStock === "number") {
                this.stock = newStock;
                console.log(`${this.name} stock updated to ${this.stock}`);
            }
        },

        applyDiscount: function (discount) {
            if (discount >= 0 && discount <=100) {
                this.price -= ((price*discount)/100);
                console.log(`${this.name} price after ${discount}% discount: $${this.price.toFixed(2)}`);
            }
        }
    }
}

const inventory = {
    items:[],
    addItem:function (item){
        if (item && item.name) {
            this.items.push(item);
            console.log(`${item.name} added to inventory.`);
        } else {
            alert("Invalid item.");
        }
    },
    removeItem:function (itemName){
        const idx= items.findIndex(item => item.name === itemName);
        if (idx !== -1){
            items.splice(items[idx], 1);
            console.log(`${items[idx]} removed from inventory.`);
        }
        else {
            console.log(`Item "${items[idx]}" not found.`);
        }
    },
    getItem(itemName) {
        const item = this.items.find(item => item.name === itemName);
        return item || null;
    },
    filterItems(predicate) {
        return this.items.filter(predicate);
    },
};

//--------------------------

const laptop = createItem("Laptop", "Electronics", 1200, 10);
const phone = createItem("Phone", "Electronics", 800, 5);

inventory.addItem(phone);
inventory.addItem(laptop);

laptop.updateStock(7);

phone.applyDiscount(10);


console.log(inventory.filterItems(item => item.category === "Electronics"));

console.log(inventory.filterItems(item => item.stock < 10));

inventory.removeItem("phone");

const removed = inventory.getItem("laptop");
console.log(removed);

;
;
;
// CLASS PRODUCT
var Product = /** @class */ (function () {
    function Product(type, idProduct, size, color, status) {
        this.type = type;
        this.idProduct = idProduct;
        this.size = size;
        this.color = color;
        this.status = status;
    }
    Product.prototype.assegnaCliente = function (customer) {
        console.log("The product ".concat(this.type, " was ordered by ").concat(customer.name, " ").concat(customer.firstname, " with ").concat(customer.paymentType, ".\nID: ").concat(this.idProduct, ",\nSize: ").concat(this.size, ",\nColor: ").concat(this.color, "."));
    };
    return Product;
}());
;
// CLASS CUSTOMER
var Customer = /** @class */ (function () {
    function Customer(name, firstname, email, paymentType) {
        this.name = name;
        this.firstname = firstname;
        this.email = email;
        this.paymentType = paymentType;
    }
    Customer.prototype.orderProduct = function (product) {
        if (product.status) {
            console.log("The ".concat(product.type, " that ").concat(this.name, " ").concat(this.firstname, " wants to buy is available."));
            product.assegnaCliente(this);
        }
        else {
            console.log("".concat(this.name, " ").concat(this.firstname, ", we're sorry but ").concat(product.type, " is out of stock."));
        }
    };
    return Customer;
}());
// CLASS PRODUCTIONPROCESS
var ProductionProcess = /** @class */ (function () {
    function ProductionProcess(processName, description, productsInProcess) {
        this.processName = processName;
        this.description = description;
        this.productsInProcess = productsInProcess;
    }
    ProductionProcess.prototype.explainProcess = function () {
        console.log("".concat(this.processName, ": ").concat(this.description));
    };
    ProductionProcess.prototype.addProduct = function (product) {
        this.productsInProcess.push(product.type);
        console.log("".concat(product.type, " is now in ").concat(this.processName, " production."));
    };
    return ProductionProcess;
}());
// PRODUCTS
var swimsuitRelax = new Product('Swimsuit Relax', 1000, 'S', 'blue', true);
var bikiniRelax = new Product('Bikini Relax', 1100, 'M', 'blue', true);
var swimsuitActive = new Product('Swimsuit Active', 2000, 'M', 'blue', true);
var bikiniActive = new Product('Bikini Active', 2100, 'L', 'blue', true);
var swimsuitExtreme = new Product('Swimsuit Extreme', 3000, 'M', 'blue', true);
var bikiniExtreme = new Product('Bikini Extreme', 3100, 'S', 'blue', true);
var childswimsuitRelax = new Product('Swimsuit Extreme', 3000, 'M', 'blue', false);
var childswimsuitActive = new Product('Swimsuit Extreme', 3000, 'M', 'blue', false);
var childswimsuitExtreme = new Product('Swimsuit Extreme', 3000, 'M', 'blue', false);
// CUSTOMERS
var john = new Customer('John', 'Doe', 'johndoe@gmail', 'Visa');
var alice = new Customer('Alice', 'Red', 'alicered@gmail', 'Mastercard');
var matteo = new Customer('Matteo', 'Gallardo', 'matteogallardooo@gmail', 'Visa');
var laura = new Customer('Laura', 'Simpson', 'laurasimpson@gmail', 'Mastercard');
var maria = new Customer('Maria', 'Gonzalez', 'maria@gmail', 'Mastercard');
var fred = new Customer('Fred', 'Flinstone', 'fred@gmail', 'Visa');
var manny = new Customer('Manny', 'Machado', 'manny@gmail', 'Visa');
// PRODUCTION PROCESS
var netsConversion = new ProductionProcess('Nets Conversion', 'Fishing nets are collected and cleaned, then turned into plastic pellets. These pellets are used to make fabric, which is then used to create swimwear. This process helps reduce plastic waste and promotes environmental sustainability.', ['Swimsuit Relax', 'Swimsuit Active', 'Swimsuit Extreme']);
// ORDERS
matteo.orderProduct(swimsuitExtreme);
alice.orderProduct(bikiniRelax);
fred.orderProduct(swimsuitActive);
laura.orderProduct(bikiniExtreme);
manny.orderProduct(childswimsuitRelax);
maria.orderProduct(childswimsuitActive);
john.orderProduct(childswimsuitExtreme);
// EXPLAIN AND ADD PRODUCTION PRODUCTS
netsConversion.explainProcess();
netsConversion.addProduct(childswimsuitRelax);
netsConversion.addProduct(childswimsuitExtreme);
netsConversion.addProduct(childswimsuitActive);
